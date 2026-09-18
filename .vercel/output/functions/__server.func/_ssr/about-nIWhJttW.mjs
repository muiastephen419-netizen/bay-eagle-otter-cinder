import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-nIWhJttW.js
var import_jsx_runtime = require_jsx_runtime();
var PEOPLE = [
	{
		initials: "ME",
		name: "Mara Ellison",
		role: "Principal, Portland"
	},
	{
		initials: "JR",
		name: "Jonah Reed",
		role: "Forest & gorge listings"
	},
	{
		initials: "PS",
		name: "Priya Shah",
		role: "Coastal and valley homes"
	}
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "overflow-hidden rounded-xl bg-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/homes/forest.jpg",
					alt: "A misty forest path at dawn",
					className: "h-64 w-full object-cover sm:h-80"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-cream via-cream/20 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 bottom-0 px-5 pb-2 sm:px-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-forest uppercase",
						children: "Since 2014"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 font-display text-4xl font-semibold text-ink sm:text-5xl",
						children: "Houses, then land, then people."
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-5 py-10 sm:px-10 sm:py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xl space-y-4 text-base leading-relaxed text-ink-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Grovewell began as a side desk in a timber-frame shop on SE Division. Builders kept asking who would sell the houses they were proud of without dressing them up as ski chalets. The answer, it turned out, was us." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We still keep a short book. Six to twelve homes a year. Each one has a file on energy, water, and what was planted or protected. Clients who want a faster market — more photos, more open houses, more noise — are kindly sent elsewhere." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The atelier remains in Portland. The houses are wherever the land still has a say: the Cascades, the Gorge, the San Juans, the North Coast, the Hudson." })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "grid grid-cols-2 gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								value: "12",
								label: "Homes represented a year, at most"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								value: "47",
								label: "Acres under conservation easement"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								value: "2014",
								label: "Year the atelier opened"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								value: "2",
								label: "Working days to a first reply"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-14 font-display text-2xl font-semibold text-ink",
					children: "The desk"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 grid gap-4 sm:grid-cols-3",
					children: PEOPLE.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-4 rounded-lg bg-frost p-4 shadow-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-12 place-items-center rounded-full bg-forest font-display text-sm font-semibold text-frost",
							children: person.initials
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display font-semibold text-ink",
							children: person.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-ink-muted",
							children: person.role
						})] })]
					}, person.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 overflow-hidden rounded-lg bg-forest",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-6 py-10 sm:px-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl font-semibold text-frost",
									children: "Visit the atelier"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-sage-soft",
									children: "412 SE Division Street, Portland. Tuesdays through Fridays, by appointment. Bring a topographic map if you have one; we like those more than mood boards."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "mt-6 inline-flex h-11 items-center rounded-pill bg-frost px-5 text-sm font-semibold text-forest",
									children: "Write to us"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/homes/hero.jpg",
							alt: "Grovewell-listed timber home at sunrise",
							className: "hidden h-full object-cover md:block"
						})]
					})
				})
			]
		})]
	});
}
function Stat({ value, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-frost px-5 py-6 shadow-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-3xl font-semibold text-forest",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-ink-muted",
			children: label
		})]
	});
}
//#endregion
export { AboutPage as component };
