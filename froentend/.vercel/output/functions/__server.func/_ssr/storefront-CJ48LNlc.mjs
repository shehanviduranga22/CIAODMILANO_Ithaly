import { o as __toESM } from "../_runtime.mjs";
import { i as products, n as imagery, r as money } from "./catalog-B_7n6T4T.mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn, t as Button } from "./button-CDziQMNE.mjs";
import { b as Link, p as useRouterState, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ArrowRight, O as ArrowLeft, S as ChevronDown, a as Shirt, d as Pause, i as ShoppingBag, l as Play, m as Menu, n as UserRound, o as Search, t as X, v as Heart } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { i as PopoverTrigger$1, n as PopoverContent$1, r as PopoverPortal, t as Popover$1 } from "../_libs/@radix-ui/react-popover+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/storefront-CJ48LNlc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Popover = Popover$1;
var PopoverTrigger = PopoverTrigger$1;
var PopoverContent = import_react.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent$1, {
	ref,
	align,
	sideOffset,
	className: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)", "data-[state=open]:duration-400 data-[state=open]:ease-out data-[state=closed]:duration-200 motion-reduce:animate-none", className),
	...props
}) }));
PopoverContent.displayName = PopoverContent$1.displayName;
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
var mega_accessories_default = "/assets/mega_accessories-B6ZE70Uh.png";
var mega_collection_default = "/assets/mega_collection-BzWqGBc3.png";
var mega_men_default = "/assets/mega_men-BpoK3SBD.png";
var mega_newarrivels_default = "/assets/mega_newarrivels-DXV_wolh.png";
var mega_women_default = "/assets/mega_women-CYehBOiM.png";
function isCollectionItem(item) {
	return typeof item === "object" && item !== null && "id" in item && typeof item.id === "string" && "name" in item && typeof item.name === "string" && "price" in item && typeof item.price === "number" && Number.isFinite(item.price) && "category" in item && typeof item.category === "string" && (!("description" in item) || typeof item.description === "string") && (!("image" in item) || typeof item.image === "string" || item.image === null);
}
var collectionDefaults = {
	men: {
		label: "Men",
		image: imagery.men
	},
	women: {
		label: "Women",
		image: imagery.women
	},
	accessories: {
		label: "Accessories",
		image: imagery.stillLife
	}
};
var CommerceContext = (0, import_react.createContext)(null);
function CommerceProvider({ children }) {
	const [cart, setCart] = (0, import_react.useState)({});
	const [wishlist, setWishlist] = (0, import_react.useState)([]);
	const [databaseProducts, setDatabaseProducts] = (0, import_react.useState)([]);
	const [collectionStates, setCollectionStates] = (0, import_react.useState)({
		men: {
			loaded: false,
			loading: false,
			error: null
		},
		women: {
			loaded: false,
			loading: false,
			error: null
		},
		accessories: {
			loaded: false,
			loading: false,
			error: null
		}
	});
	const [isAuthenticated, setIsAuthenticated] = (0, import_react.useState)(false);
	const [isAuthLoading, setIsAuthLoading] = (0, import_react.useState)(true);
	const pendingAction = (0, import_react.useRef)(null);
	const loadedCollections = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	const collectionRequests = (0, import_react.useRef)({});
	const navigate = useNavigate();
	const location = useRouterState({ select: (state) => state.location });
	const loadCollection = (0, import_react.useCallback)((line) => {
		if (loadedCollections.current.has(line)) return Promise.resolve();
		const existingRequest = collectionRequests.current[line];
		if (existingRequest) return existingRequest;
		setCollectionStates((current) => ({
			...current,
			[line]: {
				loaded: false,
				loading: true,
				error: null
			}
		}));
		const request = (async () => {
			try {
				const response = await fetch(`/api/storefront/${line}`);
				const result = await response.json();
				if (!response.ok) {
					const message = typeof result === "object" && result !== null && "error" in result && typeof result.error === "string" ? result.error : `Unable to load collection items (status ${response.status}).`;
					throw new Error(message);
				}
				if (typeof result !== "object" || result === null || !("items" in result) || !Array.isArray(result.items)) throw new Error("The collection response is invalid.");
				const collection = collectionDefaults[line];
				const loadedItems = result.items.map((value) => {
					if (!isCollectionItem(value)) throw new Error("The collection contains an invalid item.");
					return {
						id: `${line}:${value.id}`,
						name: value.name,
						category: `${collection.label} · ${value.category}`,
						price: value.price,
						image: value.image || collection.image,
						description: value.description || ""
					};
				});
				setDatabaseProducts((current) => [...current.filter((product) => !product.id.startsWith(`${line}:`)), ...loadedItems]);
				loadedCollections.current.add(line);
				setCollectionStates((current) => ({
					...current,
					[line]: {
						loaded: true,
						loading: false,
						error: null
					}
				}));
			} catch (error) {
				setCollectionStates((current) => ({
					...current,
					[line]: {
						loaded: false,
						loading: false,
						error: error instanceof Error ? error.message : "Unable to load collection items."
					}
				}));
			} finally {
				delete collectionRequests.current[line];
			}
		})();
		collectionRequests.current[line] = request;
		return request;
	}, []);
	(0, import_react.useEffect)(() => {
		let active = true;
		fetch("/api/account/session").then((response) => {
			if (response.status === 401) return false;
			if (!response.ok) throw new Error(`Session check failed with status ${response.status}`);
			return response.json().then((result) => result.status === "authenticated");
		}).then((authenticated) => {
			if (active) setIsAuthenticated(authenticated);
		}).catch((error) => {
			console.error("Could not check account session", error);
			if (active) setIsAuthenticated(false);
		}).finally(() => {
			if (active) setIsAuthLoading(false);
		});
		return () => {
			active = false;
		};
	}, []);
	const requireSignIn = (0, import_react.useCallback)((action) => {
		pendingAction.current = action;
		const redirectTo = action.type === "buyNow" ? "/checkout" : `${location.pathname}${location.searchStr}${location.hash}`;
		navigate({
			to: "/account",
			search: { redirectTo }
		});
	}, [
		location.hash,
		location.pathname,
		location.searchStr,
		navigate
	]);
	const add = (0, import_react.useCallback)((id, quantity = 1) => {
		if (!isAuthenticated) {
			requireSignIn({
				type: "add",
				productId: id,
				quantity
			});
			return;
		}
		setCart((current) => ({
			...current,
			[id]: (current[id] ?? 0) + quantity
		}));
	}, [isAuthenticated, requireSignIn]);
	const toggleWish = (0, import_react.useCallback)((id) => {
		if (!isAuthenticated && !wishlist.includes(id)) {
			requireSignIn({
				type: "wishlist",
				productId: id
			});
			return;
		}
		setWishlist((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
	}, [
		isAuthenticated,
		requireSignIn,
		wishlist
	]);
	const buyNow = (0, import_react.useCallback)((id, quantity) => {
		if (!isAuthenticated) {
			requireSignIn({
				type: "buyNow",
				productId: id,
				quantity
			});
			return;
		}
		setCart({ [id]: quantity });
		navigate({ to: "/checkout" });
	}, [
		isAuthenticated,
		navigate,
		requireSignIn
	]);
	const completeSignIn = (0, import_react.useCallback)(() => {
		setIsAuthenticated(true);
		const action = pendingAction.current;
		pendingAction.current = null;
		if (action?.type === "add") setCart((current) => ({
			...current,
			[action.productId]: (current[action.productId] ?? 0) + action.quantity
		}));
		else if (action?.type === "wishlist") setWishlist((current) => current.includes(action.productId) ? current : [...current, action.productId]);
		else if (action?.type === "buyNow") setCart({ [action.productId]: action.quantity });
	}, []);
	const signOut = (0, import_react.useCallback)(async () => {
		const response = await fetch("/api/account/logout", { method: "POST" });
		const result = await response.json();
		if (!response.ok || result.status !== "signed_out") throw new Error(`Sign out failed with status ${response.status}`);
		setIsAuthenticated(false);
		setCart({});
		setWishlist([]);
		pendingAction.current = null;
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		cart,
		wishlist,
		catalogProducts: [...products, ...databaseProducts],
		collectionStates,
		loadCollection,
		isAuthenticated,
		isAuthLoading,
		add,
		buyNow,
		completeSignIn,
		signOut,
		remove: (id) => setCart((current) => {
			const next = { ...current };
			delete next[id];
			return next;
		}),
		setQty: (id, qty) => setCart((current) => qty < 1 ? Object.fromEntries(Object.entries(current).filter(([key]) => key !== id)) : {
			...current,
			[id]: qty
		}),
		toggleWish
	}), [
		cart,
		wishlist,
		databaseProducts,
		collectionStates,
		loadCollection,
		isAuthenticated,
		isAuthLoading,
		add,
		buyNow,
		completeSignIn,
		signOut,
		toggleWish
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommerceContext.Provider, {
		value,
		children
	});
}
function useCommerce() {
	const value = (0, import_react.useContext)(CommerceContext);
	if (!value) throw new Error("CommerceProvider missing");
	return value;
}
var megaNav = [
	{
		label: "Men",
		to: "/men",
		image: mega_men_default,
		imageAlt: "CIAO D MILANO menswear campaign",
		feature: "The Modern Milanese",
		copy: "Precise tailoring, fine knitwear and enduring leather.",
		columns: [{
			title: "Shop",
			links: [
				{
					label: "View All",
					to: "/men"
				},
				{
					label: "New Arrivals",
					to: "/new-arrivals"
				},
				{
					label: "Tailoring",
					to: "/men",
					category: "Tailoring"
				},
				{
					label: "Knitwear",
					to: "/men",
					category: "Knitwear"
				},
				{
					label: "Shorts",
					to: "/men",
					category: "Shorts"
				},
				{
					label: "T-Shirts",
					to: "/men",
					category: "T-Shirts"
				}
			]
		}, {
			title: "Discover",
			links: [
				{
					label: "The Nero Suit",
					productId: "nero-suit"
				},
				{
					label: "Fine Merino",
					productId: "merino-knit"
				},
				{
					label: "Brera Loafer",
					productId: "penny-loafer"
				}
			]
		}]
	},
	{
		label: "Women",
		to: "/women",
		image: mega_women_default,
		imageAlt: "CIAO D MILANO womenswear campaign",
		feature: "The Woman of Milan",
		copy: "Fluid silk, sculptural tailoring and considered essentials.",
		columns: [{
			title: "Shop",
			links: [
				{
					label: "View All",
					to: "/women"
				},
				{
					label: "New Arrivals",
					to: "/new-arrivals"
				},
				{
					label: "Outerwear",
					to: "/women",
					category: "Outerwear"
				},
				{
					label: "Evening",
					to: "/women",
					category: "Evening"
				}
			]
		}, {
			title: "Discover",
			links: [
				{
					label: "Silk Column Dress",
					productId: "silk-column-dress"
				},
				{
					label: "Atelier Blazer",
					productId: "atelier-blazer"
				},
				{
					label: "Milano Handbag",
					productId: "milan-handbag"
				}
			]
		}]
	},
	{
		label: "New Arrivals",
		to: "/new-arrivals",
		image: mega_newarrivels_default,
		imageAlt: "The latest CIAO D MILANO collection",
		feature: "The New Collection",
		copy: "A considered edit for the season ahead.",
		columns: [{
			title: "Explore",
			links: [
				{
					label: "View All New Arrivals",
					to: "/new-arrivals"
				},
				{
					label: "For Her",
					to: "/women"
				},
				{
					label: "For Him",
					to: "/men"
				},
				{
					label: "Accessories",
					to: "/accessories"
				}
			]
		}, {
			title: "Highlights",
			links: [
				{
					label: "Camel Wool Coat",
					productId: "camel-wool-coat"
				},
				{
					label: "Nero Wool Suit",
					productId: "nero-suit"
				},
				{
					label: "Como Silk Scarf",
					productId: "silk-twill-scarf"
				}
			]
		}]
	},
	{
		label: "Accessories",
		to: "/accessories",
		image: mega_accessories_default,
		imageAlt: "Italian leather accessories and silk",
		feature: "Finishing Touches",
		copy: "Objects of quiet distinction, made by specialist hands.",
		columns: [{
			title: "Shop",
			links: [
				{
					label: "View All",
					to: "/accessories"
				},
				{
					label: "Leather Goods",
					to: "/accessories",
					category: "Leather"
				},
				{
					label: "Silk",
					to: "/accessories",
					category: "Silk"
				},
				{
					label: "Cashmere",
					to: "/accessories",
					category: "Cashmere"
				}
			]
		}, {
			title: "Discover",
			links: [
				{
					label: "Como Silk Scarf",
					productId: "silk-twill-scarf"
				},
				{
					label: "Cintura Belt",
					productId: "calfskin-belt"
				},
				{
					label: "Porta Carte",
					productId: "leather-cardholder"
				}
			]
		}]
	},
	{
		label: "Collections",
		to: "/collections",
		image: mega_collection_default,
		imageAlt: "CIAO D MILANO seasonal collection in Milan",
		feature: "The House Edit",
		copy: "Stories of material, proportion and Italian craft.",
		columns: [{
			title: "Collections",
			links: [
				{
					label: "View All",
					to: "/collections"
				},
				{
					label: "New Arrivals",
					to: "/new-arrivals"
				},
				{
					label: "Women",
					to: "/women"
				},
				{
					label: "Men",
					to: "/men"
				}
			]
		}, {
			title: "The House",
			links: [
				{
					label: "Our Story",
					to: "/about",
					hash: "our-story"
				},
				{
					label: "The Art of Making",
					to: "/about",
					hash: "art-of-making"
				},
				{
					label: "Shipping & Delivery",
					to: "/shipping-delivery"
				}
			]
		}]
	}
];
function SiteHeader() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [openMenu, setOpenMenu] = (0, import_react.useState)(null);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const { cart, wishlist } = useCommerce();
	const location = useRouterState({ select: (state) => state.location });
	const pathname = location.pathname;
	const closeMenus = () => {
		setOpenMenu(null);
		setMobileOpen(false);
	};
	const count = Object.values(cart).reduce((a, b) => a + b, 0);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const closeOnEscape = (event) => {
			if (event.key === "Escape") setOpenMenu(null);
		};
		window.addEventListener("keydown", closeOnEscape);
		return () => window.removeEventListener("keydown", closeOnEscape);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpenMenu(null);
		setMobileOpen(false);
	}, [location.href]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		onBlur: (event) => {
			if (!event.currentTarget.contains(event.relatedTarget)) setOpenMenu(null);
		},
		onMouseLeave: () => setOpenMenu(null),
		className: `sticky top-0 z-50 bg-paper/95 backdrop-blur-md transition-colors duration-500 ${scrolled || openMenu ? "border-b border-border" : "border-b border-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid h-16 max-w-[1440px] grid-cols-[auto_minmax(0,1fr)_auto] items-center px-4 sm:px-6 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden h-full items-center gap-1 lg:flex",
					"aria-label": "Primary navigation",
					children: megaNav.map((item) => {
						const active = pathname === item.to;
						const expanded = openMenu === item.label;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							className: "nav-trigger h-full gap-1 px-2 text-[9px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								onMouseEnter: () => setOpenMenu(item.label),
								onFocus: () => setOpenMenu(item.label),
								onClick: closeMenus,
								onKeyDown: (event) => {
									if (event.key === "ArrowDown") {
										event.preventDefault();
										setOpenMenu(item.label);
										window.requestAnimationFrame(() => document.getElementById(`mega-${item.label.toLowerCase().replaceAll(" ", "-")}`)?.querySelector("a")?.focus());
									}
								},
								"aria-expanded": expanded,
								"aria-controls": `mega-${item.label.toLowerCase().replaceAll(" ", "-")}`,
								"data-active": active || expanded,
								children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `size-3 transition-transform duration-300 ${expanded ? "rotate-180" : ""}` })]
							})
						}, item.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
					open: mobileOpen,
					onOpenChange: setMobileOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "lg:hidden",
							"aria-label": "Open menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
						side: "left",
						className: "w-full max-w-none overflow-y-auto bg-paper p-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
								className: "sr-only",
								children: "Menu"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-b border-border px-6 py-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									className: "font-serif text-xl tracking-[0.12em]",
									children: "CIAO D MILANO"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
								className: "px-6 py-8",
								"aria-label": "Mobile navigation",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "divide-y divide-border",
									children: megaNav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
										className: "group py-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
											className: "flex cursor-pointer list-none items-center justify-between font-serif text-3xl",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 transition-transform duration-300 group-open:rotate-180" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-2 gap-6 pb-3 pt-5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: item.columns[0].links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MegaMenuLink, {
												link,
												className: "mb-3 block text-[10px] uppercase tracking-[0.16em] text-stone"
											}, link.label)) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: item.to,
												className: "block",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: item.image,
													alt: item.imageAlt,
													className: "aspect-[4/3] w-full object-cover"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mt-2 block font-serif text-lg",
													children: item.feature
												})]
											})]
										})]
									}, item.to))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/about",
									className: "mt-8 block text-[10px] uppercase tracking-[0.18em] text-stone",
									children: "About the House"
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "justify-self-center truncate font-serif text-lg tracking-[0.12em] sm:text-[22px]",
					children: "CIAO D MILANO"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex shrink-0 items-center gap-1 sm:gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconLink, {
							to: "/search",
							label: "Search",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconLink, {
							to: "/account",
							label: "Account",
							extra: "hidden sm:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(IconLink, {
							to: "/wishlist",
							label: `Wishlist ${wishlist.length}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden text-[10px] sm:inline",
								children: wishlist.length || ""
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(IconLink, {
							to: "/cart",
							label: `Bag ${count}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden text-[10px] sm:inline",
								children: count || ""
							})]
						})
					]
				})
			]
		}), megaNav.map((item) => {
			const expanded = openMenu === item.label;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: `mega-${item.label.toLowerCase().replaceAll(" ", "-")}`,
				"aria-hidden": !expanded,
				className: `absolute inset-x-0 top-full hidden overflow-hidden border-t border-border bg-paper shadow-xl transition-[opacity,transform,visibility] duration-300 lg:block ${expanded ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-[1440px] grid-cols-[1fr_1fr_1.35fr] gap-12 px-10 py-9",
					children: [item.columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-5 text-[9px] uppercase tracking-[0.2em] text-stone",
						children: column.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: column.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MegaMenuLink, {
							link,
							tabIndex: expanded ? 0 : -1,
							className: "mega-link font-serif text-xl"
						}) }, link.label))
					})] }, column.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: item.to,
						tabIndex: expanded ? 0 : -1,
						className: "group grid grid-cols-[1.05fr_1fr] bg-ink-deep text-paper",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.image,
							alt: item.imageAlt,
							width: 600,
							height: 420,
							className: "h-52 w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.02]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex flex-col justify-end p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[9px] uppercase tracking-[0.2em] text-sand",
									children: "Editorial Focus"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 font-serif text-2xl",
									children: item.feature
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 text-[11px] leading-5 text-paper/60",
									children: item.copy
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-4 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.18em]",
									children: ["Discover ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3" })]
								})
							]
						})]
					})]
				})
			}, item.to);
		})]
	});
}
function MegaMenuLink({ link, className, tabIndex }) {
	if ("productId" in link) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/product/$id",
		params: { id: link.productId },
		tabIndex,
		className,
		children: link.label
	});
	if ("category" in link) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: link.to,
		search: { category: link.category },
		hash: "collection-products",
		tabIndex,
		className,
		children: link.label
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: link.to,
		hash: link.hash ?? "",
		tabIndex,
		className,
		children: link.label
	});
}
function IconLink({ to, label, children, extra = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		"aria-label": label,
		title: label,
		className: `inline-flex h-9 min-w-9 items-center justify-center gap-1 text-ink transition-opacity hover:opacity-55 [&_svg]:size-[17px] ${extra}`,
		children
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-ink-deep text-paper/70",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1440px] px-6 py-16 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-10 md:grid-cols-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-2xl tracking-[0.1em] text-paper",
							children: "CIAO D MILANO"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-[26ch] text-xs text-paper/50",
							children: "Quiet Italian luxury, shaped by craft and time."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterList, {
						title: "Shop",
						links: [
							["Women", "/women"],
							["Men", "/men"],
							["Accessories", "/accessories"],
							["Collections", "/collections"]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterList, {
						title: "House",
						links: [
							["About Us", "/about"],
							["Contact Us", "/contact"],
							["Shipping & Delivery", "/shipping-delivery"]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterList, {
						title: "Customer Care",
						links: [
							["New Arrivals", "/new-arrivals"],
							["Account", "/account"],
							["Wishlist", "/wishlist"],
							["Shopping Bag", "/cart"]
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col gap-4 border-t border-paper/10 pt-6 text-[10px] uppercase tracking-[0.15em] text-paper/40 sm:flex-row sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 CIAO D MILANO" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Privacy · Terms & Conditions · Instagram · Pinterest" })]
			})]
		})
	});
}
function FooterList({ title, links }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-4 text-[10px] uppercase tracking-[0.2em] text-paper/40",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-2 text-xs",
		children: links.map(([label, to]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to,
			className: "transition-colors hover:text-paper",
			children: label
		}) }, to))
	})] });
}
var fittingSizes = [
	"XS",
	"S",
	"M",
	"L",
	"XL"
];
function FittingRoom({ product }) {
	const { add } = useCommerce();
	const [size, setSize] = (0, import_react.useState)("M");
	const [added, setAdded] = (0, import_react.useState)(false);
	const addFittedPiece = () => {
		add(product.id);
		setAdded(true);
		window.setTimeout(() => setAdded(false), 1600);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "icon",
			"aria-label": `View ${product.name} details in the fitting room`,
			title: "Fitting room",
			className: "absolute right-2 top-12 bg-paper/90 hover:bg-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shirt, {})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PopoverContent, {
		align: "end",
		side: "right",
		sideOffset: 10,
		collisionPadding: 12,
		className: "w-[min(92vw,360px)] rounded-none border-border bg-paper p-5 shadow-xl sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[9px] uppercase tracking-[0.2em] text-stone",
				children: "Private Fitting"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-2 font-serif text-2xl leading-tight",
				children: product.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-[10px] uppercase tracking-[0.16em] text-stone",
				children: product.category
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm",
				children: money(product.price)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs leading-6 text-stone",
				children: product.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 border-t border-border pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[9px] uppercase tracking-[0.16em] text-stone",
						children: "Select size"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[9px] uppercase tracking-[0.16em] text-stone",
						children: ["Selected · Size ", size]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 flex flex-wrap gap-1",
					"aria-label": "Choose fitting size",
					children: fittingSizes.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: size === option ? "default" : "outline",
						size: "icon",
						onClick: () => setSize(option),
						"aria-pressed": size === option,
						className: "h-8 w-8 text-[9px]",
						children: option
					}, option))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[9px] uppercase tracking-[0.16em] text-stone",
					children: "Free delivery · 30-day returns"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					onClick: addFittedPiece,
					className: "min-h-10 shrink-0 px-4",
					children: added ? "Added to Bag" : `Add Size ${size}`
				})]
			})
		]
	})] });
}
function ProductCard({ product, fittingRoom = false }) {
	const { add, toggleWish, wishlist } = useCommerce();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden bg-ivory",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/product/$id",
					params: { id: product.id },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.image,
						alt: product.name,
						loading: "lazy",
						width: 1024,
						height: 1280,
						className: "aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
					})
				}),
				product.label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute left-3 top-3 bg-paper/90 px-2 py-1 text-[9px] uppercase tracking-[0.14em]",
					children: product.label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					onClick: () => toggleWish(product.id),
					"aria-label": "Add to wishlist",
					className: "absolute right-2 top-2 bg-paper/80",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: wishlist.includes(product.id) ? "fill-current" : "" })
				}),
				fittingRoom && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FittingRoom, { product }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => add(product.id),
					className: "absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
					children: "Quick Add"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid grid-cols-[minmax(0,1fr)_auto] gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[9px] uppercase tracking-[0.14em] text-stone",
					children: product.category
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/product/$id",
					params: { id: product.id },
					className: "mt-1 block truncate font-serif text-lg",
					children: product.name
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm",
				children: money(product.price)
			})]
		})]
	});
}
function EditorialSlideshow({ slides, label, action, align = "center" }) {
	const [active, setActive] = (0, import_react.useState)(0);
	const [paused, setPaused] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (paused || slides.length < 2) return;
		const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 5500);
		return () => window.clearInterval(timer);
	}, [paused, slides.length]);
	const [firstSlide] = slides;
	if (!firstSlide) return null;
	const currentSlide = slides[active] ?? firstSlide;
	const changeSlide = (next) => {
		setPaused(true);
		setActive((next + slides.length) % slides.length);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate min-h-[430px] overflow-hidden bg-ink-deep text-paper sm:min-h-[510px] lg:min-h-[600px]",
		"aria-roledescription": "carousel",
		"aria-label": label,
		children: [
			slides.map((slide, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `absolute inset-0 transition-opacity duration-700 ${index === active ? "z-0 opacity-100" : "pointer-events-none opacity-0"}`,
				"aria-hidden": index !== active,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: slide.image,
					alt: index === active ? slide.alt : "",
					width: 1536,
					height: 1024,
					className: `h-full w-full object-cover transition-transform duration-[6000ms] ease-out ${index === active ? "scale-[1.025]" : "scale-100"}`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-ink-deep/30 via-ink-deep/35 to-ink-deep/70" })]
			}, slide.title)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `relative z-10 mx-auto flex min-h-[430px] max-w-[1440px] flex-col justify-center px-6 py-20 sm:min-h-[510px] lg:min-h-[600px] lg:px-10 ${align === "left" ? "items-start text-left" : "items-center text-center"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `editorial-rise flex max-w-3xl flex-col ${align === "left" ? "items-start" : "items-center"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[10px] uppercase tracking-[0.24em] text-paper/80",
							children: ["CIAO D MILANO · ", currentSlide.eyebrow]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-5 font-serif text-5xl leading-[.92] text-paper sm:text-7xl lg:text-8xl",
							children: currentSlide.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-6 h-px w-16 bg-sand" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-xs leading-6 text-paper/80 sm:text-sm",
							children: currentSlide.copy
						}),
						action
					]
				}, active)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-0 z-20 mx-auto flex max-w-[1440px] items-center justify-between px-4 pb-5 sm:px-6 sm:pb-7 lg:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					"aria-label": "Choose slide",
					children: slides.map((slide, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: () => changeSlide(index),
						"aria-label": `Show slide ${index + 1}: ${slide.title}`,
						"aria-current": index === active ? "true" : void 0,
						className: "h-8 w-8 text-paper hover:bg-paper/10 hover:text-paper",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block h-px transition-all duration-300 ${index === active ? "w-7 bg-paper" : "w-3 bg-paper/50"}` })
					}, slide.title))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							onClick: () => changeSlide(active - 1),
							"aria-label": "Previous slide",
							className: "text-paper hover:bg-paper/10 hover:text-paper",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							onClick: () => setPaused((value) => !value),
							"aria-label": paused ? "Play slideshow" : "Pause slideshow",
							className: "text-paper hover:bg-paper/10 hover:text-paper",
							children: paused ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							onClick: () => changeSlide(active + 1),
							"aria-label": "Next slide",
							className: "text-paper hover:bg-paper/10 hover:text-paper",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "sr-only",
				"aria-live": "polite",
				children: [
					"Slide ",
					active + 1,
					" of ",
					slides.length,
					": ",
					currentSlide.title
				]
			})
		]
	});
}
function CollectionGrid({ items = products, fittingRoom = false }) {
	const [sort, setSort] = (0, import_react.useState)("featured");
	const location = useRouterState({ select: (state) => state.location });
	const selectedCategory = "category" in location.search && typeof location.search.category === "string" ? location.search.category : "All";
	const [filter, setFilter] = (0, import_react.useState)(selectedCategory);
	(0, import_react.useEffect)(() => {
		setFilter(selectedCategory);
		if (location.hash !== "collection-products") return;
		const frame = window.requestAnimationFrame(() => document.getElementById("collection-products")?.scrollIntoView({ block: "start" }));
		return () => window.cancelAnimationFrame(frame);
	}, [
		selectedCategory,
		location.href,
		location.hash
	]);
	const categories = (0, import_react.useMemo)(() => ["All", ...Array.from(new Set(items.map((p) => p.category.split("·")[1]?.trim() ?? p.category)))], [items]);
	const sorted = [...filter === "All" ? items : items.filter((p) => (p.category.split("·")[1]?.trim() ?? p.category) === filter)].sort((a, b) => sort === "low" ? a.price - b.price : sort === "high" ? b.price - a.price : 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "collection-products",
		className: "mx-auto max-w-[1440px] scroll-mt-20 px-4 pb-24 sm:px-6 lg:px-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-10 border-y border-border py-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-x-8 gap-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-x-5 gap-y-2",
					"aria-label": "Filter by category",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[10px] uppercase tracking-[0.16em] text-stone",
							children: [sorted.length, " Pieces"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "h-3 w-px bg-border",
							"aria-hidden": "true"
						}),
						categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							type: "button",
							onClick: () => setFilter(category),
							"aria-pressed": filter === category,
							className: `h-auto p-0 text-[10px] uppercase tracking-[0.16em] transition-colors duration-300 hover:bg-transparent hover:text-ink ${filter === category ? "text-ink underline underline-offset-[6px]" : "text-stone hover:text-ink"}`,
							children: category
						}, category))
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-3 text-[10px] uppercase tracking-[0.16em]",
					children: [
						"Sort",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: sort,
							onChange: (e) => setSort(e.target.value),
							className: "bg-transparent text-right outline-none",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "featured",
									children: "Featured"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "low",
									children: "Price: Low"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "high",
									children: "Price: High"
								})
							]
						})
					]
				})]
			})
		}), sorted.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "py-16 text-center text-sm text-stone",
			children: "No pieces in this category yet."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-x-3 gap-y-12 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4",
			children: sorted.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
				product,
				fittingRoom
			}, product.id))
		})]
	});
}
function DatabaseCollectionGrid({ line, fittingRoom = false }) {
	const { catalogProducts, collectionStates, loadCollection } = useCommerce();
	const state = collectionStates[line];
	const items = catalogProducts.filter((product) => product.id.startsWith(`${line}:`));
	(0, import_react.useEffect)(() => {
		loadCollection(line);
	}, [line, loadCollection]);
	if (state.loading || !state.loaded && !state.error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-[1440px] px-4 pb-24 sm:px-6 lg:px-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-y border-border py-10 text-center text-sm text-stone",
			role: "status",
			children: "Loading collection…"
		})
	});
	if (state.error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-[1440px] px-4 pb-24 sm:px-6 lg:px-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-y border-border py-10 text-center text-sm text-stone",
			role: "alert",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: state.error }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				className: "mt-4",
				onClick: () => void loadCollection(line),
				children: "Try again"
			})]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionGrid, {
		items,
		fittingRoom
	});
}
function DatabaseSelectionGrid({ collections, fittingRoom = false, showFilters = false, mixCollections = false }) {
	const { catalogProducts, collectionStates, loadCollection } = useCommerce();
	(0, import_react.useEffect)(() => {
		Promise.all(collections.map(({ line }) => loadCollection(line)));
	}, [collections, loadCollection]);
	const failedCollections = collections.filter(({ line }) => collectionStates[line].error);
	if (failedCollections.length > 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-y border-border py-10 text-center text-sm text-stone",
		role: "alert",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: failedCollections.map(({ line }) => collectionStates[line].error).join(" ") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "outline",
			className: "mt-4",
			onClick: () => {
				Promise.all(failedCollections.map(({ line }) => loadCollection(line)));
			},
			children: "Try again"
		})]
	});
	if (collections.some(({ line }) => !collectionStates[line].loaded)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-y border-border py-10 text-center text-sm text-stone",
		role: "status",
		children: "Loading collection…"
	});
	const collectionItems = collections.map(({ line, limit }) => catalogProducts.filter((product) => product.id.startsWith(`${line}:`)).slice(0, limit));
	const items = mixCollections ? Array.from({ length: Math.max(...collectionItems.map((items) => items.length)) }, (_, index) => collectionItems.flatMap((items) => items[index] ? [items[index]] : [])).flat() : collectionItems.flat();
	if (showFilters) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionGrid, {
		items,
		fittingRoom
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-4 md:gap-6",
		children: items.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
			product,
			fittingRoom
		}, product.id))
	});
}
function EmptyState({ title, copy, to = "/new-arrivals" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto flex min-h-[60vh] max-w-[1440px] flex-col items-center justify-center px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-5xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-md text-sm text-stone",
				children: copy
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				size: "lg",
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to,
					children: "Continue Shopping"
				})
			})
		]
	});
}
//#endregion
export { EditorialSlideshow as a, SiteFooter as c, DatabaseSelectionGrid as i, SiteHeader as l, CommerceProvider as n, EmptyState as o, DatabaseCollectionGrid as r, ProductCard as s, CollectionGrid as t, useCommerce as u };
