import { o as __toESM } from "../_runtime.mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { S as useRouter, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, v as createFileRoute, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as SiteFooter, l as SiteHeader, n as CommerceProvider } from "./storefront-CJ48LNlc.mjs";
import { t as Route$15 } from "./account-CnfsQQ_H.mjs";
import { t as Route$16 } from "./product._id-B7fLQTJ8.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CuBSS205.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
var Route$14 = createRootRouteWithContext()({
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
	const { queryClient } = Route$14.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommerceProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		] })
	});
}
var $$splitComponentImporter$13 = () => import("./routes-Doto9IuQ.mjs");
var Route$13 = createFileRoute("/")({
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
var Route$12 = createFileRoute("/about")({
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
var $$splitComponentImporter$11 = () => import("./accessories-DjmjDKfk.mjs");
var Route$11 = createFileRoute("/accessories")({
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
var $$splitComponentImporter$10 = () => import("./cart-D0dA-NS0.mjs");
var Route$10 = createFileRoute("/cart")({
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
var $$splitComponentImporter$9 = () => import("./checkout-CUYzI9vU.mjs");
var Route$9 = createFileRoute("/checkout")({
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
var $$splitComponentImporter$8 = () => import("./collections-D9eH-P9G.mjs");
var Route$8 = createFileRoute("/collections")({
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
var Route$7 = createFileRoute("/contact")({
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
var $$splitComponentImporter$6 = () => import("./men-Cs5oLXku.mjs");
var Route$6 = createFileRoute("/men")({
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
var $$splitComponentImporter$5 = () => import("./new-arrivals-BqK3coPP.mjs");
var Route$5 = createFileRoute("/new-arrivals")({
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
var $$splitComponentImporter$4 = () => import("./payment-BZZQeXUp.mjs");
var Route$4 = createFileRoute("/payment")({
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
var $$splitComponentImporter$3 = () => import("./search-BfWw3Epl.mjs");
var Route$3 = createFileRoute("/search")({
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
var Route$2 = createFileRoute("/shipping-delivery")({
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
var $$splitComponentImporter$1 = () => import("./wishlist-D85AcvIE.mjs");
var Route$1 = createFileRoute("/wishlist")({
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
var $$splitComponentImporter = () => import("./women-JqM6SK8_.mjs");
var Route = createFileRoute("/women")({
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
var rootRouteChildren = {
	IndexRoute: Route$13.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$14
	}),
	AboutRoute: Route$12.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$14
	}),
	AccessoriesRoute: Route$11.update({
		id: "/accessories",
		path: "/accessories",
		getParentRoute: () => Route$14
	}),
	AccountRoute: Route$15.update({
		id: "/account",
		path: "/account",
		getParentRoute: () => Route$14
	}),
	CartRoute: Route$10.update({
		id: "/cart",
		path: "/cart",
		getParentRoute: () => Route$14
	}),
	CheckoutRoute: Route$9.update({
		id: "/checkout",
		path: "/checkout",
		getParentRoute: () => Route$14
	}),
	CollectionsRoute: Route$8.update({
		id: "/collections",
		path: "/collections",
		getParentRoute: () => Route$14
	}),
	ContactRoute: Route$7.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$14
	}),
	MenRoute: Route$6.update({
		id: "/men",
		path: "/men",
		getParentRoute: () => Route$14
	}),
	NewArrivalsRoute: Route$5.update({
		id: "/new-arrivals",
		path: "/new-arrivals",
		getParentRoute: () => Route$14
	}),
	PaymentRoute: Route$4.update({
		id: "/payment",
		path: "/payment",
		getParentRoute: () => Route$14
	}),
	SearchRoute: Route$3.update({
		id: "/search",
		path: "/search",
		getParentRoute: () => Route$14
	}),
	ShippingDeliveryRoute: Route$2.update({
		id: "/shipping-delivery",
		path: "/shipping-delivery",
		getParentRoute: () => Route$14
	}),
	WishlistRoute: Route$1.update({
		id: "/wishlist",
		path: "/wishlist",
		getParentRoute: () => Route$14
	}),
	WomenRoute: Route.update({
		id: "/women",
		path: "/women",
		getParentRoute: () => Route$14
	}),
	ProductIdRoute: Route$16.update({
		id: "/product/$id",
		path: "/product/$id",
		getParentRoute: () => Route$14
	})
};
var routeTree = Route$14._addFileChildren(rootRouteChildren)._addFileTypes();
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
