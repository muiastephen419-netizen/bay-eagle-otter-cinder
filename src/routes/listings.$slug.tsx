import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Bath, BedDouble, LandPlot, Maximize } from "lucide-react";
import { getProperty, properties } from "@/data/properties";
import { formatNumber, formatPrice } from "@/lib/utils";

export const Route = createFileRoute("/listings/$slug")({
  component: PropertyPage,
});

function PropertyPage() {
  const { slug } = Route.useParams();
  const property = getProperty(slug);

  if (!property) {
    return (
      <main className="rounded-xl bg-cream px-5 py-16 text-center">
        <h1 className="font-display text-3xl font-semibold text-ink">Home not in the book</h1>
        <p className="mt-3 text-ink-muted">That listing has been withdrawn, or the link is incomplete.</p>
        <Link
          to="/listings"
          className="mt-6 inline-flex h-11 items-center rounded-pill bg-forest px-5 text-sm font-semibold text-frost"
        >
          Back to listings
        </Link>
      </main>
    );
  }

  const others = properties.filter((item) => item.slug !== property.slug).slice(0, 3);

  return (
    <main className="rounded-xl bg-cream px-5 py-8 sm:px-10 sm:py-12">
      <Link
        to="/listings"
        className="inline-flex h-10 items-center gap-2 text-sm font-semibold text-forest"
      >
        <ArrowLeft className="size-4" />
        All listings
      </Link>

      <Gallery images={property.gallery} name={property.name} />

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <p className="text-xs font-semibold tracking-widest text-forest uppercase">
            {property.region} · {property.type}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-ink">{property.name}</h1>
          <p className="mt-2 text-lg text-ink-muted">{property.location}</p>
          <p className="mt-6 text-3xl font-display font-semibold text-ink">
            {formatPrice(property.price)}
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat icon={BedDouble} label="Beds" value={String(property.beds)} />
            <Stat icon={Bath} label="Baths" value={String(property.baths)} />
            <Stat icon={Maximize} label="Square feet" value={formatNumber(property.sqft)} />
            <Stat icon={LandPlot} label="Acres" value={String(property.acres)} />
          </dl>

          <p className="mt-8 text-base leading-relaxed text-ink">{property.story}</p>

          <h2 className="mt-10 font-display text-xl font-semibold text-ink">On the land</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {property.features.map((feature) => (
              <li
                key={feature}
                className="rounded-md bg-frost px-4 py-3 text-sm text-ink shadow-border"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <InquiryCard home={property.name} />
      </div>

      <h2 className="mt-14 font-display text-2xl font-semibold text-ink">Also in the book</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {others.map((item) => (
          <Link
            key={item.slug}
            to="/listings/$slug"
            params={{ slug: item.slug }}
            className="overflow-hidden rounded-lg bg-frost shadow-border"
          >
            <img src={item.image} alt={item.name} className="aspect-16/10 w-full object-cover" />
            <div className="px-4 py-3">
              <p className="font-display text-sm font-semibold text-ink">{item.name}</p>
              <p className="text-xs text-ink-muted">{formatPrice(item.price)}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

function Gallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  return (
    <div className="mt-5">
      <div className="overflow-hidden rounded-lg">
        <img src={current} alt={name} className="aspect-16/9 w-full object-cover" />
      </div>
      {images.length > 1 ? (
        <div className="mt-3 grid grid-cols-3 gap-3">
          {images.map((image, index) => (
            <button
              key={image + index}
              type="button"
              onClick={() => setActive(index)}
              className={
                index === active
                  ? "overflow-hidden rounded-md ring-2 ring-forest"
                  : "overflow-hidden rounded-md opacity-80 hover:opacity-100"
              }
            >
              <img src={image} alt="" className="aspect-16/10 w-full object-cover" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof BedDouble;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-md bg-frost px-3 py-3 shadow-border">
      <Icon className="size-4 text-forest" />
      <p className="mt-2 font-display text-lg font-semibold text-ink">{value}</p>
      <p className="text-xs text-ink-muted">{label}</p>
    </div>
  );
}

function InquiryCard({ home }: { home: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const inquiry = {
      home,
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      note: String(data.get("note") ?? ""),
      at: new Date().toISOString(),
    };
    const existing = JSON.parse(localStorage.getItem("grovewell-inquiries") ?? "[]") as unknown[];
    localStorage.setItem("grovewell-inquiries", JSON.stringify([inquiry, ...existing].slice(0, 20)));
    setSent(true);
  }

  return (
    <aside className="h-fit rounded-lg bg-frost p-6 shadow-border lg:sticky lg:top-28">
      <h2 className="font-display text-xl font-semibold text-ink">Request a walkthrough</h2>
      <p className="mt-2 text-sm text-ink-muted">
        We arrange private visits — never a crowd, never a Sunday open house.
      </p>
      {sent ? (
        <p className="mt-6 rounded-md bg-sage-mist px-4 py-4 text-sm leading-relaxed text-ink">
          Thank you. A Grovewell associate will write within two working days about {home}.
        </p>
      ) : (
        <form className="mt-5 flex flex-col gap-3" onSubmit={onSubmit}>
          <Field name="name" label="Name" required />
          <Field name="email" label="Email" type="email" required />
          <label className="block">
            <span className="text-xs font-semibold tracking-wide text-ink-muted uppercase">
              Note
            </span>
            <textarea
              name="note"
              rows={4}
              placeholder="Timing, household, questions about the land…"
              className="mt-1 w-full rounded-md bg-cream px-3 py-2.5 text-sm text-ink outline-none ring-forest/0 transition-[box-shadow] duration-150 focus:ring-2 focus:ring-forest"
            />
          </label>
          <button
            type="submit"
            className="mt-1 inline-flex h-11 items-center justify-center rounded-pill bg-forest text-sm font-semibold text-frost transition-[background-color,transform] duration-150 hover:bg-forest-deep active:scale-[0.96]"
          >
            Send inquiry
          </button>
        </form>
      )}
    </aside>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold tracking-wide text-ink-muted uppercase">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1 h-11 w-full rounded-md bg-cream px-3 text-sm text-ink outline-none ring-forest/0 transition-[box-shadow] duration-150 focus:ring-2 focus:ring-forest"
      />
    </label>
  );
}
