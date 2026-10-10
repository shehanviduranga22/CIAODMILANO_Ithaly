import "dotenv/config";
import {
  createHash,
  createHmac,
  randomBytes,
  scrypt as scryptCallback,
  timingSafeEqual,
} from "node:crypto";
import { createServer } from "node:http";
import { MongoClient, MongoServerError } from "mongodb";

const port = Number(process.env["PORT"] ?? 3001);
const host = process.env["HOST"] ?? "127.0.0.1";
const databaseName = process.env["MONGODB_DATABASE"] ?? "ciao_d_milano";
const maxBodyBytes = 16 * 1024;
const sessionCookieName = "cdm_session";
const sessionLifetimeSeconds = 60 * 60 * 24 * 7;
const orderProducts = new Map([
  ["camel-wool-coat", { name: "Camel Wool Coat", price: 1290 }],
  ["silk-column-dress", { name: "Silk Column Dress", price: 640 }],
  ["atelier-blazer", { name: "Atelier Blazer", price: 890 }],
  ["nero-suit", { name: "Nero Wool Suit", price: 2450 }],
  ["merino-knit", { name: "Fine Merino Knit", price: 390 }],
  ["milan-handbag", { name: "Milano Handbag", price: 1850 }],
  ["cashmere-knit", { name: "Ivory Cashmere Knit", price: 420 }],
  ["penny-loafer", { name: "Brera Penny Loafer", price: 690 }],
  ["silk-twill-scarf", { name: "Como Silk Scarf", price: 280 }],
  ["calfskin-belt", { name: "Cintura Calfskin Belt", price: 320 }],
  ["leather-cardholder", { name: "Porta Carte Cardholder", price: 210 }],
  ["cashmere-scarf", { name: "Cashmere Travel Wrap", price: 450 }],
]);

let accountCollectionPromise;
let mongoClient;

function getAccountCollection() {
  if (!accountCollectionPromise) {
    const uri = process.env["MONGODB_URI"];
    if (!uri) {
      throw new Error("MONGODB_URI is not configured");
    }

    const client = new MongoClient(uri);
    mongoClient = client;
    accountCollectionPromise = client
      .connect()
      .then(async () => {
        const collection = client.db(databaseName).collection("account_details");
        await collection.createIndex({ email: 1 }, { unique: true });
        return collection;
      })
      .catch((error) => {
        accountCollectionPromise = undefined;
        throw error;
      });
  }

  return accountCollectionPromise;
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "cache-control": "no-store",
    "content-type": "application/json; charset=utf-8",
  });
  response.end(JSON.stringify(payload));
}

function getSessionSigningKey() {
  const uri = process.env["MONGODB_URI"];
  if (!uri) {
    throw new Error("MONGODB_URI is not configured");
  }
  return createHash("sha256").update(`ciao-d-milano-session:${uri}`).digest();
}

function createSessionToken(email) {
  const expiresAt = Math.floor(Date.now() / 1000) + sessionLifetimeSeconds;
  const payload = Buffer.from(`${email}\n${expiresAt}`).toString("base64url");
  const signature = createHmac("sha256", getSessionSigningKey())
    .update(payload)
    .digest("base64url");
  return `${payload}.${signature}`;
}

function getSessionEmail(request) {
  const cookies = request.headers.cookie?.split(";") ?? [];
  const sessionCookie = cookies
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(`${sessionCookieName}=`));
  if (!sessionCookie) return null;

  const token = sessionCookie.slice(sessionCookieName.length + 1);
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;

  try {
    const expectedSignature = createHmac("sha256", getSessionSigningKey()).update(payload).digest();
    const receivedSignature = Buffer.from(signature, "base64url");
    if (
      receivedSignature.length !== expectedSignature.length ||
      !timingSafeEqual(receivedSignature, expectedSignature)
    ) {
      return null;
    }

    const decodedPayload = Buffer.from(payload, "base64url").toString("utf8");
    const separatorIndex = decodedPayload.lastIndexOf("\n");
    const email = decodedPayload.slice(0, separatorIndex);
    const expiresAt = Number(decodedPayload.slice(separatorIndex + 1));
    if (
      separatorIndex < 0 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !Number.isSafeInteger(expiresAt) ||
      expiresAt <= Math.floor(Date.now() / 1000)
    ) {
      return null;
    }
    return email;
  } catch {
    return null;
  }
}

function sendSessionCookie(response, token) {
  const secure = process.env["NODE_ENV"] === "production" ? "; Secure" : "";
  response.setHeader(
    "set-cookie",
    `${sessionCookieName}=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=${sessionLifetimeSeconds}${secure}`,
  );
}

function clearSessionCookie(response) {
  const secure = process.env["NODE_ENV"] === "production" ? "; Secure" : "";
  response.setHeader(
    "set-cookie",
    `${sessionCookieName}=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0${secure}`,
  );
}

async function getSession(request, response) {
  try {
    const email = getSessionEmail(request);
    if (!email) {
      sendJson(response, 401, { status: "unauthenticated" });
      return;
    }

    const account = await (
      await getAccountCollection()
    ).findOne(
      { email },
      { projection: { _id: 0, firstName: 1, lastName: 1, email: 1, createdAt: 1 } },
    );
    if (!account) {
      sendJson(response, 401, { status: "unauthenticated" });
      return;
    }

    sendJson(response, 200, {
      status: "authenticated",
      account: {
        firstName: account.firstName,
        lastName: account.lastName,
        email: account.email,
        createdAt: account.createdAt,
      },
    });
  } catch (error) {
    console.error("Could not verify account session", error);
    sendJson(response, 500, { status: "internal_error" });
  }
}

async function getOrderHistory(request, response) {
  try {
    const email = getSessionEmail(request);
    if (!email) {
      sendJson(response, 401, { status: "unauthenticated" });
      return;
    }

    const account = await (
      await getAccountCollection()
    ).findOne({ email }, { projection: { _id: 1 } });
    if (!account) {
      sendJson(response, 401, { status: "unauthenticated" });
      return;
    }

    const orders = await mongoClient
      .db(databaseName)
      .collection("order_details")
      .find(
        { accountEmail: email },
        {
          projection: {
            accountEmail: 0,
            contactInformation: 0,
            shippingAddress: 0,
          },
        },
      )
      .sort({ createdAt: -1 })
      .limit(100)
      .toArray();

    sendJson(response, 200, {
      status: "ok",
      orders: orders.map((order) => ({
        id: order._id.toString(),
        purchasedItems: order.purchasedItems,
        totalAmount: order.totalAmount,
        currency: order.currency,
        paymentMethod: order.paymentMethod,
        createdAt: order.createdAt,
      })),
    });
  } catch (error) {
    console.error("Could not retrieve account order history", error);
    sendJson(response, 500, { status: "internal_error" });
  }
}

function validateOrder(order) {
  if (typeof order !== "object" || order === null || Array.isArray(order)) return false;
  const { contactInformation, shippingAddress, paymentMethod, items } = order;
  if (
    typeof contactInformation !== "object" ||
    contactInformation === null ||
    typeof shippingAddress !== "object" ||
    shippingAddress === null ||
    paymentMethod !== "card" ||
    !Array.isArray(items) ||
    items.length === 0 ||
    items.length > orderProducts.size
  ) {
    return false;
  }

  const email = contactInformation.email;
  const { firstName, lastName, address, city, postalCode, country } = shippingAddress;
  if (
    typeof email !== "string" ||
    email.trim().length > 255 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
    ![firstName, lastName, address, city, postalCode, country].every(
      (value) => typeof value === "string" && value.trim().length > 0 && value.trim().length <= 255,
    )
  ) {
    return false;
  }

  const seenProducts = new Set();
  return items.every((item) => {
    if (typeof item !== "object" || item === null || Array.isArray(item)) return false;
    const product = orderProducts.get(item.productId);
    if (
      !product ||
      seenProducts.has(item.productId) ||
      !Number.isSafeInteger(item.quantity) ||
      item.quantity < 1 ||
      item.quantity > 99
    ) {
      return false;
    }
    seenProducts.add(item.productId);
    return true;
  });
}

async function createOrder(request, response) {
  let order;
  try {
    order = await readJsonBody(request);
  } catch (error) {
    sendJson(response, error.statusCode ?? 400, { status: "invalid_request" });
    return;
  }

  if (!validateOrder(order)) {
    sendJson(response, 400, { status: "invalid_order" });
    return;
  }

  try {
    const email = getSessionEmail(request);
    if (!email) {
      sendJson(response, 401, { status: "unauthenticated" });
      return;
    }

    const accountCollection = await getAccountCollection();
    const account = await accountCollection.findOne({ email }, { projection: { _id: 1 } });
    if (!account) {
      sendJson(response, 401, { status: "unauthenticated" });
      return;
    }

    const items = order.items.map(({ productId, quantity }) => {
      const product = orderProducts.get(productId);
      return {
        productId,
        name: product.name,
        unitPrice: product.price,
        quantity,
        lineTotal: product.price * quantity,
      };
    });
    const totalAmount = items.reduce((total, item) => total + item.lineTotal, 0);
    const orderCollection = mongoClient.db(databaseName).collection("order_details");
    const result = await orderCollection.insertOne({
      accountEmail: email,
      contactInformation: { email: order.contactInformation.email.trim() },
      shippingAddress: {
        firstName: order.shippingAddress.firstName.trim(),
        lastName: order.shippingAddress.lastName.trim(),
        address: order.shippingAddress.address.trim(),
        city: order.shippingAddress.city.trim(),
        postalCode: order.shippingAddress.postalCode.trim(),
        country: order.shippingAddress.country.trim(),
      },
      paymentMethod: "card",
      purchasedItems: items,
      totalAmount,
      currency: "EUR",
      createdAt: new Date(),
    });

    sendJson(response, 201, { status: "saved", orderId: result.insertedId.toString() });
  } catch (error) {
    console.error("Could not save order details", error);
    sendJson(response, 500, { status: "internal_error" });
  }
}

function readJsonBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    let bodyTooLarge = false;

    request.setEncoding("utf8");
    request.on("data", (chunk) => {
      if (Buffer.byteLength(body) + Buffer.byteLength(chunk) > maxBodyBytes) {
        bodyTooLarge = true;
        return;
      }
      body += chunk;
    });
    request.on("end", () => {
      if (bodyTooLarge) {
        reject(Object.assign(new Error("Request body too large"), { statusCode: 413 }));
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch {
        reject(Object.assign(new Error("Invalid JSON body"), { statusCode: 400 }));
      }
    });
    request.on("error", reject);
  });
}

function validateRegistration(data) {
  if (typeof data !== "object" || data === null || Array.isArray(data)) return false;

  const { firstName, lastName, email, password, confirmation } = data;
  return (
    typeof firstName === "string" &&
    firstName.trim().length > 0 &&
    firstName.trim().length <= 50 &&
    typeof lastName === "string" &&
    lastName.trim().length > 0 &&
    lastName.trim().length <= 50 &&
    typeof email === "string" &&
    email.trim().length <= 255 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) &&
    typeof password === "string" &&
    password.length >= 8 &&
    password.length <= 72 &&
    typeof confirmation === "string" &&
    confirmation.length >= 8 &&
    confirmation.length <= 72
  );
}

function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  return new Promise((resolve, reject) => {
    scryptCallback(password, salt, 64, (error, derivedKey) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(`scrypt$${salt}$${derivedKey.toString("hex")}`);
    });
  });
}

function verifyPassword(password, passwordHash) {
  const [algorithm, salt, storedHash] = passwordHash.split("$");
  if (algorithm !== "scrypt" || !/^[\da-f]{32}$/.test(salt) || !/^[\da-f]{128}$/.test(storedHash)) {
    return Promise.resolve(false);
  }

  return new Promise((resolve, reject) => {
    scryptCallback(password, salt, 64, (error, derivedKey) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(timingSafeEqual(derivedKey, Buffer.from(storedHash, "hex")));
    });
  });
}

function validateLogin(data) {
  if (typeof data !== "object" || data === null || Array.isArray(data)) return false;

  return (
    typeof data.email === "string" &&
    data.email.trim().length <= 255 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()) &&
    typeof data.password === "string" &&
    data.password.length > 0 &&
    data.password.length <= 72
  );
}

async function signIn(request, response) {
  let credentials;
  try {
    credentials = await readJsonBody(request);
  } catch (error) {
    sendJson(response, error.statusCode ?? 400, { status: "invalid_request" });
    return;
  }

  if (!validateLogin(credentials)) {
    sendJson(response, 400, { status: "invalid_credentials" });
    return;
  }

  try {
    const collection = await getAccountCollection();
    const account = await collection.findOne(
      { email: credentials.email.trim().toLowerCase() },
      { projection: { passwordHash: 1 } },
    );

    if (!account || !(await verifyPassword(credentials.password, account.passwordHash ?? ""))) {
      sendJson(response, 401, { status: "invalid_credentials" });
      return;
    }

    sendSessionCookie(response, createSessionToken(credentials.email.trim().toLowerCase()));
    sendJson(response, 200, { status: "authenticated" });
  } catch (error) {
    console.error("Could not authenticate account", error);
    sendJson(response, 500, { status: "internal_error" });
  }
}

async function createAccount(request, response) {
  let registration;
  try {
    registration = await readJsonBody(request);
  } catch (error) {
    sendJson(response, error.statusCode ?? 400, { status: "invalid_request" });
    return;
  }

  if (!validateRegistration(registration)) {
    sendJson(response, 400, { status: "invalid_registration" });
    return;
  }

  if (registration.password !== registration.confirmation) {
    sendJson(response, 400, { status: "password_mismatch" });
    return;
  }

  try {
    const collection = await getAccountCollection();
    await collection.insertOne({
      firstName: registration.firstName.trim(),
      lastName: registration.lastName.trim(),
      email: registration.email.trim().toLowerCase(),
      passwordHash: await hashPassword(registration.password),
      createdAt: new Date(),
    });
    sendJson(response, 201, { status: "created" });
  } catch (error) {
    if (error instanceof MongoServerError && error.code === 11000) {
      sendJson(response, 409, { status: "email_exists" });
      return;
    }

    console.error("Could not save account details", error);
    sendJson(response, 500, { status: "internal_error" });
  }
}

const server = createServer(async (request, response) => {
  const pathname = (request.url ?? "").split("?")[0];
  if (
    pathname !== "/api/account" &&
    pathname !== "/api/account/login" &&
    pathname !== "/api/account/logout" &&
    pathname !== "/api/account/session" &&
    pathname !== "/api/orders"
  ) {
    sendJson(response, 404, { status: "not_found" });
    return;
  }
  if (pathname === "/api/orders") {
    if (request.method === "GET") {
      await getOrderHistory(request, response);
      return;
    }
    if (request.method !== "POST") {
      response.setHeader("allow", "GET, POST");
      sendJson(response, 405, { status: "method_not_allowed" });
      return;
    }
    await createOrder(request, response);
    return;
  }
  if (pathname === "/api/account/session") {
    if (request.method !== "GET") {
      response.setHeader("allow", "GET");
      sendJson(response, 405, { status: "method_not_allowed" });
      return;
    }
    await getSession(request, response);
    return;
  }
  if (pathname === "/api/account/logout") {
    if (request.method !== "POST") {
      response.setHeader("allow", "POST");
      sendJson(response, 405, { status: "method_not_allowed" });
      return;
    }
    clearSessionCookie(response);
    sendJson(response, 200, { status: "signed_out" });
    return;
  }
  if (request.method !== "POST") {
    response.setHeader("allow", "POST");
    sendJson(response, 405, { status: "method_not_allowed" });
    return;
  }

  if (pathname === "/api/account/login") {
    await signIn(request, response);
  } else {
    await createAccount(request, response);
  }
});

server.listen(port, host, () => {
  console.log(`Account API listening on port ${port}`);
});
