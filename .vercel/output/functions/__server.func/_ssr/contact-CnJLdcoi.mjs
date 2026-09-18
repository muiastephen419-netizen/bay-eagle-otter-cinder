import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as HOME_TYPES } from "./properties-DNBxAiOJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CnJLdcoi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(event) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const inquiry = {
			name: String(data.get("name") ?? ""),
			email: String(data.get("email") ?? ""),
			phone: String(data.get("phone") ?? ""),
			region: String(data.get("region") ?? ""),
			type: String(data.get("type") ?? ""),
			note: String(data.get("note") ?? ""),
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		const existing = JSON.parse(localStorage.getItem("grovewell-inquiries") ?? "[]");
		localStorage.setItem("grovewell-inquiries", JSON.stringify([inquiry, ...existing].slice(0, 20)));
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "rounded-xl bg-cream px-5 py-10 sm:px-10 sm:py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-widest text-forest uppercase",
					children: "Get started"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl font-semibold text-ink",
					children: "Write as if we already share a porch."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-base leading-relaxed text-ink-muted",
					children: "Tell us the weather you want to live in. We will answer with a short list — or an honest no, if the book has nothing that fits."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-10 space-y-5 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-semibold text-ink",
							children: "Atelier"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
							className: "mt-1 text-ink-muted",
							children: [
								"412 SE Division Street",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Portland, Oregon 97202"
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-semibold text-ink",
							children: "Hours"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-ink-muted",
							children: "Tuesday–Friday, 10–4, by appointment"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-semibold text-ink",
							children: "Desk"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
							className: "mt-1 text-ink-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "underline decoration-sage underline-offset-4",
									href: "mailto:hello@grovewell.homes",
									children: "hello@grovewell.homes"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"503-555-0142"
							]
						})] })
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-lg bg-frost p-6 shadow-border sm:p-8",
				children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold text-ink",
					children: "We have the note."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-ink-muted",
					children: "Expect a reply from the desk within two working days. If you asked after a specific home, we will include the file."
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "flex flex-col gap-4",
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "phone",
							label: "Phone",
							type: "tel"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "region",
							label: "Region in mind",
							placeholder: "Cascades, Gorge, coast…"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold tracking-wide text-ink-muted uppercase",
								children: "Home type"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								name: "type",
								className: "mt-1 h-11 w-full rounded-md bg-cream px-3 text-sm text-ink outline-none focus:ring-2 focus:ring-forest",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "No preference yet"
								}), HOME_TYPES.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: type,
									children: type
								}, type))]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold tracking-wide text-ink-muted uppercase",
								children: "How you want to live"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "note",
								required: true,
								rows: 5,
								className: "mt-1 w-full rounded-md bg-cream px-3 py-2.5 text-sm text-ink outline-none focus:ring-2 focus:ring-forest"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "mt-2 inline-flex h-12 items-center justify-center rounded-pill bg-forest text-sm font-semibold text-frost transition-[background-color,transform] duration-150 hover:bg-forest-deep active:scale-[0.96]",
							children: "Send to the desk"
						})
					]
				})
			})]
		})
	});
}
function Field({ name, label, type = "text", required, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-semibold tracking-wide text-ink-muted uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			type,
			required,
			placeholder,
			className: "mt-1 h-11 w-full rounded-md bg-cream px-3 text-sm text-ink outline-none placeholder:text-ink-muted focus:ring-2 focus:ring-forest"
		})]
	});
}
//#endregion
export { ContactPage as component };
