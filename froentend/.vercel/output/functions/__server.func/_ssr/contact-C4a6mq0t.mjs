import { r as __toESM } from "../_runtime.mjs";
import { n as imagery } from "./catalog-B_7n6T4T.mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-CDziQMNE.mjs";
import { E as ArrowUpRight, g as Mail, h as MapPin, u as Phone } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-C4a6mq0t.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const submit = (event) => {
		event.preventDefault();
		setSent(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ink-deep text-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid min-h-[52vh] max-w-[1440px] lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-end p-6 pb-16 sm:p-10 lg:p-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-[.2em] text-sand",
						children: "Client Services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-5 max-w-[10ch] font-serif text-6xl leading-none sm:text-7xl",
						children: "Contact Us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-7 max-w-md text-sm leading-7 text-paper/55",
						children: "Our private client team is here to assist with orders, styling, sizing and every detail in between."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: imagery.stillLife,
				alt: "CIAO D MILANO private client service",
				width: 1536,
				height: 1024,
				className: "h-full min-h-[360px] w-full object-cover"
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-[1440px] gap-16 px-6 py-24 lg:grid-cols-12 lg:px-10 lg:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "lg:col-span-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] uppercase tracking-[.2em] text-stone",
					children: "Speak with the House"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 divide-y divide-border border-y border-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactLine, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {}),
							label: "Email",
							value: "clientservices@ciaodmilano.com",
							href: "mailto:clientservices@ciaodmilano.com"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactLine, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {}),
							label: "Telephone",
							value: "+971 4 555 0198",
							href: "tel:+97145550198"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactLine, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {}),
							label: "Regional Service",
							value: "Dubai, United Arab Emirates"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-sm text-xs leading-6 text-stone",
					children: "Monday–Saturday, 10:00–19:00 GST. We aim to reply to every enquiry within one business day."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-7 lg:col-start-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] uppercase tracking-[.2em] text-stone",
					children: "Send an Enquiry"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 font-serif text-4xl",
					children: "How may we assist you?"
				}),
				sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 border border-border bg-ivory p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-3xl",
							children: "Grazie."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-7 text-stone",
							children: "Your message has been received. Our client services team will be in touch shortly."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							className: "mt-7",
							onClick: () => setSent(false),
							children: "Send another enquiry"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "First Name",
							name: "firstName"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Last Name",
							name: "lastName"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email Address",
							name: "email",
							type: "email"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Telephone",
							name: "phone",
							type: "tel"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] uppercase tracking-[.16em]",
								children: "Topic"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								required: true,
								className: "mt-3 h-12 w-full border-b border-input bg-transparent text-sm outline-none focus:border-ink",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Order enquiry" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Product and sizing" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Personal shopping" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Press and partnerships" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Other" })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] uppercase tracking-[.16em]",
								children: "Message"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								required: true,
								rows: 5,
								className: "mt-3 w-full resize-none border-b border-input bg-transparent py-3 text-sm outline-none focus:border-ink"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								size: "lg",
								children: ["Send Enquiry ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
							})
						})
					]
				})
			]
		})]
	})] });
}
function Field({ label, name, type = "text" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-[10px] uppercase tracking-[.16em]",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		required: true,
		name,
		type,
		className: "mt-3 h-12 w-full border-b border-input bg-transparent text-sm outline-none focus:border-ink"
	})] });
}
function ContactLine({ icon, label, value, href }) {
	const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-stone [&_svg]:size-4",
		children: icon
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "block text-[9px] uppercase tracking-[.16em] text-stone",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "mt-1 block text-sm",
		children: value
	})] })] });
	return href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: "grid grid-cols-[24px_1fr] gap-3 py-6 transition-opacity hover:opacity-55",
		children: content
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-[24px_1fr] gap-3 py-6",
		children: content
	});
}
//#endregion
export { ContactPage as component };
