import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as EditorialSlideshow, i as DatabaseSelectionGrid } from "./storefront-CJ48LNlc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/new-arrivals-BqK3coPP.js
var import_jsx_runtime = require_jsx_runtime();
var arrivel_slideshow1_default = "/assets/arrivel_slideshow1-CircDoqQ.png";
var arrivel_slideshow2_default = "/assets/arrivel_slideshow2-CbCvxo0t.png";
var arrivel_slideshow3_default = "/assets/arrivel_slideshow3-CbrMUE4L.png";
var arrivel_slideshow4_default = "/assets/arrivel_slideshow4-BeTwHgKo.png";
var newArrivalCollections = [
	{
		line: "men",
		limit: 5
	},
	{
		line: "women",
		limit: 5
	},
	{
		line: "accessories",
		limit: 5
	}
];
var slides = [
	{
		eyebrow: "The Latest",
		title: "New Arrivals",
		copy: "A considered edit of new season tailoring, silk, cashmere and leather.",
		image: arrivel_slideshow1_default,
		alt: "The latest CIAO D MILANO collection in Milan"
	},
	{
		eyebrow: "New Season",
		title: "Quiet Statements",
		copy: "Restrained silhouettes in tactile cloth, chosen to be worn far beyond one season.",
		image: arrivel_slideshow2_default,
		alt: "New season Italian womenswear campaign"
	},
	{
		eyebrow: "Just Arrived",
		title: "The New Classics",
		copy: "Purposeful pieces refined through proportion, material and subtle detail.",
		image: arrivel_slideshow3_default,
		alt: "New season Italian menswear campaign"
	},
	{
		eyebrow: "The Latest",
		title: "Fresh Perspectives",
		copy: "New expressions of considered design, exceptional material and Milanese restraint.",
		image: arrivel_slideshow4_default,
		alt: "New arrivals from the CIAO D MILANO collection"
	}
];
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditorialSlideshow, {
	label: "New arrival highlights",
	slides
}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DatabaseSelectionGrid, {
	collections: newArrivalCollections,
	fittingRoom: true,
	showFilters: true,
	mixCollections: true
})] });
//#endregion
export { SplitComponent as component };
