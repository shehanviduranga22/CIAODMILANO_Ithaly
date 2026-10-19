import { o as __toESM } from "../_runtime.mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as Search } from "../_libs/lucide-react.mjs";
import { s as ProductCard, u as useCommerce } from "./storefront-CJ48LNlc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-BfWw3Epl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SearchPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const { catalogProducts, loadCollection } = useCommerce();
	const departments = [
		"men",
		"women",
		"accessories"
	];
	const hits = catalogProducts.filter((p) => (p.name + p.category).toLowerCase().includes(q.toLowerCase()));
	const departmentHits = departments.map((department) => hits.filter((product) => product.id.startsWith(`${department}:`) || product.category.toLowerCase().startsWith(`${department} ·`)));
	const mixedHits = Array.from({ length: Math.max(0, ...departmentHits.map((items) => items.length)) }, (_, index) => departmentHits.flatMap((items) => items[index] ? [items[index]] : [])).flat().concat(hits.filter((product) => !departments.some((department) => product.id.startsWith(`${department}:`) || product.category.toLowerCase().startsWith(`${department} ·`))));
	const visibleHits = q ? mixedHits : mixedHits.slice(12);
	(0, import_react.useEffect)(() => {
		Promise.all([
			loadCollection("men"),
			loadCollection("women"),
			loadCollection("accessories")
		]);
	}, [loadCollection]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto min-h-[70vh] max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-5xl",
				children: "Search"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 border-b border-ink pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					autoFocus: true,
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "What are you looking for?",
					className: "min-w-0 bg-transparent text-xl outline-none placeholder:text-stone"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "my-10 text-[10px] uppercase tracking-[0.16em] text-stone",
				children: q ? `${mixedHits.length} results for “${q}”` : `${visibleHits.length} pieces`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-6",
				children: visibleHits.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
			})
		]
	});
}
//#endregion
export { SearchPage as component };
