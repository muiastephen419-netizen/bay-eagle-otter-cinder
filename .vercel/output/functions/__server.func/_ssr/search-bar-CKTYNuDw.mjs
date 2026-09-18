import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, v as Link, x as require_jsx_runtime, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as HOME_TYPES } from "./properties-DNBxAiOJ.mjs";
import { r as Search } from "../_libs/lucide-react.mjs";
import { a as cn, s as formatPrice } from "./router-cIk1UqsJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-bar-CKTYNuDw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PropertyCard({ property, cta = "View home" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex h-full flex-col overflow-hidden rounded-xl bg-frost shadow-border transition-[box-shadow,transform] duration-200 ease-out hover:shadow-lift",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/listings/$slug",
			params: { slug: property.slug },
			className: "relative block aspect-4/3 overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: property.image,
				alt: property.name,
				className: "size-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col px-5 pt-5 pb-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-forest uppercase",
					children: property.location
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 font-display text-lg font-semibold text-ink",
					children: property.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 flex-1 text-sm leading-relaxed text-ink-muted",
					children: property.blurb
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-base font-semibold text-ink",
						children: formatPrice(property.price)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/listings/$slug",
						params: { slug: property.slug },
						className: "inline-flex h-10 items-center rounded-pill bg-forest px-4 text-sm font-semibold text-frost transition-[background-color,transform] duration-150 hover:bg-forest-deep active:scale-[0.96]",
						children: cta
					})]
				})
			]
		})]
	});
}
function SearchBar({ className, initialLocation = "", initialType = "" }) {
	const navigate = useNavigate();
	const [location, setLocation] = (0, import_react.useState)(initialLocation);
	const [type, setType] = (0, import_react.useState)(initialType);
	function onSubmit(event) {
		event.preventDefault();
		navigate({
			to: "/listings",
			search: {
				location: location.trim() || void 0,
				type: type || void 0
			}
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: cn("flex items-center gap-2 rounded-pill bg-sage-soft/90 p-1.5 shadow-lift backdrop-blur-sm sm:p-2", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-11 min-w-0 flex-1 items-center rounded-pill bg-frost px-3 sm:min-h-12 sm:px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "sr-only",
					htmlFor: "search-location",
					children: "Location"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "search-location",
					value: location,
					onChange: (e) => setLocation(e.target.value),
					placeholder: "Region or town",
					className: "h-11 min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ink-muted sm:h-12"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-2 hidden h-6 w-px bg-cream-deep sm:block" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "sr-only",
					htmlFor: "search-type",
					children: "Home type"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					id: "search-type",
					value: type,
					onChange: (e) => setType(e.target.value),
					className: "hidden h-12 max-w-40 bg-transparent text-sm text-ink outline-none sm:block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "Any home type"
					}), HOME_TYPES.map((homeType) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: homeType,
						children: homeType
					}, homeType))]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "submit",
			className: "inline-flex size-11 shrink-0 items-center justify-center gap-2 rounded-pill bg-forest text-sm font-semibold text-frost transition-[background-color,transform] duration-150 ease-out hover:bg-forest-deep active:scale-[0.96] sm:h-12 sm:w-auto sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
				className: "size-4",
				strokeWidth: 2.25
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden sm:inline",
				children: "Search"
			})]
		})]
	});
}
//#endregion
export { SearchBar as n, PropertyCard as t };
