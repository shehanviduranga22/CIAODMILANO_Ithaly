import { o as __toESM } from "../_runtime.mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { S as useRouter, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, v as createFileRoute, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as SiteFooter, l as SiteHeader, n as CommerceProvider } from "./storefront-zid5vPxm.mjs";
import { t as Route$16 } from "./account-0gtqMpDS.mjs";
import { t as Route$17 } from "./product._id-C9KEE-WE.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as require_config } from "../_libs/dotenv.mjs";
import { t as require_lib } from "../_libs/mongodb.mjs";
import { createServer } from "node:http";
import { Readable } from "node:stream";
import { createHash, createHmac, randomBytes, scrypt, timingSafeEqual } from "node:crypto";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DAGPx3BA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
require_config();
var import_lib = require_lib();
var styles_default = "/assets/styles-CTh89LkS.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$15 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "CIAO D MILANO — Italian Luxury Fashion" },
			{
				name: "description",
				content: "Discover refined Italian tailoring and quiet luxury from CIAO D MILANO."
			},
			{
				name: "author",
				content: "CIAO D MILANO"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$15.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommerceProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		] })
	});
}
var $$splitComponentImporter$13 = () => import("./routes-BE-5g15U.mjs");
var Route$14 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "CIAO D MILANO — The Quiet Luxury of Milan" },
		{
			name: "description",
			content: "Discover CIAO D MILANO's latest Italian fashion collection, tailored with restraint and precision."
		},
		{
			property: "og:title",
			content: "CIAO D MILANO — The Quiet Luxury of Milan"
		},
		{
			property: "og:description",
			content: "Discover Italian tailoring, timeless womenswear and modern menswear."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./about-CgPz6-nq.mjs");
var Route$13 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "Our House — CIAO D MILANO" },
		{
			name: "description",
			content: "The story, craft and enduring values of CIAO D MILANO."
		},
		{
			property: "og:title",
			content: "Our House — CIAO D MILANO"
		},
		{
			property: "og:description",
			content: "Discover a Milanese house built on restraint, material and time."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./accessories-DriPi9M7.mjs");
var Route$12 = createFileRoute("/accessories")({
	validateSearch: (search) => typeof search["category"] === "string" ? { category: search["category"] } : {},
	head: () => ({ meta: [
		{ title: "Accessories — CIAO D MILANO" },
		{
			name: "description",
			content: "Italian silk, leather and cashmere accessories, finished by hand."
		},
		{
			property: "og:title",
			content: "Accessories — CIAO D MILANO"
		},
		{
			property: "og:description",
			content: "Discover hand-finished Italian accessories from the CIAO D MILANO atelier."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./cart-yXxbCEwz.mjs");
var Route$11 = createFileRoute("/cart")({
	head: () => ({ meta: [
		{ title: "Shopping Bag — CIAO D MILANO" },
		{
			name: "description",
			content: "Review your CIAO D MILANO shopping bag."
		},
		{
			property: "og:title",
			content: "Shopping Bag — CIAO D MILANO"
		},
		{
			property: "og:description",
			content: "Review your selected pieces before checkout."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./checkout-DARlZTsA.mjs");
var Route$10 = createFileRoute("/checkout")({
	head: () => ({ meta: [
		{ title: "Checkout — CIAO D MILANO" },
		{
			name: "description",
			content: "Secure checkout for your CIAO D MILANO order."
		},
		{
			property: "og:title",
			content: "Checkout — CIAO D MILANO"
		},
		{
			property: "og:description",
			content: "Complete your CIAO D MILANO order."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./collections-D481zAsW.mjs");
var Route$9 = createFileRoute("/collections")({
	head: () => ({ meta: [
		{ title: "Collections — CIAO D MILANO" },
		{
			name: "description",
			content: "Explore the seasonal collections of CIAO D MILANO."
		},
		{
			property: "og:title",
			content: "Collections — CIAO D MILANO"
		},
		{
			property: "og:description",
			content: "Milanese collections shaped by fabric, proportion and restraint."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./contact-C4a6mq0t.mjs");
var Route$8 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact Us — CIAO D MILANO" },
		{
			name: "description",
			content: "Contact the CIAO D MILANO client services team for personal shopping, orders and collection enquiries."
		},
		{
			property: "og:title",
			content: "Contact Us — CIAO D MILANO"
		},
		{
			property: "og:description",
			content: "Private client service, from Milan to the world."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./men-Czccllmv.mjs");
var Route$7 = createFileRoute("/men")({
	validateSearch: (search) => typeof search["category"] === "string" ? { category: search["category"] } : {},
	head: () => ({ meta: [
		{ title: "Men — CIAO D MILANO" },
		{
			name: "description",
			content: "Italian menswear defined by precise tailoring and quiet confidence."
		},
		{
			property: "og:title",
			content: "Men — CIAO D MILANO"
		},
		{
			property: "og:description",
			content: "Discover refined Italian menswear and accessories."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./new-arrivals-DdKZOuW8.mjs");
var Route$6 = createFileRoute("/new-arrivals")({
	head: () => ({ meta: [
		{ title: "New Arrivals — CIAO D MILANO" },
		{
			name: "description",
			content: "The latest expressions from the CIAO D MILANO atelier."
		},
		{
			property: "og:title",
			content: "New Arrivals — CIAO D MILANO"
		},
		{
			property: "og:description",
			content: "Shop the newest Italian luxury fashion arrivals."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./payment-DxHwYvWj.mjs");
var Route$5 = createFileRoute("/payment")({
	head: () => ({ meta: [
		{ title: "Payment — CIAO D MILANO" },
		{
			name: "description",
			content: "Enter your card details to complete your CIAO D MILANO order."
		},
		{
			property: "og:title",
			content: "Payment — CIAO D MILANO"
		},
		{
			property: "og:description",
			content: "Secure card payment for your CIAO D MILANO order."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./search-BTuAz-UB.mjs");
var Route$4 = createFileRoute("/search")({
	head: () => ({ meta: [
		{ title: "Search — CIAO D MILANO" },
		{
			name: "description",
			content: "Search the CIAO D MILANO collection."
		},
		{
			property: "og:title",
			content: "Search — CIAO D MILANO"
		},
		{
			property: "og:description",
			content: "Find Italian tailoring, womenswear and accessories."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./shipping-delivery-SZ4h0Qoe.mjs");
var Route$3 = createFileRoute("/shipping-delivery")({
	head: () => ({ meta: [
		{ title: "Shipping & Delivery — CIAO D MILANO" },
		{
			name: "description",
			content: "UAE and international delivery, returns, tracking and secure packaging from CIAO D MILANO."
		},
		{
			property: "og:title",
			content: "Shipping & Delivery — CIAO D MILANO"
		},
		{
			property: "og:description",
			content: "Everything you need to know about receiving and returning your CIAO D MILANO order."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./wishlist-Dgk75gfi.mjs");
var Route$2 = createFileRoute("/wishlist")({
	head: () => ({ meta: [
		{ title: "Wishlist — CIAO D MILANO" },
		{
			name: "description",
			content: "Your saved CIAO D MILANO pieces."
		},
		{
			property: "og:title",
			content: "Wishlist — CIAO D MILANO"
		},
		{
			property: "og:description",
			content: "A personal edit of saved Italian fashion pieces."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./women-Cj8huTfo.mjs");
var Route$1 = createFileRoute("/women")({
	validateSearch: (search) => typeof search["category"] === "string" ? { category: search["category"] } : {},
	head: () => ({ meta: [
		{ title: "Women — CIAO D MILANO" },
		{
			name: "description",
			content: "Italian womenswear balancing softness, structure and timeless form."
		},
		{
			property: "og:title",
			content: "Women — CIAO D MILANO"
		},
		{
			property: "og:description",
			content: "Discover Italian womenswear, tailoring and leather goods."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
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
async function handleWebRequest(request) {
	const incoming = request.body ? Readable.fromWeb(request.body) : Readable.from([]);
	const requestUrl = new URL(request.url);
	incoming.url = requestUrl.pathname + requestUrl.search;
	incoming.method = request.method;
	incoming.headers = Object.fromEntries(request.headers);
	let statusCode = 200;
	let responseBody = "";
	const headers = new Headers();
	await handleRequest(incoming, {
		setHeader(name, value) {
			headers.set(name, value);
		},
		writeHead(code, values) {
			statusCode = code;
			for (const [name, value] of Object.entries(values)) headers.set(name, value);
		},
		end(body = "") {
			responseBody = body;
		}
	});
	return new Response(responseBody, {
		status: statusCode,
		headers
	});
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) createServer(handleRequest).listen(port, host, () => {
	console.log(`Account API listening on port ${port}`);
});
var Route = createFileRoute("/api/$")({ server: { handlers: {
	GET: ({ request }) => handleWebRequest(request),
	POST: ({ request }) => handleWebRequest(request)
} } });
var rootRouteChildren = {
	IndexRoute: Route$14.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$15
	}),
	AboutRoute: Route$13.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$15
	}),
	AccessoriesRoute: Route$12.update({
		id: "/accessories",
		path: "/accessories",
		getParentRoute: () => Route$15
	}),
	AccountRoute: Route$16.update({
		id: "/account",
		path: "/account",
		getParentRoute: () => Route$15
	}),
	CartRoute: Route$11.update({
		id: "/cart",
		path: "/cart",
		getParentRoute: () => Route$15
	}),
	CheckoutRoute: Route$10.update({
		id: "/checkout",
		path: "/checkout",
		getParentRoute: () => Route$15
	}),
	CollectionsRoute: Route$9.update({
		id: "/collections",
		path: "/collections",
		getParentRoute: () => Route$15
	}),
	ContactRoute: Route$8.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$15
	}),
	MenRoute: Route$7.update({
		id: "/men",
		path: "/men",
		getParentRoute: () => Route$15
	}),
	NewArrivalsRoute: Route$6.update({
		id: "/new-arrivals",
		path: "/new-arrivals",
		getParentRoute: () => Route$15
	}),
	PaymentRoute: Route$5.update({
		id: "/payment",
		path: "/payment",
		getParentRoute: () => Route$15
	}),
	SearchRoute: Route$4.update({
		id: "/search",
		path: "/search",
		getParentRoute: () => Route$15
	}),
	ShippingDeliveryRoute: Route$3.update({
		id: "/shipping-delivery",
		path: "/shipping-delivery",
		getParentRoute: () => Route$15
	}),
	WishlistRoute: Route$2.update({
		id: "/wishlist",
		path: "/wishlist",
		getParentRoute: () => Route$15
	}),
	WomenRoute: Route$1.update({
		id: "/women",
		path: "/women",
		getParentRoute: () => Route$15
	}),
	ApiSplatRoute: Route.update({
		id: "/api/$",
		path: "/api/$",
		getParentRoute: () => Route$15
	}),
	ProductIdRoute: Route$17.update({
		id: "/product/$id",
		path: "/product/$id",
		getParentRoute: () => Route$15
	})
};
var routeTree = Route$15._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
