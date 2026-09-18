import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { HOME_TYPES } from "@/data/properties";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const inquiry = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      region: String(data.get("region") ?? ""),
      type: String(data.get("type") ?? ""),
      note: String(data.get("note") ?? ""),
      at: new Date().toISOString(),
    };
    const existing = JSON.parse(localStorage.getItem("grovewell-inquiries") ?? "[]") as unknown[];
    localStorage.setItem("grovewell-inquiries", JSON.stringify([inquiry, ...existing].slice(0, 20)));
    setSent(true);
  }

  return (
    <main className="rounded-xl bg-cream px-5 py-10 sm:px-10 sm:py-14">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold tracking-widest text-forest uppercase">Get started</p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-ink">
            Write as if we already share a porch.
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-muted">
            Tell us the weather you want to live in. We will answer with a short list — or an honest no, if the book has nothing that fits.
          </p>
          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="font-semibold text-ink">Atelier</dt>
              <dd className="mt-1 text-ink-muted">
                412 SE Division Street
                <br />
                Portland, Oregon 97202
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Hours</dt>
              <dd className="mt-1 text-ink-muted">Tuesday–Friday, 10–4, by appointment</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Desk</dt>
              <dd className="mt-1 text-ink-muted">
                <a className="underline decoration-sage underline-offset-4" href="mailto:hello@grovewell.homes">
                  hello@grovewell.homes
                </a>
                <br />
                503-555-0142
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-lg bg-frost p-6 shadow-border sm:p-8">
          {sent ? (
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">We have the note.</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Expect a reply from the desk within two working days. If you asked after a specific home, we will include the file.
              </p>
            </div>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={onSubmit}>
              <Field name="name" label="Name" required />
              <Field name="email" label="Email" type="email" required />
              <Field name="phone" label="Phone" type="tel" />
              <Field name="region" label="Region in mind" placeholder="Cascades, Gorge, coast…" />
              <label className="block">
                <span className="text-xs font-semibold tracking-wide text-ink-muted uppercase">
                  Home type
                </span>
                <select
                  name="type"
                  className="mt-1 h-11 w-full rounded-md bg-cream px-3 text-sm text-ink outline-none focus:ring-2 focus:ring-forest"
                >
                  <option value="">No preference yet</option>
                  {HOME_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-xs font-semibold tracking-wide text-ink-muted uppercase">
                  How you want to live
                </span>
                <textarea
                  name="note"
                  required
                  rows={5}
                  className="mt-1 w-full rounded-md bg-cream px-3 py-2.5 text-sm text-ink outline-none focus:ring-2 focus:ring-forest"
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex h-12 items-center justify-center rounded-pill bg-forest text-sm font-semibold text-frost transition-[background-color,transform] duration-150 hover:bg-forest-deep active:scale-[0.96]"
              >
                Send to the desk
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold tracking-wide text-ink-muted uppercase">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1 h-11 w-full rounded-md bg-cream px-3 text-sm text-ink outline-none placeholder:text-ink-muted focus:ring-2 focus:ring-forest"
      />
    </label>
  );
}
