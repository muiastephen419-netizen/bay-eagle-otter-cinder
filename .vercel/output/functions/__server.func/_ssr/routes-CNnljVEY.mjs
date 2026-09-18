import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as properties, t as COLLECTIONS } from "./properties-DNBxAiOJ.mjs";
import { d as ChevronLeft, o as MapPin, s as Leaf, u as ChevronRight } from "../_libs/lucide-react.mjs";
import { a as cn, i as LeafMark } from "./router-cIk1UqsJ.mjs";
import { n as SearchBar, t as PropertyCard } from "./search-bar-CKTYNuDw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CNnljVEY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var VALUES = [
	{
		title: "Certified green builds",
		body: "We only represent homes with a documented envelope, a clean energy plan, and materials you can name."
	},
	{
		title: "Land left better",
		body: "Every listing includes a habitat note — what was restored, what stays wild, and what a new steward inherits."
	},
	{
		title: "Makers, not catalogs",
		body: "Timber framers, plasterers, and millworkers we have worked with for a decade. The house should outlast the trend."
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Welcome, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Featured, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Values, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cta, {})
	] });
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden rounded-hero",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/homes/hero.jpg",
				alt: "Cedar eco-home in a sunlit forest meadow",
				className: "aspect-4/5 w-full object-cover sm:aspect-16/10 lg:aspect-16/8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/35 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 flex flex-col justify-end p-6 pb-24 sm:justify-center sm:p-10 sm:pb-28 lg:p-14 lg:pb-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex w-fit items-center gap-2 rounded-pill bg-frost/15 px-3 py-1.5 text-xs font-semibold text-frost backdrop-blur-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-6 place-items-center rounded-full bg-frost/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeafMark, { className: "size-3.5" })
						}), "Private forest homes"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-lg font-display text-4xl font-semibold text-frost sm:text-5xl lg:text-6xl",
						children: "Find eco-friendly homes easily"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-sm leading-relaxed text-cream sm:text-base",
						children: "Timber lodges, living roofs, and quiet acres — listed only when they treat the land as a neighbor, not a backdrop."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/listings",
						className: "mt-6 inline-flex h-11 w-fit items-center rounded-pill bg-forest px-5 text-sm font-semibold text-frost transition-[background-color,transform] duration-150 hover:bg-forest-deep active:scale-[0.96]",
						children: "Begin search"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-x-0 -bottom-7 z-10 px-3 sm:-bottom-8 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-auto mx-auto max-w-3xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {})
				})
			})
		]
	});
}
function Welcome() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mt-16 rounded-xl bg-cream px-5 py-12 sm:mt-20 sm:px-10 sm:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-lg bg-frost p-3 shadow-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/homes/fernwalk.jpg",
							alt: "Fernwalk Cabin, an A-frame timber home in the trees",
							className: "aspect-4/3 w-full rounded-md object-cover"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -top-4 -left-3 grid size-16 place-items-center rounded-full bg-forest text-frost shadow-lift sm:size-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 text-[0.6rem] font-semibold tracking-wide uppercase",
								children: "Featured"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -right-2 -bottom-3 grid size-11 place-items-center rounded-full bg-sage-soft text-forest shadow-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeafMark, { className: "size-5" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-semibold text-ink sm:text-4xl",
					children: "Welcome to Grovewell"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-base leading-relaxed text-ink-muted",
					children: "We are a Portland atelier that represents a handful of forest, gorge, and coastal homes each year. No open houses with balloons. No seven-photo listings shot on a phone. If a house cannot explain how it heats, sheds water, and treats its acreage, it does not make the book."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/about",
						className: "inline-flex h-11 items-center gap-2 rounded-pill bg-forest pr-4 pl-3.5 text-sm font-semibold text-frost transition-[background-color,transform] duration-150 hover:bg-forest-deep active:scale-[0.96]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }), "Our story"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/residences",
						className: "text-sm font-semibold text-forest underline decoration-sage-soft underline-offset-4",
						children: "See the residences"
					})]
				})
			] })]
		})
	});
}
function Featured() {
	const [page, setPage] = (0, import_react.useState)(0);
	const pages = [properties.slice(0, 3), properties.slice(3, 6)];
	const current = pages[page] ?? pages[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-4 rounded-xl bg-sage-mist px-5 py-12 sm:px-10 sm:py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-center font-display text-3xl font-semibold text-ink sm:text-4xl",
			children: "Homes living lightly"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mt-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: current.map((property) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyCard, { property }, property.slug))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex items-center justify-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Previous homes",
						onClick: () => setPage((p) => p === 0 ? pages.length - 1 : p - 1),
						className: "grid size-10 place-items-center rounded-full text-forest transition-colors duration-150 hover:bg-frost",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
					}),
					pages.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": `Show homes set ${index + 1}`,
						onClick: () => setPage(index),
						className: cn("size-2.5 rounded-full transition-colors duration-150", index === page ? "bg-forest" : "bg-sage")
					}, index)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Next homes",
						onClick: () => setPage((p) => (p + 1) % pages.length),
						className: "grid size-10 place-items-center rounded-full text-forest transition-colors duration-150 hover:bg-frost",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
					})
				]
			})]
		})]
	});
}
function Values() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-cream px-5 py-12 sm:px-10 sm:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-xs font-semibold tracking-widest text-forest uppercase",
				children: "Why Grovewell"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-center font-display text-3xl font-semibold text-ink",
				children: "A shorter list. A longer stay."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 md:grid-cols-3",
				children: VALUES.map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-lg bg-frost px-6 py-7 shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-semibold text-ink",
						children: value.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-ink-muted",
						children: value.body
					})]
				}, value.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 sm:grid-cols-3",
				children: COLLECTIONS.map((collection) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/residences",
					hash: collection.id,
					className: "group overflow-hidden rounded-lg bg-frost shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-16/10 overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: collection.image,
							alt: collection.title,
							className: "size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-5 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-semibold text-ink",
							children: collection.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-ink-muted",
							children: collection.blurb
						})]
					})]
				}, collection.id))
			})
		]
	});
}
function Cta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mt-4 overflow-hidden rounded-xl bg-forest",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-6 py-12 sm:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold text-frost",
						children: "Tell us how you want to live."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-sm leading-relaxed text-sage-soft",
						children: "A short note is enough — region, how many of you, and whether you need a studio, a guest wing, or simply a porch that faces weather. We reply within two working days."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "mt-6 inline-flex h-11 items-center rounded-pill bg-frost px-5 text-sm font-semibold text-forest transition-transform duration-150 active:scale-[0.96]",
						children: "Get started"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/homes/interior.jpg",
				alt: "Sunlit timber living room looking into the forest",
				className: "hidden h-full min-h-64 object-cover md:block"
			})]
		})
	});
}
//#endregion
export { Home as component };
