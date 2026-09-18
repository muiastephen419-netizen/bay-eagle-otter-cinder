import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({ component: AboutPage });

const PEOPLE = [
  { initials: "ME", name: "Mara Ellison", role: "Principal, Portland" },
  { initials: "JR", name: "Jonah Reed", role: "Forest & gorge listings" },
  { initials: "PS", name: "Priya Shah", role: "Coastal and valley homes" },
];

function AboutPage() {
  return (
    <main className="overflow-hidden rounded-xl bg-cream">
      <div className="relative">
        <img
          src="/homes/forest.jpg"
          alt="A misty forest path at dawn"
          className="h-64 w-full object-cover sm:h-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-2 sm:px-10">
          <p className="text-xs font-semibold tracking-widest text-forest uppercase">Since 2014</p>
          <h1 className="mt-1 font-display text-4xl font-semibold text-ink sm:text-5xl">
            Houses, then land, then people.
          </h1>
        </div>
      </div>

      <div className="px-5 py-10 sm:px-10 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="max-w-xl space-y-4 text-base leading-relaxed text-ink-muted">
            <p>
              Grovewell began as a side desk in a timber-frame shop on SE Division. Builders kept asking who would sell the houses they were proud of without dressing them up as ski chalets. The answer, it turned out, was us.
            </p>
            <p>
              We still keep a short book. Six to twelve homes a year. Each one has a file on energy, water, and what was planted or protected. Clients who want a faster market — more photos, more open houses, more noise — are kindly sent elsewhere.
            </p>
            <p>
              The atelier remains in Portland. The houses are wherever the land still has a say: the Cascades, the Gorge, the San Juans, the North Coast, the Hudson.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-4">
            <Stat value="12" label="Homes represented a year, at most" />
            <Stat value="47" label="Acres under conservation easement" />
            <Stat value="2014" label="Year the atelier opened" />
            <Stat value="2" label="Working days to a first reply" />
          </dl>
        </div>

        <h2 className="mt-14 font-display text-2xl font-semibold text-ink">The desk</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {PEOPLE.map((person) => (
            <li key={person.name} className="flex items-center gap-4 rounded-lg bg-frost p-4 shadow-border">
              <span className="grid size-12 place-items-center rounded-full bg-forest font-display text-sm font-semibold text-frost">
                {person.initials}
              </span>
              <span>
                <span className="block font-display font-semibold text-ink">{person.name}</span>
                <span className="text-sm text-ink-muted">{person.role}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-12 overflow-hidden rounded-lg bg-forest">
          <div className="grid md:grid-cols-2">
            <div className="px-6 py-10 sm:px-8">
              <h2 className="font-display text-2xl font-semibold text-frost">Visit the atelier</h2>
              <p className="mt-3 text-sm leading-relaxed text-sage-soft">
                412 SE Division Street, Portland. Tuesdays through Fridays, by appointment. Bring a topographic map if you have one; we like those more than mood boards.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex h-11 items-center rounded-pill bg-frost px-5 text-sm font-semibold text-forest"
              >
                Write to us
              </Link>
            </div>
            <img
              src="/homes/hero.jpg"
              alt="Grovewell-listed timber home at sunrise"
              className="hidden h-full object-cover md:block"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg bg-frost px-5 py-6 shadow-border">
      <p className="font-display text-3xl font-semibold text-forest">{value}</p>
      <p className="mt-2 text-sm text-ink-muted">{label}</p>
    </div>
  );
}
