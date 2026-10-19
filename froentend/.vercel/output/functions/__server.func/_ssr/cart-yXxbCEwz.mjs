import { r as money } from "./catalog-B_7n6T4T.mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-CDziQMNE.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Plus, p as Minus, t as X } from "../_libs/lucide-react.mjs";
import { o as EmptyState, u as useCommerce } from "./storefront-zid5vPxm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-yXxbCEwz.js
var import_jsx_runtime = require_jsx_runtime();
function Cart() {
	const { cart, setQty, remove, catalogProducts } = useCommerce();
	const lines = catalogProducts.filter((p) => cart[p.id]);
	const total = lines.reduce((sum, p) => sum + p.price * (cart[p.id] ?? 0), 0);
	if (!lines.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
		title: "Your Bag is Empty",
		copy: "Discover the latest pieces from the Milan atelier."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-serif text-5xl",
			children: "Shopping Bag"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "divide-y divide-border border-y border-border",
				children: lines.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "grid grid-cols-[96px_minmax(0,1fr)_auto] gap-4 py-6 sm:grid-cols-[140px_minmax(0,1fr)_auto]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.image,
							alt: p.name,
							width: 300,
							height: 400,
							className: "aspect-[3/4] w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-serif text-xl",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-stone",
									children: "Size M · Black"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 inline-grid grid-cols-3 items-center border border-border",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											size: "icon",
											onClick: () => setQty(p.id, (cart[p.id] ?? 1) - 1),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-center text-sm",
											children: cart[p.id]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											size: "icon",
											onClick: () => setQty(p.id, (cart[p.id] ?? 1) + 1),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {})
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-end justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								onClick: () => remove(p.id),
								"aria-label": "Remove",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: money(p.price * (cart[p.id] ?? 0))
							})]
						})
					]
				}, p.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "border-t border-ink pt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl",
						children: "Order Summary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: money(total) })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-stone",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Delivery" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Complimentary" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between border-t border-border pt-4 font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: money(total) })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						className: "mt-8 w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/checkout",
							children: "Proceed to Checkout"
						})
					})
				]
			})]
		})]
	});
}
//#endregion
export { Cart as component };
