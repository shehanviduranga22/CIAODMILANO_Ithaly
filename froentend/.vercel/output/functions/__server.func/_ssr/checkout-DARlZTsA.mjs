import { o as __toESM } from "../_runtime.mjs";
import { r as money } from "./catalog-B_7n6T4T.mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-CDziQMNE.mjs";
import { b as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as useCommerce } from "./storefront-zid5vPxm.mjs";
import { t as Input } from "./input-BIKYv5Rd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-DARlZTsA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Checkout() {
	const { cart, catalogProducts, isAuthenticated, isAuthLoading } = useCommerce();
	const navigate = useNavigate();
	const lines = catalogProducts.filter((product) => cart[product.id]);
	const total = lines.reduce((sum, product) => sum + product.price * (cart[product.id] ?? 0), 0);
	(0, import_react.useEffect)(() => {
		if (!isAuthLoading && !isAuthenticated) navigate({
			to: "/account",
			search: { redirectTo: "/checkout" }
		});
	}, [
		isAuthenticated,
		isAuthLoading,
		navigate
	]);
	if (isAuthLoading || !isAuthenticated) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex min-h-[60vh] flex-col items-center justify-center px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-4xl",
				children: "Sign in to continue"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-md text-sm text-stone",
				children: "Your account is required to proceed to checkout."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				size: "lg",
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/account",
					search: { redirectTo: "/checkout" },
					children: "Enter My Account"
				})
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: (event) => {
			event.preventDefault();
			const formData = new FormData(event.currentTarget);
			sessionStorage.setItem("ciao-d-milano-checkout", JSON.stringify({
				contactInformation: { email: formData.get("email") },
				shippingAddress: {
					firstName: formData.get("firstName"),
					lastName: formData.get("lastName"),
					address: formData.get("address"),
					city: formData.get("city"),
					postalCode: formData.get("postalCode"),
					country: formData.get("country")
				}
			}));
			navigate({ to: "/payment" });
		},
		className: "mx-auto grid max-w-[1200px] gap-12 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_380px] lg:px-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-5xl",
				children: "Checkout"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckoutSection, {
				n: "01",
				title: "Contact Information",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					required: true,
					name: "email",
					type: "email",
					autoComplete: "email",
					placeholder: "Email address"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckoutSection, {
				n: "02",
				title: "Shipping Address",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							required: true,
							name: "firstName",
							autoComplete: "given-name",
							placeholder: "First name"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							required: true,
							name: "lastName",
							autoComplete: "family-name",
							placeholder: "Last name"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							required: true,
							name: "address",
							autoComplete: "street-address",
							placeholder: "Address",
							className: "sm:col-span-2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							required: true,
							name: "city",
							autoComplete: "address-level2",
							placeholder: "City"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							required: true,
							name: "postalCode",
							autoComplete: "postal-code",
							placeholder: "Postal code"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							required: true,
							name: "country",
							autoComplete: "country-name",
							placeholder: "Country",
							className: "sm:col-span-2"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckoutSection, {
				n: "03",
				title: "Delivery Method",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid grid-cols-[auto_minmax(0,1fr)_auto] gap-4 border border-ink p-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "radio",
							defaultChecked: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"Express Delivery",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
								className: "text-stone",
								children: "2–4 business days"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Complimentary" })
					]
				})
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "bg-ivory p-6 lg:sticky lg:top-24 lg:self-start",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl",
					children: "Order Summary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-5",
					children: lines.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[64px_minmax(0,1fr)_auto] gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: product.image,
								alt: "",
								width: 128,
								height: 160,
								className: "aspect-[3/4] object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: product.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-stone",
								children: ["Qty ", cart[product.id]]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm",
								children: money(product.price * (cart[product.id] ?? 0))
							})
						]
					}, product.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex justify-between border-t border-border pt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: money(total) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "lg",
					className: "mt-6 w-full",
					disabled: !lines.length,
					children: "Place Order"
				})
			]
		})]
	});
}
function CheckoutSection({ n, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-12 border-t border-border pt-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[9px] uppercase tracking-[.18em] text-stone",
				children: n
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-6 mt-2 font-serif text-2xl",
				children: title
			}),
			children
		]
	});
}
//#endregion
export { Checkout as component };
