import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as HOME_TYPES, r as filterProperties, t as COLLECTIONS } from "./properties-DNBxAiOJ.mjs";
import { r as Route$1 } from "./router-cIk1UqsJ.mjs";
import { n as SearchBar, t as PropertyCard } from "./search-bar-CKTYNuDw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/listings.index-g4UfzL3e.js
var import_jsx_runtime = require_jsx_runtime();
function ListingsPage() {
	const search = Route$1.useSearch();
	const results = filterProperties(search);
	const collectionLabel = COLLECTIONS.find((c) => c.id === search.collection)?.title;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "rounded-xl bg-cream px-5 py-10 sm:px-10 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-widest text-forest uppercase",
				children: "The book"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold text-ink",
				children: "Current listings"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-base text-ink-muted",
				children: "Six homes we are prepared to stand behind. Filter by region or type — or wander the whole list."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 max-w-3xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
					initialLocation: search.location ?? "",
					initialType: search.type ?? ""
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						to: "/listings",
						active: !search.collection && !search.type,
						children: "All homes"
					}),
					HOME_TYPES.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						to: "/listings",
						search: {
							...search,
							type: search.type === type ? void 0 : type
						},
						active: search.type === type,
						children: type
					}, type)),
					COLLECTIONS.map((collection) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						to: "/listings",
						search: {
							...search,
							collection: search.collection === collection.id ? void 0 : collection.id
						},
						active: search.collection === collection.id,
						children: collection.title.replace(" Homes", "")
					}, collection.id))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 text-sm text-ink-muted",
				children: [
					results.length,
					" ",
					results.length === 1 ? "home" : "homes",
					search.location ? ` near “${search.location}”` : "",
					search.type ? ` · ${search.type}` : "",
					collectionLabel ? ` · ${collectionLabel}` : ""
				]
			}),
			results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 rounded-lg bg-frost px-6 py-10 text-center text-ink-muted shadow-border",
				children: "Nothing in the book matches that search. Try a broader region, or clear the filters."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: results.map((property) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyCard, { property }, property.slug))
			})
		]
	});
}
function FilterChip({ children, active, to, search }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		search,
		className: active ? "inline-flex h-9 items-center rounded-pill bg-forest px-3.5 text-sm font-semibold text-frost" : "inline-flex h-9 items-center rounded-pill bg-frost px-3.5 text-sm font-medium text-ink shadow-border transition-colors duration-150 hover:bg-sage-mist",
		children
	});
}
//#endregion
export { ListingsPage as component };
