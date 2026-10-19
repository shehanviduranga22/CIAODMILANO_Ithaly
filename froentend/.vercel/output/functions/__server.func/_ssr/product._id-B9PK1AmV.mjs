import { o as __toESM } from "../_runtime.mjs";
import { r as money } from "./catalog-B_7n6T4T.mjs";
import { a as AccordionTrigger$1, g as require_jsx_runtime, i as AccordionItem$1, n as AccordionContent$1, r as AccordionHeader, t as Accordion$1 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as cn, t as Button } from "./button-CDziQMNE.mjs";
import { S as ChevronDown, c as Plus, p as Minus, v as Heart } from "../_libs/lucide-react.mjs";
import { s as ProductCard, u as useCommerce } from "./storefront-CJ48LNlc.mjs";
import { t as Route } from "./product._id-B7fLQTJ8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._id-B9PK1AmV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Accordion$1;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionItem$1, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionHeader, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionTrigger$1, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = AccordionTrigger$1.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent$1, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = AccordionContent$1.displayName;
function collectionLineForId(id) {
	if (id.startsWith("men:")) return "men";
	if (id.startsWith("women:")) return "women";
	if (id.startsWith("accessories:")) return "accessories";
	return null;
}
function categorySimilarityRank(product, candidate) {
	const productCategories = product.split("·").map((category) => category.trim().toLowerCase());
	const candidateCategories = candidate.split("·").map((category) => category.trim().toLowerCase());
	if (productCategories.join("·") === candidateCategories.join("·")) return 0;
	if (productCategories.length > 1 && candidateCategories.length > 1 && productCategories.at(-1) === candidateCategories.at(-1)) return 1;
	if (productCategories[0] === candidateCategories[0]) return 2;
	return 3;
}
function ProductPage() {
	const { id } = Route.useParams();
	const line = collectionLineForId(id);
	const { add, buyNow, catalogProducts, collectionStates, loadCollection, toggleWish, wishlist } = useCommerce();
	const p = catalogProducts.find((x) => x.id === id);
	const [size, setSize] = (0, import_react.useState)("M");
	const [qty, setQty] = (0, import_react.useState)(1);
	const recommendations = p ? catalogProducts.filter((product) => product.id !== p.id).map((product, index) => ({
		product,
		index,
		categoryRank: categorySimilarityRank(p.category, product.category),
		priceDifference: Math.abs(p.price - product.price)
	})).sort((a, b) => a.categoryRank - b.categoryRank || a.priceDifference - b.priceDifference || a.index - b.index).slice(0, 4).map(({ product }) => product) : [];
	(0, import_react.useEffect)(() => {
		if (line) loadCollection(line);
	}, [line, loadCollection]);
	if (!p && line && (collectionStates[line].loading || !collectionStates[line].loaded) && !collectionStates[line].error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "flex min-h-[60vh] items-center justify-center px-6 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-stone",
			role: "status",
			children: "Loading piece…"
		})
	});
	if (!p) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "flex min-h-[60vh] items-center justify-center px-6 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-serif text-5xl",
			children: "Piece Not Found"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-sm text-stone",
			role: line ? "alert" : void 0,
			children: line && collectionStates[line].error ? collectionStates[line].error : "This piece is no longer available."
		})] })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-[1440px] gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(340px,.75fr)] lg:px-10 lg:py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: p.image,
				alt: p.name,
				width: 1024,
				height: 1280,
				className: "col-span-2 aspect-[4/5] w-full object-cover sm:col-span-1"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: p.image,
				alt: `${p.name} detail`,
				width: 1024,
				height: 1280,
				className: "col-span-2 aspect-[4/5] w-full object-cover object-right sm:col-span-1"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:sticky lg:top-24 lg:self-start",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] uppercase tracking-[0.18em] text-stone",
					children: p.category
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-serif text-4xl sm:text-5xl",
					children: p.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg",
					children: money(p.price)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-7 text-sm leading-7 text-stone",
					children: p.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 border-t border-border pt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex justify-between text-[10px] uppercase tracking-[0.16em]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Size" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "underline underline-offset-4",
							children: "Size Guide"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-5 gap-2",
						children: [
							"XS",
							"S",
							"M",
							"L",
							"XL"
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: size === s ? "default" : "outline",
							onClick: () => setSize(s),
							children: s
						}, s))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid h-12 grid-cols-3 items-center border border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									onClick: () => setQty(Math.max(1, qty - 1)),
									"aria-label": "Decrease quantity",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-center text-sm",
									children: qty
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									onClick: () => setQty(qty + 1),
									"aria-label": "Increase quantity",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							className: "flex-1",
							onClick: () => add(p.id, qty),
							children: "Add to Bag"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "icon",
							className: "h-12 w-12",
							onClick: () => toggleWish(p.id),
							"aria-label": "Add to wishlist",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: wishlist.includes(p.id) ? "fill-current" : "" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					variant: "outline",
					className: "mt-3 w-full",
					onClick: () => buyNow(p.id, qty),
					children: "Buy Now"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Accordion, {
					type: "multiple",
					className: "mt-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
							value: "details",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: "Product Details" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
								className: "leading-6 text-stone",
								children: "Made in Italy. Relaxed tailored fit with hand-finished internal construction."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
							value: "materials",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: "Materials & Care" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
								className: "leading-6 text-stone",
								children: "Premium Italian materials. Specialist dry clean only. Store in the garment bag provided."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
							value: "shipping",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: "Shipping & Returns" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
								className: "leading-6 text-stone",
								children: "Complimentary express delivery and returns within 30 days."
							})]
						})
					]
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-[1440px] px-4 pb-24 sm:px-6 lg:px-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mb-10 font-serif text-4xl",
			children: "You May Also Like"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6",
			children: recommendations.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.id))
		})]
	})] });
}
//#endregion
export { ProductPage as component };
