import { o as __toESM } from "../_runtime.mjs";
import { r as money } from "./catalog-B_7n6T4T.mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-CDziQMNE.mjs";
import { b as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as useCommerce } from "./storefront-CJ48LNlc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/payment-BZZQeXUp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var fieldCls = "w-full bg-transparent border-b border-paper/30 pb-1 text-paper placeholder:text-paper/40 outline-none focus:border-sand transition-colors";
function Payment() {
	const { cart, catalogProducts, isAuthenticated, isAuthLoading } = useCommerce();
	const navigate = useNavigate();
	const [num, setNum] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [exp, setExp] = (0, import_react.useState)("");
	const [cvc, setCvc] = (0, import_react.useState)("");
	const [flipped, setFlipped] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(false);
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	const [checkoutDetails, setCheckoutDetails] = (0, import_react.useState)(null);
	const lines = catalogProducts.filter((p) => cart[p.id]);
	const total = lines.reduce((s, p) => s + p.price * (cart[p.id] ?? 0), 0);
	(0, import_react.useEffect)(() => {
		if (!isAuthLoading && !isAuthenticated) {
			navigate({
				to: "/account",
				search: { redirectTo: "/checkout" }
			});
			return;
		}
		if (isAuthLoading || !isAuthenticated) return;
		const savedDetails = sessionStorage.getItem("ciao-d-milano-checkout");
		if (!savedDetails) {
			setMessage("Please complete your contact and shipping details before payment.");
			return;
		}
		try {
			setCheckoutDetails(JSON.parse(savedDetails));
		} catch {
			setMessage("Your checkout details could not be read. Please enter them again.");
		}
	}, [
		isAuthenticated,
		isAuthLoading,
		navigate
	]);
	async function submitPayment(event) {
		event.preventDefault();
		if (!checkoutDetails || !lines.length) {
			setMessage("Please return to checkout and complete your order details.");
			return;
		}
		setIsSubmitting(true);
		setMessage("");
		try {
			const response = await fetch("/api/orders", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					...checkoutDetails,
					paymentMethod: "card",
					items: lines.map((product) => ({
						productId: product.id,
						quantity: cart[product.id]
					}))
				})
			});
			const result = await response.json();
			if (response.status === 201 && result.status === "saved") {
				sessionStorage.removeItem("ciao-d-milano-checkout");
				setDone(true);
			} else if (response.status === 401) {
				setMessage("Please sign in again before completing your order.");
				navigate({
					to: "/account",
					search: { redirectTo: "/checkout" }
				});
			} else setMessage("We could not save your order. Please try again.");
		} catch {
			setMessage("We could not reach the payment service. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	}
	const fmtNum = (v) => v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
	const fmtExp = (v) => {
		const d = v.replace(/\D/g, "").slice(0, 4);
		return d.length > 2 ? `${d.slice(0, 2)} / ${d.slice(2)}` : d;
	};
	if (isAuthLoading || !isAuthenticated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "flex min-h-[60vh] items-center justify-center px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-stone",
			children: "Verifying your account…"
		})
	});
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex min-h-[65vh] flex-col items-center justify-center px-6 text-center editorial-rise",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] uppercase tracking-[.2em] text-stone",
				children: "Order Confirmed"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-serif text-5xl",
				children: "Grazie."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-md text-sm text-stone",
				children: "Your order has been received and saved. A confirmation will be sent to your email."
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submitPayment,
		className: "mx-auto grid max-w-[1200px] gap-12 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_380px] lg:px-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] uppercase tracking-[.2em] text-stone",
				children: "Step 04"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-serif text-5xl",
				children: "Payment"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-stone",
				children: "Enter your details directly on the card. Tap the card to see the reverse."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 max-w-[480px] [perspective:1600px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[1.586/1] w-full transition-transform duration-700 [transform-style:preserve-3d]",
					style: { transform: flipped ? "rotateY(180deg)" : "none" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0 flex flex-col justify-between overflow-hidden rounded-xl p-6 text-paper shadow-xl sm:p-7 [backface-visibility:hidden]",
						style: { background: "linear-gradient(118deg, oklch(0.26 0.014 70) 0%, oklch(0.175 0.008 70) 34%, oklch(0.115 0 0) 66%, oklch(0.215 0.016 55) 100%)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "pointer-events-none absolute inset-0",
								style: { background: "linear-gradient(112deg, transparent 22%, rgba(255,255,255,0.10) 40%, rgba(255,255,255,0.02) 52%, transparent 66%)" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-sand/15"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "pointer-events-none absolute -right-6 -top-8 h-64 w-64 rounded-full border border-sand/10"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative h-10 w-[52px] overflow-hidden rounded-[6px]",
										style: {
											background: "linear-gradient(135deg, var(--sand) 0%, var(--stone) 48%, var(--sand) 62%, var(--stone) 100%)",
											boxShadow: "inset 0 1px 1px rgba(255,255,255,.55), inset 0 -1px 2px rgba(0,0,0,.45)"
										},
										"aria-hidden": true,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute inset-0 opacity-55",
											style: { background: "repeating-linear-gradient(0deg, transparent 0 5px, rgba(0,0,0,.28) 5px 6px), repeating-linear-gradient(90deg, transparent 0 12px, rgba(0,0,0,.22) 12px 13px)" }
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0 right-0 top-1/2 h-px bg-ink/30" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										width: "20",
										height: "20",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "1.6",
										strokeLinecap: "round",
										className: "text-paper/70",
										"aria-hidden": true,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 8.5a9 9 0 0 1 0 7" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.5 10a5.5 5.5 0 0 1 0 4" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13 11.5a2.5 2.5 0 0 1 0 1" })
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-serif text-lg tracking-wide",
									children: ["CIAO D ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sand",
										children: "Milano"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: "Card number"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									inputMode: "numeric",
									autoComplete: "cc-number",
									placeholder: "0000 0000 0000 0000",
									value: num,
									onFocus: () => setFlipped(false),
									onChange: (e) => setNum(fmtNum(e.target.value)),
									pattern: "(\\d{4} ){3}\\d{4}",
									className: `${fieldCls} font-mono text-xl tracking-[.14em] sm:text-2xl`,
									style: { textShadow: "0 1px 0 rgba(255,255,255,.16), 0 -1px 1px rgba(0,0,0,.85)" }
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-[minmax(0,1fr)_112px] items-end gap-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[9px] uppercase tracking-[.2em] text-paper/50",
											children: "Card Holder"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											autoComplete: "cc-name",
											placeholder: "FULL NAME",
											value: name,
											onFocus: () => setFlipped(false),
											onChange: (e) => setName(e.target.value.toUpperCase().slice(0, 26)),
											className: `${fieldCls} mt-1 text-sm uppercase tracking-[.12em]`,
											style: { textShadow: "0 1px 0 rgba(255,255,255,.14), 0 -1px 1px rgba(0,0,0,.8)" }
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[9px] uppercase tracking-[.2em] text-paper/50",
											children: "Valid Thru"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											inputMode: "numeric",
											autoComplete: "cc-exp",
											placeholder: "MM / YY",
											value: exp,
											onFocus: () => setFlipped(false),
											onChange: (e) => setExp(fmtExp(e.target.value)),
											pattern: "(0[1-9]|1[0-2]) / \\d{2}",
											className: `${fieldCls} mt-1 font-mono text-sm tracking-[.12em]`,
											style: { textShadow: "0 1px 0 rgba(255,255,255,.14), 0 -1px 1px rgba(0,0,0,.8)" }
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex -space-x-3",
										"aria-hidden": true,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-8 w-8 rounded-full bg-sand/85",
											style: { boxShadow: "inset 0 0 4px rgba(0,0,0,.25)" }
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-8 rounded-full bg-burgundy/90 opacity-85" })]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0 overflow-hidden rounded-xl text-paper [backface-visibility:hidden] [transform:rotateY(180deg)]",
						style: { background: "linear-gradient(118deg, oklch(0.24 0.014 70) 0%, oklch(0.16 0.008 70) 40%, oklch(0.115 0 0) 75%, oklch(0.2 0.016 55) 100%)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-7 h-12 w-full",
								style: { background: "linear-gradient(180deg, oklch(0.08 0 0), oklch(0.14 0 0) 55%, oklch(0.09 0 0))" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "absolute right-5 top-14 h-12 w-12 rounded-full opacity-90",
								style: {
									background: "conic-gradient(from 40deg, var(--sand), var(--burgundy), var(--stone), var(--ivory), var(--sand))",
									boxShadow: "0 1px 3px rgba(0,0,0,.5), inset 0 0 6px rgba(255,255,255,.4)"
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-6 mt-6 flex items-stretch gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex min-w-0 flex-1 items-center bg-paper",
									style: { backgroundImage: "repeating-linear-gradient(90deg, transparent 0 7px, rgba(0,0,0,.05) 7px 8px)" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										viewBox: "0 0 120 36",
										className: "h-9 w-full text-ink/50",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "1.4",
										strokeLinecap: "round",
										"aria-hidden": true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 26c10-16 18-16 24-6s12 10 20-2 16-12 24-4 14 6 20-4 14-6 20 2" })
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block w-24",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[9px] uppercase tracking-[.2em] text-paper/50",
										children: "CVC"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										inputMode: "numeric",
										autoComplete: "cc-csc",
										placeholder: "•••",
										value: cvc,
										onFocus: () => setFlipped(true),
										onBlur: () => setFlipped(false),
										onChange: (e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 4)),
										pattern: "\\d{3,4}",
										className: `${fieldCls} mt-1 bg-paper/10 px-2 font-mono tracking-[.3em]`
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-5 left-6 right-6 flex items-baseline justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[9px] uppercase tracking-[.18em] text-paper/40",
									children: "Authorised signature · Not valid unless signed"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "hidden shrink-0 text-[9px] uppercase tracking-[.18em] text-paper/30 sm:block",
									children: "CIAO D MILANO · Milano IT"
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setFlipped((f) => !f),
				className: "mt-5 text-[10px] uppercase tracking-[.2em] underline underline-offset-4",
				children: flipped ? "Show front" : "Enter security code"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-xs text-stone",
				children: "This is a demo payment flow. Card details are not transmitted or stored."
			}),
			message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "alert",
				className: "mt-4 border-l-2 border-burgundy px-4 py-3 text-xs text-burgundy",
				children: message
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
					children: lines.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[64px_minmax(0,1fr)_auto] gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: "",
								width: 128,
								height: 160,
								className: "aspect-[3/4] object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: p.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-stone",
								children: ["Qty ", cart[p.id]]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm",
								children: money(p.price * (cart[p.id] ?? 0))
							})
						]
					}, p.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex justify-between border-t border-border pt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: money(total) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "lg",
					className: "mt-6 w-full",
					disabled: !lines.length || !checkoutDetails || isSubmitting,
					children: isSubmitting ? "Processing…" : `Pay ${money(total)}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/checkout",
					className: "mt-4 block text-center text-[10px] uppercase tracking-[.2em] text-stone underline underline-offset-4",
					children: "Back to checkout"
				})
			]
		})]
	});
}
//#endregion
export { Payment as component };
