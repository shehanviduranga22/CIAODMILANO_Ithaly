import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-0gtqMpDS.js
var $$splitComponentImporter = () => import("./account-Dw0OgqgC.mjs");
var Route = createFileRoute("/account")({
	validateSearch: (search) => typeof search["redirectTo"] === "string" ? { redirectTo: search["redirectTo"] } : {},
	head: () => ({ meta: [
		{ title: "Private Client Account — CIAO D MILANO" },
		{
			name: "description",
			content: "Sign in or create your CIAO D MILANO private client account."
		},
		{
			property: "og:title",
			content: "Private Client Account — CIAO D MILANO"
		},
		{
			property: "og:description",
			content: "Access orders, saved pieces and private collection previews."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
