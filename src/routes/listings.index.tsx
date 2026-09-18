import { createFileRoute, Link } from "@tanstack/react-router";
import { SearchBar } from "@/components/search-bar";
import { PropertyCard } from "@/components/property-card";
import { COLLECTIONS, filterProperties, HOME_TYPES } from "@/data/properties";

type ListingsSearch = {
  location?: string;
  type?: string;
  collection?: string;
};

export const Route = createFileRoute("/listings/")({
  validateSearch: (search: Record<string, unknown>): ListingsSearch => ({
    location: typeof search.location === "string" ? search.location : undefined,
    type: typeof search.type === "string" ? search.type : undefined,
    collection: typeof search.collection === "string" ? search.collection : undefined,
  }),
  component: ListingsPage,
});

function ListingsPage() {
  const search = Route.useSearch();
  const results = filterProperties(search);
  const collectionLabel = COLLECTIONS.find((c) => c.id === search.collection)?.title;

  return (
    <main className="rounded-xl bg-cream px-5 py-10 sm:px-10 sm:py-14">
      <p className="text-xs font-semibold tracking-widest text-forest uppercase">The book</p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-ink">Current listings</h1>
      <p className="mt-3 max-w-xl text-base text-ink-muted">
        Six homes we are prepared to stand behind. Filter by region or type — or wander the whole list.
      </p>

      <div className="mt-8 max-w-3xl">
        <SearchBar initialLocation={search.location ?? ""} initialType={search.type ?? ""} />
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <FilterChip to="/listings" active={!search.collection && !search.type}>
          All homes
        </FilterChip>
        {HOME_TYPES.map((type) => (
          <FilterChip
            key={type}
            to="/listings"
            search={{ ...search, type: search.type === type ? undefined : type }}
            active={search.type === type}
          >
            {type}
          </FilterChip>
        ))}
        {COLLECTIONS.map((collection) => (
          <FilterChip
            key={collection.id}
            to="/listings"
            search={{
              ...search,
              collection: search.collection === collection.id ? undefined : collection.id,
            }}
            active={search.collection === collection.id}
          >
            {collection.title.replace(" Homes", "")}
          </FilterChip>
        ))}
      </div>

      <p className="mt-8 text-sm text-ink-muted">
        {results.length} {results.length === 1 ? "home" : "homes"}
        {search.location ? ` near “${search.location}”` : ""}
        {search.type ? ` · ${search.type}` : ""}
        {collectionLabel ? ` · ${collectionLabel}` : ""}
      </p>

      {results.length === 0 ? (
        <p className="mt-10 rounded-lg bg-frost px-6 py-10 text-center text-ink-muted shadow-border">
          Nothing in the book matches that search. Try a broader region, or clear the filters.
        </p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      )}
    </main>
  );
}

function FilterChip({
  children,
  active,
  to,
  search,
}: {
  children: React.ReactNode;
  active: boolean;
  to: "/listings";
  search?: ListingsSearch;
}) {
  return (
    <Link
      to={to}
      search={search}
      className={
        active
          ? "inline-flex h-9 items-center rounded-pill bg-forest px-3.5 text-sm font-semibold text-frost"
          : "inline-flex h-9 items-center rounded-pill bg-frost px-3.5 text-sm font-medium text-ink shadow-border transition-colors duration-150 hover:bg-sage-mist"
      }
    >
      {children}
    </Link>
  );
}
