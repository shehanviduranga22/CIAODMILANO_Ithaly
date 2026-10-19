import { o as __toESM } from "../_runtime.mjs";
import { r as money, t as ciao_women_default } from "./catalog-B_7n6T4T.mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-CDziQMNE.mjs";
import { S as useRouter, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Check, D as ArrowRight, _ as LogOut, b as EyeOff, f as PackageCheck, w as CalendarDays, y as Eye } from "../_libs/lucide-react.mjs";
import { u as useCommerce } from "./storefront-zid5vPxm.mjs";
import { t as Route } from "./account-0gtqMpDS.mjs";
import { t as Input } from "./input-BIKYv5Rd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-Dw0OgqgC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PasswordField({ name, placeholder }) {
	const [visible, setVisible] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			required: true,
			name,
			minLength: 8,
			maxLength: 72,
			type: visible ? "text" : "password",
			placeholder,
			className: "h-12 pr-12"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "button",
			variant: "ghost",
			size: "icon",
			"aria-label": visible ? "Hide password" : "Show password",
			title: visible ? "Hide password" : "Show password",
			onClick: () => setVisible((current) => !current),
			className: "absolute right-1 top-1 h-10 w-10 text-stone hover:bg-transparent hover:text-ink",
			children: visible ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" })
		})]
	});
}
function Account() {
	const { redirectTo } = Route.useSearch();
	const { catalogProducts, completeSignIn, signOut } = useCommerce();
	const router = useRouter();
	const [mode, setMode] = (0, import_react.useState)("signin");
	const [message, setMessage] = (0, import_react.useState)("");
	const [messageType, setMessageType] = (0, import_react.useState)("success");
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [profile, setProfile] = (0, import_react.useState)(null);
	const [orders, setOrders] = (0, import_react.useState)([]);
	const [isCheckingAccount, setIsCheckingAccount] = (0, import_react.useState)(true);
	const [isSigningOut, setIsSigningOut] = (0, import_react.useState)(false);
	const [accountError, setAccountError] = (0, import_react.useState)("");
	const [refreshAccount, setRefreshAccount] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		let active = true;
		async function loadAccount() {
			setIsCheckingAccount(true);
			setAccountError("");
			try {
				const sessionResponse = await fetch("/api/account/session");
				if (sessionResponse.status === 401) {
					if (active) setProfile(null);
					return;
				}
				if (!sessionResponse.ok) throw new Error(`Account details request failed with status ${sessionResponse.status}`);
				const session = await sessionResponse.json();
				if (session.status !== "authenticated" || !session.account) throw new Error("Account details response was incomplete");
				if (active) setProfile(session.account);
				const ordersResponse = await fetch("/api/orders");
				if (!ordersResponse.ok) throw new Error(`Order history request failed with status ${ordersResponse.status}`);
				const orderResult = await ordersResponse.json();
				if (orderResult.status !== "ok" || !Array.isArray(orderResult.orders)) throw new Error("Order history response was incomplete");
				if (active) setOrders(orderResult.orders);
			} catch (error) {
				console.error("Could not load account details and order history", error);
				if (active) setAccountError("We could not load all of your account information. Please refresh to try again.");
			} finally {
				if (active) setIsCheckingAccount(false);
			}
		}
		loadAccount();
		return () => {
			active = false;
		};
	}, [refreshAccount]);
	function selectMode(nextMode) {
		setMode(nextMode);
		setMessage("");
	}
	async function handleSignOut() {
		setIsSigningOut(true);
		setAccountError("");
		try {
			await signOut();
			setProfile(null);
			setOrders([]);
			setMode("signin");
			setIsCheckingAccount(false);
			setAccountError("");
			setMessage("You have been signed out.");
			setMessageType("success");
			router.history.replace("/account");
		} catch (error) {
			console.error("Could not sign out", error);
			setAccountError("We could not sign you out. Please try again.");
		} finally {
			setIsSigningOut(false);
		}
	}
	async function submit(event) {
		event.preventDefault();
		const form = event.currentTarget;
		const formData = new FormData(form);
		if (mode === "signin") {
			setIsSubmitting(true);
			setMessage("");
			try {
				const response = await fetch("/api/account/login", {
					method: "POST",
					headers: { "content-type": "application/json" },
					body: JSON.stringify({
						email: formData.get("email"),
						password: formData.get("password")
					})
				});
				const result = await response.json();
				if (response.ok && result.status === "authenticated") {
					completeSignIn();
					setRefreshAccount((current) => current + 1);
					setMessage("Login Successful");
					setMessageType("success");
					if (redirectTo?.startsWith("/") && !redirectTo.startsWith("//")) {
						const destination = new URL(redirectTo, window.location.origin);
						if (destination.origin === window.location.origin && destination.pathname !== "/account") router.history.push(`${destination.pathname}${destination.search}${destination.hash}`);
					}
				} else if (response.status === 401) {
					setMessage("The email or password is incorrect.");
					setMessageType("error");
				} else {
					setMessage("We could not sign in to your account. Please try again.");
					setMessageType("error");
				}
			} catch {
				setMessage("We could not reach the account service. Please try again.");
				setMessageType("error");
			} finally {
				setIsSubmitting(false);
			}
			return;
		}
		const password = String(formData.get("password") ?? "");
		const confirmation = String(formData.get("confirmation") ?? "");
		if (password !== confirmation) {
			setMessage("Passwords do not match.");
			setMessageType("error");
			return;
		}
		setIsSubmitting(true);
		setMessage("");
		try {
			const response = await fetch("/api/account", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					firstName: formData.get("firstName"),
					lastName: formData.get("lastName"),
					email: formData.get("email"),
					password,
					confirmation
				})
			});
			const result = await response.json();
			if (response.ok && result.status === "created") {
				setMessage("Your account has been created.");
				setMessageType("success");
				form.reset();
				setMode("signin");
			} else if (response.status === 409) {
				setMessage("An account with this email address already exists.");
				setMessageType("error");
			} else if (response.status === 400 && result.status === "password_mismatch") {
				setMessage("Passwords do not match.");
				setMessageType("error");
			} else if (response.status === 400) {
				setMessage("Please check your details and try again.");
				setMessageType("error");
			} else {
				setMessage("We could not create your account. Please try again.");
				setMessageType("error");
			}
		} catch {
			setMessage("We could not reach the account service. Please try again.");
			setMessageType("error");
		} finally {
			setIsSubmitting(false);
		}
	}
	const isRegister = mode === "register";
	if (isCheckingAccount) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "flex min-h-[60vh] items-center justify-center px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-stone",
			children: "Checking your account…"
		})
	});
	if (profile) {
		const lifetimeSpend = orders.reduce((sum, order) => sum + order.totalAmount, 0);
		const memberSince = profile.createdAt ? new Date(profile.createdAt).toLocaleDateString("en-IE", {
			month: "long",
			year: "numeric"
		}) : "Private client";
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "min-h-[70vh] bg-paper pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1440px] px-4 pt-8 sm:px-6 lg:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Breadcrumb",
						className: "text-[9px] uppercase tracking-[0.18em] text-stone",
						children: [
							"The House ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-2 text-border",
								children: "/"
							}),
							" Private Client"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-7 grid min-h-[300px] overflow-hidden bg-ink-deep text-paper md:min-h-[360px] md:grid-cols-[1.1fr_.9fr]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-0 md:inset-y-0 md:left-1/2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: ciao_women_default,
									alt: "",
									className: "h-full w-full object-cover opacity-45"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-ink-deep via-ink-deep/55 to-ink-deep/10 md:bg-gradient-to-r md:from-ink-deep md:via-ink-deep/25 md:to-transparent" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex flex-col justify-between p-7 sm:p-10 lg:p-14",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-sand",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-sand" }),
											"Private client · Nº ",
											profile.email.slice(0, 2).toUpperCase()
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-12",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[10px] uppercase tracking-[0.18em] text-paper/60",
											children: ["Benvenuto, ", profile.firstName]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
											className: "mt-3 max-w-xl font-serif text-5xl leading-[.98] sm:text-6xl",
											children: [
												"Your world,",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												"beautifully considered."
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-8 max-w-sm text-xs leading-6 text-paper/65",
										children: "A personal space for the pieces you love and the moments they become part of."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative hidden items-end justify-end p-8 md:flex lg:p-12",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-l border-sand/70 pl-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[9px] uppercase tracking-[0.2em] text-paper/55",
										children: "A client since"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 font-serif text-3xl",
										children: memberSince
									})]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-8 lg:grid-cols-[minmax(260px,.72fr)_minmax(0,1.6fr)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
							className: "self-start border border-border bg-ivory p-6 sm:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex size-14 items-center justify-center bg-ink font-serif text-xl text-paper",
										children: [profile.firstName.charAt(0), profile.lastName.charAt(0)]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										type: "button",
										variant: "outline",
										size: "sm",
										disabled: isSigningOut,
										onClick: handleSignOut,
										className: "border-border bg-transparent",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {}), isSigningOut ? "Signing Out" : "Sign Out"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-[9px] uppercase tracking-[0.2em] text-stone",
									children: "Your Details"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "mt-2 font-serif text-3xl",
									children: [
										profile.firstName,
										" ",
										profile.lastName
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 break-all text-xs text-stone",
									children: profile.email
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-7 flex items-center gap-3 border-t border-border pt-5 text-xs text-stone",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-4 text-burgundy" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Member since ", memberSince] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-7 grid grid-cols-2 gap-3 border-t border-border pt-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-serif text-3xl",
										children: orders.length.toString().padStart(2, "0")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[9px] uppercase tracking-[0.15em] text-stone",
										children: "Recent Orders"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-serif text-2xl",
										children: money(lifetimeSpend)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[9px] uppercase tracking-[0.15em] text-stone",
										children: "Recent Spend"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-7 border-l border-burgundy pl-4 font-serif text-lg italic leading-snug text-stone",
									children: "“Elegance is the balance between who you are and what you wear.”"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-end justify-between gap-4 border-b border-ink pb-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[9px] uppercase tracking-[0.2em] text-stone",
									children: "Your journey with us"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 font-serif text-4xl",
									children: "Order History"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCheck, {
									className: "mb-1 size-6 text-burgundy",
									"aria-hidden": "true"
								})]
							}), accountError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								role: "alert",
								className: "mt-6 border-l-2 border-burgundy px-4 py-3 text-sm text-burgundy",
								children: accountError
							}) : orders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 bg-ivory px-6 py-12 text-center sm:py-16",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[9px] uppercase tracking-[0.2em] text-stone",
										children: "A story yet to begin"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-serif text-3xl",
										children: "Your first order awaits."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-3 max-w-sm text-xs leading-6 text-stone",
										children: "Explore the collection and find a piece that feels unmistakably yours."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/new-arrivals",
										className: "mt-6 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] underline underline-offset-4",
										children: ["Discover the collection ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3" })]
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 space-y-4",
								children: orders.map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "border border-border bg-white p-5 sm:p-7",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-baseline justify-between gap-3 border-b border-border pb-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-[9px] uppercase tracking-[0.17em] text-stone",
												children: ["Order Nº ", order.id.slice(-8).toUpperCase()]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 font-serif text-xl",
												children: new Date(order.createdAt).toLocaleDateString("en-IE", {
													day: "2-digit",
													month: "long",
													year: "numeric"
												})
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "border border-border px-3 py-1 text-[8px] uppercase tracking-[0.16em] text-stone",
												children: "Confirmed"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-5 space-y-4",
											children: order.purchasedItems.map((item) => {
												const product = catalogProducts.find((piece) => piece.id === item.productId);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-4",
													children: [
														product && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
															src: product.image,
															alt: "",
															className: "size-16 object-cover sm:size-[76px]"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "min-w-0 flex-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "font-serif text-lg",
																children: item.name
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																className: "mt-1 text-[9px] uppercase tracking-[0.15em] text-stone",
																children: ["Quantity · ", item.quantity]
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "shrink-0 text-sm",
															children: money(item.lineTotal)
														})
													]
												}, item.productId);
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-5 flex flex-wrap items-end justify-between gap-3 border-t border-border pt-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-[9px] uppercase tracking-[0.14em] text-stone",
												children: ["Paid by ", order.paymentMethod]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-[9px] uppercase tracking-[0.14em] text-stone",
												children: [
													"Total",
													" ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
														className: "ml-3 text-sm text-ink",
														children: money(order.totalAmount)
													})
												]
											})]
										})
									]
								}, order.id))
							})]
						})]
					})
				]
			})
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid min-h-[calc(100svh-4rem)] bg-ivory lg:grid-cols-[minmax(0,1.08fr)_minmax(480px,0.92fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative min-h-[42svh] overflow-hidden bg-ink-deep lg:min-h-[760px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: ciao_women_default,
					alt: "CIAO D MILANO atelier campaign",
					width: 1024,
					height: 1280,
					className: "editorial-fade absolute inset-0 h-full w-full object-cover object-center"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink-deep/85 via-transparent to-ink-deep/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 bottom-0 p-7 text-paper sm:p-10 lg:p-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase tracking-[0.22em] text-sand",
							children: "The Private Client"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
							className: "mt-4 max-w-lg font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl",
							children: "A more personal way to experience the house."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-sm text-sm leading-6 text-paper/75",
							children: "Save considered pieces, revisit your orders and receive first access to new collections."
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center px-6 py-14 sm:px-12 lg:px-16 xl:px-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "editorial-rise mx-auto w-full max-w-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex border-b border-ink",
						role: "tablist",
						"aria-label": "Account access",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							role: "tab",
							"aria-selected": !isRegister,
							onClick: () => selectMode("signin"),
							className: `h-12 flex-1 border-b-2 px-2 ${!isRegister ? "border-ink text-ink" : "border-transparent text-stone"}`,
							children: "Sign In"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							role: "tab",
							"aria-selected": isRegister,
							onClick: () => selectMode("register"),
							className: `h-12 flex-1 border-b-2 px-2 ${isRegister ? "border-ink text-ink" : "border-transparent text-stone"}`,
							children: "Create Account"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-9 sm:py-11",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] uppercase tracking-[0.22em] text-stone",
								children: "CIAO D MILANO"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 font-serif text-4xl leading-none sm:text-5xl",
								children: isRegister ? "Join the House" : "Welcome Back"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-md text-sm leading-7 text-stone",
								children: isRegister ? "Create your private account for a considered and personal shopping experience." : "Sign in to view your orders, saved pieces and private collection previews."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: submit,
						className: "grid gap-4",
						noValidate: false,
						children: [
							accountError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								role: "alert",
								className: "border-l-2 border-burgundy px-4 py-3 text-xs text-burgundy",
								children: accountError
							}),
							isRegister && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									required: true,
									name: "firstName",
									maxLength: 50,
									autoComplete: "given-name",
									placeholder: "First name",
									className: "h-12"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									required: true,
									name: "lastName",
									maxLength: 50,
									autoComplete: "family-name",
									placeholder: "Last name",
									className: "h-12"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								required: true,
								name: "email",
								type: "email",
								maxLength: 255,
								autoComplete: "email",
								placeholder: "Email address",
								className: "h-12"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordField, {
								name: "password",
								placeholder: "Password"
							}),
							isRegister && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordField, {
								name: "confirmation",
								placeholder: "Confirm password"
							}),
							!isRegister && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-end",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "link",
									className: "h-auto px-0 text-[10px] text-stone",
									children: "Forgot password?"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								type: "submit",
								disabled: isSubmitting,
								className: "mt-2 h-13 w-full",
								children: isSubmitting ? isRegister ? "Creating Account..." : "Signing In..." : isRegister ? "Create My Account" : "Enter My Account"
							}),
							message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								role: "status",
								className: `border-l-2 px-4 py-3 text-xs ${messageType === "error" ? "border-burgundy text-burgundy" : "border-ink text-ink"}`,
								children: message
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 border-t border-border pt-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] uppercase tracking-[0.18em] text-stone",
								children: "Private account privileges"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 grid gap-3 text-xs text-ink sm:grid-cols-2",
								children: [
									"Saved pieces",
									"Order history",
									"Faster checkout",
									"Collection previews"
								].map((benefit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "size-3 text-burgundy",
										"aria-hidden": "true"
									}), benefit]
								}, benefit))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-7 text-[10px] leading-5 text-stone",
								children: "By continuing, you agree to our Terms & Conditions and acknowledge our Privacy Policy."
							})
						]
					})
				]
			})
		})]
	});
}
//#endregion
export { Account as component };
