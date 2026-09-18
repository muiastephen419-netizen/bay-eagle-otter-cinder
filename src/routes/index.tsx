import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Leaf, MapPin } from "lucide-react";
import { LeafMark } from "@/components/logo";
import { PropertyCard } from "@/components/property-card";
import { SearchBar } from "@/components/search-bar";
import { COLLECTIONS, properties } from "@/data/properties";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

const VALUES = [
  {
    title: "Certified green builds",
    body: "We only represent homes with a documented envelope, a clean energy plan, and materials you can name.",
  },
  {
    title: "Land left better",
    body: "Every listing includes a habitat note — what was restored, what stays wild, and what a new steward inherits.",
  },
  {
    title: "Makers, not catalogs",
    body: "Timber framers, plasterers, and millworkers we have worked with for a decade. The house should outlast the trend.",
  },
];

function Home() {
  return (
    <main>
      <Hero />
      <Welcome />
      <Featured />
      <Values />
      <Cta />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-hero">
      <img
        src="/homes/hero.jpg"
        alt="Cedar eco-home in a sunlit forest meadow"
        className="aspect-4/5 w-full object-cover sm:aspect-16/10 lg:aspect-16/8"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/35 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 pb-24 sm:justify-center sm:p-10 sm:pb-28 lg:p-14 lg:pb-32">
        <div className="inline-flex w-fit items-center gap-2 rounded-pill bg-frost/15 px-3 py-1.5 text-xs font-semibold text-frost backdrop-blur-sm">
          <span className="grid size-6 place-items-center rounded-full bg-frost/20">
            <LeafMark className="size-3.5" />
          </span>
          Private forest homes
        </div>
        <h1 className="mt-4 max-w-lg font-display text-4xl font-semibold text-frost sm:text-5xl lg:text-6xl">
          Find eco-friendly homes easily
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-cream sm:text-base">
          Timber lodges, living roofs, and quiet acres — listed only when they treat the land as a neighbor, not a backdrop.
        </p>
        <Link
          to="/listings"
          className="mt-6 inline-flex h-11 w-fit items-center rounded-pill bg-forest px-5 text-sm font-semibold text-frost transition-[background-color,transform] duration-150 hover:bg-forest-deep active:scale-[0.96]"
        >
          Begin search
        </Link>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-7 z-10 px-3 sm:-bottom-8 sm:px-8">
        <div className="pointer-events-auto mx-auto max-w-3xl">
          <SearchBar />
        </div>
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <section className="mt-16 rounded-xl bg-cream px-5 py-12 sm:mt-20 sm:px-10 sm:py-16">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto w-full max-w-md">
          <div className="overflow-hidden rounded-lg bg-frost p-3 shadow-border">
            <img
              src="/homes/fernwalk.jpg"
              alt="Fernwalk Cabin, an A-frame timber home in the trees"
              className="aspect-4/3 w-full rounded-md object-cover"
            />
          </div>
          <div className="absolute -top-4 -left-3 grid size-16 place-items-center rounded-full bg-forest text-frost shadow-lift sm:size-20">
            <div className="flex flex-col items-center">
              <Leaf className="size-5" />
              <span className="mt-0.5 text-[0.6rem] font-semibold tracking-wide uppercase">
                Featured
              </span>
            </div>
          </div>
          <div className="absolute -right-2 -bottom-3 grid size-11 place-items-center rounded-full bg-sage-soft text-forest shadow-border">
            <LeafMark className="size-5" />
          </div>
        </div>
        <div>
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Welcome to Grovewell
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-muted">
            We are a Portland atelier that represents a handful of forest, gorge, and coastal homes each year. No open houses with balloons. No seven-photo listings shot on a phone. If a house cannot explain how it heats, sheds water, and treats its acreage, it does not make the book.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/about"
              className="inline-flex h-11 items-center gap-2 rounded-pill bg-forest pr-4 pl-3.5 text-sm font-semibold text-frost transition-[background-color,transform] duration-150 hover:bg-forest-deep active:scale-[0.96]"
            >
              <MapPin className="size-4" />
              Our story
            </Link>
            <Link
              to="/residences"
              className="text-sm font-semibold text-forest underline decoration-sage-soft underline-offset-4"
            >
              See the residences
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Featured() {
  const [page, setPage] = useState(0);
  const pages = [properties.slice(0, 3), properties.slice(3, 6)];
  const current = pages[page] ?? pages[0];

  return (
    <section className="mt-4 rounded-xl bg-sage-mist px-5 py-12 sm:px-10 sm:py-16">
      <h2 className="text-center font-display text-3xl font-semibold text-ink sm:text-4xl">
        Homes living lightly
      </h2>
      <div className="relative mt-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {current.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous homes"
            onClick={() => setPage((p) => (p === 0 ? pages.length - 1 : p - 1))}
            className="grid size-10 place-items-center rounded-full text-forest transition-colors duration-150 hover:bg-frost"
          >
            <ChevronLeft className="size-5" />
          </button>
          {pages.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show homes set ${index + 1}`}
              onClick={() => setPage(index)}
              className={cn(
                "size-2.5 rounded-full transition-colors duration-150",
                index === page ? "bg-forest" : "bg-sage",
              )}
            />
          ))}
          <button
            type="button"
            aria-label="Next homes"
            onClick={() => setPage((p) => (p + 1) % pages.length)}
            className="grid size-10 place-items-center rounded-full text-forest transition-colors duration-150 hover:bg-frost"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="rounded-xl bg-cream px-5 py-12 sm:px-10 sm:py-16">
      <p className="text-center text-xs font-semibold tracking-widest text-forest uppercase">
        Why Grovewell
      </p>
      <h2 className="mt-2 text-center font-display text-3xl font-semibold text-ink">
        A shorter list. A longer stay.
      </h2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {VALUES.map((value) => (
          <article
            key={value.title}
            className="rounded-lg bg-frost px-6 py-7 shadow-border"
          >
            <h3 className="font-display text-lg font-semibold text-ink">{value.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{value.body}</p>
          </article>
        ))}
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {COLLECTIONS.map((collection) => (
          <Link
            key={collection.id}
            to="/residences"
            hash={collection.id}
            className="group overflow-hidden rounded-lg bg-frost shadow-border"
          >
            <div className="aspect-16/10 overflow-hidden">
              <img
                src={collection.image}
                alt={collection.title}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="px-5 py-4">
              <h3 className="font-display text-base font-semibold text-ink">
                {collection.title}
              </h3>
              <p className="mt-1 text-sm text-ink-muted">{collection.blurb}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="mt-4 overflow-hidden rounded-xl bg-forest">
      <div className="grid items-center md:grid-cols-2">
        <div className="px-6 py-12 sm:px-10">
          <h2 className="font-display text-3xl font-semibold text-frost">
            Tell us how you want to live.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-sage-soft">
            A short note is enough — region, how many of you, and whether you need a studio, a guest wing, or simply a porch that faces weather. We reply within two working days.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex h-11 items-center rounded-pill bg-frost px-5 text-sm font-semibold text-forest transition-transform duration-150 active:scale-[0.96]"
          >
            Get started
          </Link>
        </div>
        <img
          src="/homes/interior.jpg"
          alt="Sunlit timber living room looking into the forest"
          className="hidden h-full min-h-64 object-cover md:block"
        />
      </div>
    </section>
  );
}
