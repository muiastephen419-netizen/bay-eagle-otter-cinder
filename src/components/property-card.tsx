import { Link } from "@tanstack/react-router";
import type { Property } from "@/data/properties";
import { formatPrice } from "@/lib/utils";

export function PropertyCard({
  property,
  cta = "View home",
}: {
  property: Property;
  cta?: string;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl bg-frost shadow-border transition-[box-shadow,transform] duration-200 ease-out hover:shadow-lift">
      <Link
        to="/listings/$slug"
        params={{ slug: property.slug }}
        className="relative block aspect-4/3 overflow-hidden"
      >
        <img
          src={property.image}
          alt={property.name}
          className="size-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
        />
      </Link>
      <div className="flex flex-1 flex-col px-5 pt-5 pb-6">
        <p className="text-xs font-medium tracking-wide text-forest uppercase">
          {property.location}
        </p>
        <h3 className="mt-1 font-display text-lg font-semibold text-ink">
          {property.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
          {property.blurb}
        </p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="font-display text-base font-semibold text-ink">
            {formatPrice(property.price)}
          </p>
          <Link
            to="/listings/$slug"
            params={{ slug: property.slug }}
            className="inline-flex h-10 items-center rounded-pill bg-forest px-4 text-sm font-semibold text-frost transition-[background-color,transform] duration-150 hover:bg-forest-deep active:scale-[0.96]"
          >
            {cta}
          </Link>
        </div>
      </div>
    </article>
  );
}
