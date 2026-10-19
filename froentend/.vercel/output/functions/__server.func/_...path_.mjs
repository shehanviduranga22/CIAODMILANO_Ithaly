import { o as __toESM } from "./_runtime.mjs";
import { t as defineEventHandler } from "./_libs/h3+rou3+srvx.mjs";
import { t as require_dist } from "./_libs/dotenv.mjs";
import { t as require_lib } from "./_libs/mongodb.mjs";
import { createServer } from "node:http";
import { createHash, createHmac, randomBytes, scrypt, timingSafeEqual } from "node:crypto";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
//#region backend/server.js
var import_dist = /* @__PURE__ */ __toESM(require_dist(), 1);
var import_lib = require_lib();
var backendDirectory = dirname(fileURLToPath(import.meta.url));
import_dist.default.config({ path: resolve(backendDirectory, ".env") });
import_dist.default.config({ path: resolve(backendDirectory, "..", ".env") });
var port = Number(process.env["PORT"] ?? 3001);
var host = process.env["HOST"] ?? "127.0.0.1";
var databaseName = process.env["MONGODB_DATABASE"] ?? "ciao_d_milano";
var maxBodyBytes = 16384;
var sessionCookieName = "cdm_session";
var sessionLifetimeSeconds = 604800;
var orderProducts = /* @__PURE__ */ new Map([
	["camel-wool-coat", {
		name: "Camel Wool Coat",
		price: 1290
	}],
	["silk-column-dress", {
		name: "Silk Column Dress",
		price: 640
	}],
	["atelier-blazer", {
		name: "Atelier Blazer",
		price: 890
	}],
	["nero-suit", {
		name: "Nero Wool Suit",
		price: 2450
	}],
	["merino-knit", {
		name: "Fine Merino Knit",
		price: 390
	}],
	["milan-handbag", {
		name: "Milano Handbag",
		price: 1850
	}],
	["cashmere-knit", {
		name: "Ivory Cashmere Knit",
		price: 420
	}],
	["penny-loafer", {
		name: "Brera Penny Loafer",
		price: 690
	}],
	["silk-twill-scarf", {
		name: "Como Silk Scarf",
		price: 280
	}],
	["calfskin-belt", {
		name: "Cintura Calfskin Belt",
		price: 320
	}],
	["leather-cardholder", {
		name: "Porta Carte Cardholder",
		price: 210
	}],
	["cashmere-scarf", {
		name: "Cashmere Travel Wrap",
		price: 450
	}]
]);
var accountCollectionPromise;
var databasePromise;
var mongoClient;
function getDatabase() {
	if (!databasePromise) {
		const uri = process.env["MONGODB_URI"];
		if (!uri) throw new Error("MONGODB_URI is not configured");
		const client = new import_lib.MongoClient(uri);
		mongoClient = client;
		databasePromise = client.connect().catch((error) => {
			mongoClient = void 0;
			databasePromise = void 0;
			throw error;
		});
	}
	return databasePromise.then(() => mongoClient.db(databaseName));
}
function getAccountCollection() {
	if (!accountCollectionPromise) accountCollectionPromise = getDatabase().then(async (database) => {
		const collection = database.collection("account_details");
		await collection.createIndex({ email: 1 }, { unique: true });
		return collection;
	}).catch((error) => {
		accountCollectionPromise = void 0;
		throw error;
	});
	return accountCollectionPromise;
}
function sendJson(response, statusCode, payload) {
	response.writeHead(statusCode, {
		"cache-control": "no-store",
		"content-type": "application/json; charset=utf-8"
	});
	response.end(JSON.stringify(payload));
}
function getSessionSigningKey() {
	const uri = process.env["MONGODB_URI"];
	if (!uri) throw new Error("MONGODB_URI is not configured");
	return createHash("sha256").update(`ciao-d-milano-session:${uri}`).digest();
}
function createSessionToken(email) {
	const expiresAt = Math.floor(Date.now() / 1e3) + sessionLifetimeSeconds;
	const payload = Buffer.from(`${email}\n${expiresAt}`).toString("base64url");
	return `${payload}.${createHmac("sha256", getSessionSigningKey()).update(payload).digest("base64url")}`;
}
function getSessionEmail(request) {
	const sessionCookie = (request.headers.cookie?.split(";") ?? []).map((cookie) => cookie.trim()).find((cookie) => cookie.startsWith(`${sessionCookieName}=`));
	if (!sessionCookie) return null;
	const [payload, signature] = sessionCookie.slice(12).split(".");
	if (!payload || !signature) return null;
	try {
		const expectedSignature = createHmac("sha256", getSessionSigningKey()).update(payload).digest();
		const receivedSignature = Buffer.from(signature, "base64url");
		if (receivedSignature.length !== expectedSignature.length || !timingSafeEqual(receivedSignature, expectedSignature)) return null;
		const decodedPayload = Buffer.from(payload, "base64url").toString("utf8");
		const separatorIndex = decodedPayload.lastIndexOf("\n");
		const email = decodedPayload.slice(0, separatorIndex);
		const expiresAt = Number(decodedPayload.slice(separatorIndex + 1));
		if (separatorIndex < 0 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !Number.isSafeInteger(expiresAt) || expiresAt <= Math.floor(Date.now() / 1e3)) return null;
		return email;
	} catch {
		return null;
	}
}
function sendSessionCookie(response, token) {
	response.setHeader("set-cookie", `${sessionCookieName}=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=${sessionLifetimeSeconds}; Secure`);
}
function clearSessionCookie(response) {
	response.setHeader("set-cookie", `${sessionCookieName}=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0; Secure`);
}
async function getSession(request, response) {
	try {
		const email = getSessionEmail(request);
		if (!email) {
			sendJson(response, 401, { status: "unauthenticated" });
			return;
		}
		const account = await (await getAccountCollection()).findOne({ email }, { projection: {
			_id: 0,
			firstName: 1,
			lastName: 1,
			email: 1,
			createdAt: 1
		} });
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
				createdAt: account.createdAt
			}
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
		if (!await (await getAccountCollection()).findOne({ email }, { projection: { _id: 1 } })) {
			sendJson(response, 401, { status: "unauthenticated" });
			return;
		}
		sendJson(response, 200, {
			status: "ok",
			orders: (await mongoClient.db(databaseName).collection("order_details").find({ accountEmail: email }, { projection: {
				accountEmail: 0,
				contactInformation: 0,
				shippingAddress: 0
			} }).sort({ createdAt: -1 }).limit(100).toArray()).map((order) => ({
				id: order._id.toString(),
				purchasedItems: order.purchasedItems,
				totalAmount: order.totalAmount,
				currency: order.currency,
				paymentMethod: order.paymentMethod,
				createdAt: order.createdAt
			}))
		});
	} catch (error) {
		console.error("Could not retrieve account order history", error);
		sendJson(response, 500, { status: "internal_error" });
	}
}
function validateOrder(order) {
	if (typeof order !== "object" || order === null || Array.isArray(order)) return false;
	const { contactInformation, shippingAddress, paymentMethod, items } = order;
	if (typeof contactInformation !== "object" || contactInformation === null || typeof shippingAddress !== "object" || shippingAddress === null || paymentMethod !== "card" || !Array.isArray(items) || items.length === 0 || items.length > 100) return false;
	const email = contactInformation.email;
	const { firstName, lastName, address, city, postalCode, country } = shippingAddress;
	if (typeof email !== "string" || email.trim().length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) || ![
		firstName,
		lastName,
		address,
		city,
		postalCode,
		country
	].every((value) => typeof value === "string" && value.trim().length > 0 && value.trim().length <= 255)) return false;
	const seenProducts = /* @__PURE__ */ new Set();
	return items.every((item) => {
		if (typeof item !== "object" || item === null || Array.isArray(item)) return false;
		if (!orderProducts.get(item.productId) && (typeof item.productId !== "string" || !/^(men|women|accessories):[a-f\d]{24}$/i.test(item.productId)) || seenProducts.has(item.productId) || !Number.isSafeInteger(item.quantity) || item.quantity < 1 || item.quantity > 99) return false;
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
		if (!await (await getAccountCollection()).findOne({ email }, { projection: { _id: 1 } })) {
			sendJson(response, 401, { status: "unauthenticated" });
			return;
		}
		const items = await Promise.all(order.items.map(async ({ productId, quantity }) => {
			let product = orderProducts.get(productId);
			if (!product) {
				const [, matchedLine, id] = productId.match(/^(men|women|accessories):([a-f\d]{24})$/i) ?? [];
				if (!matchedLine || !id) throw Object.assign(/* @__PURE__ */ new Error("Invalid product identifier"), { statusCode: 400 });
				const record = await (await getDatabase()).collection(`${matchedLine.toLowerCase()}_items`).findOne({ _id: new import_lib.ObjectId(id) }, { projection: {
					name: 1,
					price: 1
				} });
				if (!record || typeof record.name !== "string" || typeof record.price !== "number" || !Number.isFinite(record.price) || record.price <= 0) throw Object.assign(/* @__PURE__ */ new Error("Product is no longer available"), { statusCode: 400 });
				product = {
					name: record.name,
					price: record.price
				};
			}
			return {
				productId,
				name: product.name,
				unitPrice: product.price,
				quantity,
				lineTotal: product.price * quantity
			};
		}));
		const totalAmount = items.reduce((total, item) => total + item.lineTotal, 0);
		sendJson(response, 201, {
			status: "saved",
			orderId: (await mongoClient.db(databaseName).collection("order_details").insertOne({
				accountEmail: email,
				contactInformation: { email: order.contactInformation.email.trim() },
				shippingAddress: {
					firstName: order.shippingAddress.firstName.trim(),
					lastName: order.shippingAddress.lastName.trim(),
					address: order.shippingAddress.address.trim(),
					city: order.shippingAddress.city.trim(),
					postalCode: order.shippingAddress.postalCode.trim(),
					country: order.shippingAddress.country.trim()
				},
				paymentMethod: "card",
				purchasedItems: items,
				totalAmount,
				currency: "EUR",
				createdAt: /* @__PURE__ */ new Date()
			})).insertedId.toString()
		});
	} catch (error) {
		if (error?.statusCode === 400) {
			sendJson(response, 400, { status: "invalid_order" });
			return;
		}
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
				reject(Object.assign(/* @__PURE__ */ new Error("Request body too large"), { statusCode: 413 }));
				return;
			}
			try {
				resolve(JSON.parse(body));
			} catch {
				reject(Object.assign(/* @__PURE__ */ new Error("Invalid JSON body"), { statusCode: 400 }));
			}
		});
		request.on("error", reject);
	});
}
function validateRegistration(data) {
	if (typeof data !== "object" || data === null || Array.isArray(data)) return false;
	const { firstName, lastName, email, password, confirmation } = data;
	return typeof firstName === "string" && firstName.trim().length > 0 && firstName.trim().length <= 50 && typeof lastName === "string" && lastName.trim().length > 0 && lastName.trim().length <= 50 && typeof email === "string" && email.trim().length <= 255 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) && typeof password === "string" && password.length >= 8 && password.length <= 72 && typeof confirmation === "string" && confirmation.length >= 8 && confirmation.length <= 72;
}
function hashPassword(password) {
	const salt = randomBytes(16).toString("hex");
	return new Promise((resolve, reject) => {
		scrypt(password, salt, 64, (error, derivedKey) => {
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
	if (algorithm !== "scrypt" || !/^[\da-f]{32}$/.test(salt) || !/^[\da-f]{128}$/.test(storedHash)) return Promise.resolve(false);
	return new Promise((resolve, reject) => {
		scrypt(password, salt, 64, (error, derivedKey) => {
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
	return typeof data.email === "string" && data.email.trim().length <= 255 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()) && typeof data.password === "string" && data.password.length > 0 && data.password.length <= 72;
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
		const account = await (await getAccountCollection()).findOne({ email: credentials.email.trim().toLowerCase() }, { projection: { passwordHash: 1 } });
		if (!account || !await verifyPassword(credentials.password, account.passwordHash ?? "")) {
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
		await (await getAccountCollection()).insertOne({
			firstName: registration.firstName.trim(),
			lastName: registration.lastName.trim(),
			email: registration.email.trim().toLowerCase(),
			passwordHash: await hashPassword(registration.password),
			createdAt: /* @__PURE__ */ new Date()
		});
		sendJson(response, 201, { status: "created" });
	} catch (error) {
		if (error instanceof import_lib.MongoServerError && error.code === 11e3) {
			sendJson(response, 409, { status: "email_exists" });
			return;
		}
		console.error("Could not save account details", error);
		sendJson(response, 500, { status: "internal_error" });
	}
}
async function handleRequest(request, response) {
	const pathname = (request.url ?? "").split("?")[0];
	const storefrontCollection = pathname.match(/^\/api\/storefront\/(men|women|accessories)$/)?.[1];
	if (pathname !== "/api/account" && pathname !== "/api/account/login" && pathname !== "/api/account/logout" && pathname !== "/api/account/session" && pathname !== "/api/orders" && !storefrontCollection) {
		sendJson(response, 404, { status: "not_found" });
		return;
	}
	if (storefrontCollection) {
		if (request.method !== "GET") {
			response.setHeader("allow", "GET");
			sendJson(response, 405, { status: "method_not_allowed" });
			return;
		}
		try {
			const collectionName = `${storefrontCollection}_items`;
			sendJson(response, 200, { items: (await (await getDatabase()).collection(collectionName).find({}).sort({
				createdAt: -1,
				_id: -1
			}).toArray()).map(({ _id, name, price, category, design, image }) => ({
				id: _id.toString(),
				name,
				price,
				category,
				description: design,
				image
			})) });
		} catch (error) {
			console.error(`Could not load ${storefrontCollection} collection`, error);
			sendJson(response, 500, { error: "Unable to load collection items." });
		}
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
	if (pathname === "/api/account/login") await signIn(request, response);
	else await createAccount(request, response);
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) createServer(handleRequest).listen(port, host, () => {
	console.log(`Account API listening on port ${port}`);
});
//#endregion
//#region server/routes/api/[...path].ts
var ____path__default = defineEventHandler((event) => handleRequest(event.node.req, event.node.res));
//#endregion
export { ____path__default as default };
