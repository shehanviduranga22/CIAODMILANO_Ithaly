import { i as products } from "./catalog-B_7n6T4T.mjs";
import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._id-B7fLQTJ8.js
var $$splitComponentImporter = () => import("./product._id-B9PK1AmV.mjs");
var Route = createFileRoute("/product/$id")({
	head: ({ params }) => {
		const p = products.find((x) => x.id === params.id);
		const title = p ? `${p.name} — CIAO D MILANO` : "Product — CIAO D MILANO";
		const description = p?.description ?? "Discover Italian luxury fashion by CIAO D MILANO.";
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
