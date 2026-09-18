import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as properties, i as getProperty } from "./properties-DNBxAiOJ.mjs";
import { a as Maximize, c as LandPlot, f as BedDouble, m as ArrowLeft, p as Bath } from "../_libs/lucide-react.mjs";
import { n as Route, o as formatNumber, s as formatPrice } from "./router-cIk1UqsJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/listings._slug-BUtX4Hyw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PropertyPage() {
	const { slug } = Route.useParams();
	const property = getProperty(slug);
	if (!property) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "rounded-xl bg-cream px-5 py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-semibold text-ink",
				children: "Home not in the book"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-ink-muted",
				children: "That listing has been withdrawn, or the link is incomplete."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/listings",
				className: "mt-6 inline-flex h-11 items-center rounded-pill bg-forest px-5 text-sm font-semibold text-frost",
				children: "Back to listings"
			})
		]
	});
	const others = properties.filter((item) => item.slug !== property.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "rounded-xl bg-cream px-5 py-8 sm:px-10 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/listings",
				className: "inline-flex h-10 items-center gap-2 text-sm font-semibold text-forest",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "All listings"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {
				images: property.gallery,
				name: property.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-10 lg:grid-cols-[1.4fr_0.8fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-semibold tracking-widest text-forest uppercase",
						children: [
							property.region,
							" · ",
							property.type
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl font-semibold text-ink",
						children: property.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-lg text-ink-muted",
						children: property.location
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-3xl font-display font-semibold text-ink",
						children: formatPrice(property.price)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								icon: BedDouble,
								label: "Beds",
								value: String(property.beds)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								icon: Bath,
								label: "Baths",
								value: String(property.baths)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								icon: Maximize,
								label: "Square feet",
								value: formatNumber(property.sqft)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								icon: LandPlot,
								label: "Acres",
								value: String(property.acres)
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-base leading-relaxed text-ink",
						children: property.story
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-10 font-display text-xl font-semibold text-ink",
						children: "On the land"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-2 sm:grid-cols-2",
						children: property.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-md bg-frost px-4 py-3 text-sm text-ink shadow-border",
							children: feature
						}, feature))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquiryCard, { home: property.name })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-14 font-display text-2xl font-semibold text-ink",
				children: "Also in the book"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-4 sm:grid-cols-3",
				children: others.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/listings/$slug",
					params: { slug: item.slug },
					className: "overflow-hidden rounded-lg bg-frost shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.image,
						alt: item.name,
						className: "aspect-16/10 w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm font-semibold text-ink",
							children: item.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-ink-muted",
							children: formatPrice(item.price)
						})]
					})]
				}, item.slug))
			})
		]
	});
}
function Gallery({ images, name }) {
	const [active, setActive] = (0, import_react.useState)(0);
	const current = images[active] ?? images[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden rounded-lg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: current,
				alt: name,
				className: "aspect-16/9 w-full object-cover"
			})
		}), images.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 grid grid-cols-3 gap-3",
			children: images.map((image, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setActive(index),
				className: index === active ? "overflow-hidden rounded-md ring-2 ring-forest" : "overflow-hidden rounded-md opacity-80 hover:opacity-100",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image,
					alt: "",
					className: "aspect-16/10 w-full object-cover"
				})
			}, image + index))
		}) : null]
	});
}
function Stat({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md bg-frost px-3 py-3 shadow-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 text-forest" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-display text-lg font-semibold text-ink",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-ink-muted",
				children: label
			})
		]
	});
}
function InquiryCard({ home }) {
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(event) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const inquiry = {
			home,
			name: String(data.get("name") ?? ""),
			email: String(data.get("email") ?? ""),
			note: String(data.get("note") ?? ""),
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		const existing = JSON.parse(localStorage.getItem("grovewell-inquiries") ?? "[]");
		localStorage.setItem("grovewell-inquiries", JSON.stringify([inquiry, ...existing].slice(0, 20)));
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "h-fit rounded-lg bg-frost p-6 shadow-border lg:sticky lg:top-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-semibold text-ink",
				children: "Request a walkthrough"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-ink-muted",
				children: "We arrange private visits — never a crowd, never a Sunday open house."
			}),
			sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 rounded-md bg-sage-mist px-4 py-4 text-sm leading-relaxed text-ink",
				children: [
					"Thank you. A Grovewell associate will write within two working days about ",
					home,
					"."
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-5 flex flex-col gap-3",
				onSubmit,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "name",
						label: "Name",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "email",
						label: "Email",
						type: "email",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold tracking-wide text-ink-muted uppercase",
							children: "Note"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "note",
							rows: 4,
							placeholder: "Timing, household, questions about the land…",
							className: "mt-1 w-full rounded-md bg-cream px-3 py-2.5 text-sm text-ink outline-none ring-forest/0 transition-[box-shadow] duration-150 focus:ring-2 focus:ring-forest"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "mt-1 inline-flex h-11 items-center justify-center rounded-pill bg-forest text-sm font-semibold text-frost transition-[background-color,transform] duration-150 hover:bg-forest-deep active:scale-[0.96]",
						children: "Send inquiry"
					})
				]
			})
		]
	});
}
function Field({ name, label, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-semibold tracking-wide text-ink-muted uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			type,
			required,
			className: "mt-1 h-11 w-full rounded-md bg-cream px-3 text-sm text-ink outline-none ring-forest/0 transition-[box-shadow] duration-150 focus:ring-2 focus:ring-forest"
		})]
	});
}
//#endregion
export { PropertyPage as component };
