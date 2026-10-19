import { n as imagery } from "./catalog-B_7n6T4T.mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-CDziQMNE.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as EditorialSlideshow, i as DatabaseSelectionGrid } from "./storefront-zid5vPxm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BE-5g15U.js
var import_jsx_runtime = require_jsx_runtime();
var dubai_delivery_banner_default = "/assets/dubai-delivery-banner-BlFh3tYl.jpg";
var signature_tee_model_default = "/assets/signature-tee-model-w5rZoX_8.jpg";
var signature_tee_still_life_default = "/assets/signature-tee-still-life-CkucuKQ7.jpg";
var homeSlides = [
	{
		eyebrow: "Autumn — Winter 2026",
		title: "The Quiet Luxury of Milan",
		copy: "Discover Italian tailoring, timeless womenswear and modern menswear.",
		image: "/assets/home_slideshow1-CB8SHn9f.png",
		alt: "CIAO D MILANO autumn winter campaign in Milan"
	},
	{
		eyebrow: "The House",
		title: "Made in Milan",
		copy: "A considered approach to modern dressing, shaped by craft and restraint.",
		image: "/assets/home_slideshow2-B2Su7M1A.png",
		alt: "CIAO D MILANO collection in Milan"
	},
	{
		eyebrow: "The Collection",
		title: "A Study in Form",
		copy: "Exceptional materials and precise silhouettes for a wardrobe that endures.",
		image: "/assets/home_slideshow3-C_jXy1rg.png",
		alt: "Italian fashion from the CIAO D MILANO collection"
	},
	{
		eyebrow: "The Atelier",
		title: "Considered by Design",
		copy: "Explore the latest expressions from the CIAO D MILANO atelier.",
		image: "/assets/home_slideshow4-D-Jvz5Q5.png",
		alt: "CIAO D MILANO craftsmanship and contemporary style"
	}
];
var seasonEditCollections = [
	{
		line: "men",
		limit: 3
	},
	{
		line: "women",
		limit: 3
	},
	{
		line: "accessories",
		limit: 2
	}
];
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditorialSlideshow, {
			label: "Home collection highlights",
			slides: homeSlides,
			align: "left",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				size: "lg",
				variant: "outline",
				className: "mt-8 border-paper bg-paper text-ink hover:bg-paper/85",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/collections",
					children: ["Shop Collection ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-[10px] uppercase tracking-[0.2em] text-stone",
					children: "New Arrivals"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-4xl sm:text-5xl",
					children: "This Season's Edit"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/new-arrivals",
					className: "hidden text-[10px] uppercase tracking-[0.16em] sm:block",
					children: "View All →"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DatabaseSelectionGrid, {
				collections: seasonEditCollections,
				mixCollections: true
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-[1440px] gap-6 px-4 pb-24 sm:px-6 md:grid-cols-12 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Campaign, {
				to: "/women",
				image: imagery.women,
				alt: "Women's collection in a Milan atelier",
				eyebrow: "Women",
				title: "The Atelier Edit",
				className: "md:col-span-7"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between md:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "py-8 md:py-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase tracking-[0.2em] text-stone",
							children: "Men"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 max-w-[12ch] font-serif text-4xl sm:text-5xl",
							children: "Tailored for the Modern Man"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-[40ch] text-sm leading-7 text-stone",
							children: "Cut in Milan, finished by hand. A wardrobe built on restraint and precision."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Campaign, {
					to: "/men",
					image: imagery.men,
					alt: "Men's tailoring collection",
					title: "Explore Menswear",
					compact: true
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignatureTee, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-[68vh] overflow-hidden bg-ink-deep",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: imagery.stillLife,
					alt: "Italian craftsmanship and accessories",
					loading: "lazy",
					width: 1536,
					height: 1024,
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-ink-deep/80 via-ink-deep/25 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto flex min-h-[68vh] max-w-[1440px] items-center px-6 lg:px-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xl text-paper",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-4 text-[10px] uppercase tracking-[0.22em] text-sand",
								children: "The Journal"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-5xl leading-none sm:text-6xl",
								children: "Crafted in the Quiet"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "link",
								className: "mt-6 px-0 text-paper",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/about",
									children: ["Read the Story ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
								})
							})
						]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-[1440px] gap-8 px-6 py-24 md:grid-cols-12 lg:px-10 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] uppercase tracking-[0.2em] text-stone md:col-span-4",
				children: "Our Story"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "max-w-[28ch] font-serif text-3xl leading-tight sm:text-4xl",
						children: "Founded in Milan, CIAO D MILANO is a study in restraint — garments that speak softly and endure."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-[54ch] text-sm leading-7 text-stone",
						children: "Every piece is cut from considered Italian fabric and finished in our atelier, where the pace is slow and the standard is absolute."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "link",
						className: "mt-5 px-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/about",
							children: ["Discover Our House ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeliveryBanner, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newsletter, {})
	] });
}
function Campaign({ to, image, alt, eyebrow, title, className = "", compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: `group relative block overflow-hidden ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt,
				loading: "lazy",
				width: 1024,
				height: 1280,
				className: `w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] ${compact ? "aspect-[4/5]" : "aspect-[4/5]"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink-deep/65 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-0 p-6 text-paper lg:p-8",
				children: [eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[9px] uppercase tracking-[0.18em] text-sand",
					children: eyebrow
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-serif text-3xl",
					children: title
				})]
			})
		]
	});
}
function SignatureTee() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ivory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1440px] items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-[minmax(0,1fr)_minmax(270px,0.9fr)_minmax(0,1fr)] md:gap-8 lg:gap-16 lg:px-10 lg:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: signature_tee_model_default,
						alt: "Man wearing the CIAO D MILANO essential ivory T-shirt in Milan",
						loading: "lazy",
						width: 1024,
						height: 1280,
						className: "aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "order-first mx-auto max-w-md text-center md:order-none",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase tracking-[0.24em] text-sand",
							children: "Our Signature Piece"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 font-serif text-5xl leading-[.95] sm:text-6xl md:text-5xl lg:text-6xl",
							children: [
								"The Essential",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"T-Shirt"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto mt-5 flex w-16 items-center justify-center gap-2",
							"aria-hidden": "true",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-5 bg-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-5 bg-paper" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-5 bg-burgundy" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-[10px] font-medium uppercase tracking-[0.2em]",
							children: "Simple. Refined. Italian."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-5 max-w-sm text-sm leading-7 text-stone",
							children: "Premium Italian cotton, shaped with a considered fit and finished for effortless everyday wear."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "outline",
							className: "mt-8 border-ink bg-transparent hover:bg-ink hover:text-paper",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/men",
								children: ["Shop T-Shirts ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: signature_tee_still_life_default,
						alt: "Ivory essential T-shirt displayed in the CIAO D MILANO atelier",
						loading: "lazy",
						width: 1024,
						height: 1280,
						className: "aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
					})
				})
			]
		})
	});
}
function DeliveryBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate min-h-[500px] overflow-hidden bg-ink-deep sm:min-h-[540px] lg:min-h-[430px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: dubai_delivery_banner_default,
				alt: "Dubai skyline at golden hour",
				loading: "lazy",
				width: 1920,
				height: 768,
				className: "absolute inset-0 h-full w-full object-cover object-[58%_center]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-ink-deep via-ink-deep/70 to-ink-deep/20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid min-h-[500px] max-w-[1440px] items-center gap-10 px-6 py-14 sm:min-h-[540px] lg:min-h-[430px] lg:grid-cols-[minmax(0,1fr)_300px] lg:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl text-paper",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-5 text-[10px] uppercase tracking-[0.22em] text-sand",
							children: "We Deliver Style to You"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-serif text-5xl leading-[.95] sm:text-6xl lg:text-7xl",
							children: [
								"Complimentary Delivery",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Across the UAE"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 max-w-md text-sm leading-7 text-paper/75",
							children: [
								"No minimum order. No hidden charges.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"From our house to your door, anywhere in the UAE."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "outline",
							className: "mt-8 border-sand bg-ink-deep/75 text-paper hover:bg-paper hover:text-ink",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/shipping-delivery",
								children: ["Delivery Details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden justify-self-center lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rotate-[-4deg] border border-sand/70 px-10 py-14 text-center text-sand",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-3xl tracking-[0.12em]",
							children: "CIAO D"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[10px] uppercase tracking-[0.35em]",
							children: "Milano"
						})]
					})
				})]
			})
		]
	});
}
function Newsletter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1440px] px-6 py-20 lg:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-4xl",
						children: "Join the Atelier"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-stone",
						children: "Receive private previews and studio notes. No noise, only what matters."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => e.preventDefault(),
						className: "mt-8 grid grid-cols-[minmax(0,1fr)_auto] items-center border-b border-input pb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							"aria-label": "Email address",
							required: true,
							placeholder: "Your email address",
							className: "min-w-0 bg-transparent text-sm outline-none placeholder:text-stone"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							variant: "ghost",
							children: "Subscribe"
						})]
					})
				]
			})
		})
	});
}
//#endregion
export { HomePage as component };
