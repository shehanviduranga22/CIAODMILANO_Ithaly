import { n as imagery } from "./catalog-B_7n6T4T.mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as EditorialSlideshow } from "./storefront-zid5vPxm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collections-D481zAsW.js
var import_jsx_runtime = require_jsx_runtime();
var slides = [
	{
		eyebrow: "The House",
		title: "Collections",
		copy: "Seasonal studies in silhouette, material and the quiet architecture of dress.",
		image: "/assets/collection_slideshow1-DnSVZr9T.png",
		alt: "CIAO D MILANO collection objects in the atelier"
	},
	{
		eyebrow: "Atelier No. 01",
		title: "Sculpted Ease",
		copy: "Fluid womenswear balanced by exact lines and a distinctly Milanese restraint.",
		image: "/assets/collection_slideshow2-CXl0YtLC.png",
		alt: "Sculpted womenswear from the atelier collection"
	},
	{
		eyebrow: "Atelier No. 02",
		title: "Precision in Black",
		copy: "A modern menswear study built around impeccable tailoring and enduring form.",
		image: "/assets/collection_slideshow3-C4NDCrFP.png",
		alt: "Black tailoring from the men's collection"
	},
	{
		eyebrow: "The House Edit",
		title: "Objects of Permanence",
		copy: "Explore pieces shaped by fabric, proportion and the enduring craft of Milan.",
		image: "/assets/collection_slideshow4-CZ1kbiGF.png",
		alt: "CIAO D MILANO seasonal collection"
	}
];
function Collections() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditorialSlideshow, {
		label: "Collection highlights",
		slides
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto grid max-w-[1440px] gap-6 px-6 py-20 md:grid-cols-2 lg:px-10 lg:py-24",
		children: [
			[
				"The Atelier Edit",
				imagery.women,
				"/women"
			],
			[
				"Precision in Black",
				imagery.men,
				"/men"
			],
			[
				"Objects of Permanence",
				imagery.stillLife,
				"/new-arrivals"
			]
		].map(([title, img, to], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to,
			className: `group relative overflow-hidden ${i === 2 ? "md:col-span-2" : ""}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: img,
					alt: title,
					loading: "lazy",
					width: 1536,
					height: 1280,
					className: `w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] ${i === 2 ? "aspect-[16/7]" : "aspect-[4/5]"}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink-deep/65 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "absolute bottom-7 left-7 font-serif text-4xl text-paper",
					children: title
				})
			]
		}, title))
	})] });
}
//#endregion
export { Collections as component };
