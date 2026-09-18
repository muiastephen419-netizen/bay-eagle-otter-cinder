import { createFileRoute, Link } from "@tanstack/react-router";
import { COLLECTIONS, properties } from "@/data/properties";
import { formatPrice } from "@/lib/utils";

export const Route = createFileRoute("/residences")({ component: ResidencesPage });

function ResidencesPage() {
  return (
    <main className="rounded-xl bg-cream px-5 py-10 sm:px-10 sm:py-14">
      <p className="text-xs font-semibold tracking-widest text-forest uppercase">Residences</p>
      <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold text-ink">
        Three ways a house can belong to its acreage.
      </h1>
      <p className="mt-4 max-w-xl text-base text-ink-muted">
        We do not sort homes by bedroom count first. We sort them by how they live with weather, water, and the trees that were there before the foundation.
      </p>

      <div className="mt-12 space-y-16">
        {COLLECTIONS.map((collection) => {
          const homes = properties.filter((item) => item.collection === collection.id);
          return (
            <section key={collection.id} id={collection.id} className="scroll-mt-28">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="aspect-16/10 w-full rounded-lg object-cover"
                />
                <div>
                  <h2 className="font-display text-3xl font-semibold text-ink">
                    {collection.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-ink-muted">{collection.blurb}</p>
                  <Link
                    to="/listings"
                    search={{ collection: collection.id }}
                    className="mt-6 inline-flex h-11 items-center rounded-pill bg-forest px-5 text-sm font-semibold text-frost transition-[background-color,transform] duration-150 hover:bg-forest-deep active:scale-[0.96]"
                  >
                    View these homes
                  </Link>
                </div>
              </div>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {homes.map((home) => (
                  <li key={home.slug}>
                    <Link
                      to="/listings/$slug"
                      params={{ slug: home.slug }}
                      className="flex gap-4 rounded-lg bg-frost p-3 shadow-border"
                    >
                      <img
                        src={home.image}
                        alt=""
                        className="size-24 shrink-0 rounded-md object-cover"
                      />
                      <span className="flex flex-col justify-center">
                        <span className="font-display font-semibold text-ink">{home.name}</span>
                        <span className="text-sm text-ink-muted">{home.location}</span>
                        <span className="mt-1 text-sm font-semibold text-forest">
                          {formatPrice(home.price)}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </main>
  );
}
