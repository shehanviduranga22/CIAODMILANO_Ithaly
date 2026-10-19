import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { o as EmptyState, t as CollectionGrid, u as useCommerce } from "./storefront-zid5vPxm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wishlist-Dgk75gfi.js
var import_jsx_runtime = require_jsx_runtime();
function Wishlist() {
	const { wishlist, catalogProducts } = useCommerce();
	const items = catalogProducts.filter((p) => wishlist.includes(p.id));
	if (!items.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
		title: "Your Wishlist",
		copy: "Save the pieces you love and return to them here."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-[1440px] px-4 pb-10 pt-16 sm:px-6 lg:px-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-serif text-5xl",
			children: "Your Wishlist"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionGrid, { items })] });
}
//#endregion
export { Wishlist as component };
