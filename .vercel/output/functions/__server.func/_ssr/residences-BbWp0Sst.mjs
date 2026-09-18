import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as properties, t as COLLECTIONS } from "./properties-DNBxAiOJ.mjs";
import { s as formatPrice } from "./router-cIk1UqsJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/residences-BbWp0Sst.js
var import_jsx_runtime = require_jsx_runtime();
function ResidencesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "rounded-xl bg-cream px-5 py-10 sm:px-10 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-widest text-forest uppercase",
				children: "Residences"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 max-w-2xl font-display text-4xl font-semibold text-ink",
				children: "Three ways a house can belong to its acreage."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-base text-ink-muted",
				children: "We do not sort homes by bedroom count first. We sort them by how they live with weather, water, and the trees that were there before the foundation."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 space-y-16",
				children: COLLECTIONS.map((collection) => {
					const homes = properties.filter((item) => item.collection === collection.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: collection.id,
						className: "scroll-mt-28",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid items-center gap-8 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: collection.image,
								alt: collection.title,
								className: "aspect-16/10 w-full rounded-lg object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-3xl font-semibold text-ink",
									children: collection.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-base leading-relaxed text-ink-muted",
									children: collection.blurb
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/listings",
									search: { collection: collection.id },
									className: "mt-6 inline-flex h-11 items-center rounded-pill bg-forest px-5 text-sm font-semibold text-frost transition-[background-color,transform] duration-150 hover:bg-forest-deep active:scale-[0.96]",
									children: "View these homes"
								})
							] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 grid gap-4 sm:grid-cols-2",
							children: homes.map((home) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/listings/$slug",
								params: { slug: home.slug },
								className: "flex gap-4 rounded-lg bg-frost p-3 shadow-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: home.image,
									alt: "",
									className: "size-24 shrink-0 rounded-md object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex flex-col justify-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display font-semibold text-ink",
											children: home.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-ink-muted",
											children: home.location
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 text-sm font-semibold text-forest",
											children: formatPrice(home.price)
										})
									]
								})]
							}) }, home.slug))
						})]
					}, collection.id);
				})
			})
		]
	});
}
//#endregion
export { ResidencesPage as component };
