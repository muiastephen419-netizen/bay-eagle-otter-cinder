import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Menu, Search, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/listings", label: "Listings" },
  { to: "/residences", label: "Residences" },
  { to: "/about", label: "About" },
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-3 py-3 sm:px-5 sm:py-4">
      <SiteHeader />
      <div className="flex flex-1 flex-col">{children}</div>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-3 z-40 mb-3 sm:top-4 sm:mb-4">
      <div className="flex items-center gap-3 rounded-pill bg-frost px-3 py-2 shadow-nav sm:px-5 sm:py-2.5">
        <Logo />

        <nav className="hidden flex-1 items-center justify-center gap-8 text-sm font-medium text-ink-muted md:flex">
          {NAV.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "transition-colors duration-150",
                  active ? "text-ink" : "hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Link
            to="/listings"
            aria-label="Search listings"
            className="grid size-10 place-items-center rounded-pill text-ink-muted transition-colors duration-150 hover:bg-cream hover:text-ink"
          >
            <Search className="size-4" strokeWidth={2} />
          </Link>
          <Link
            to="/contact"
            className="hidden h-10 items-center gap-2 rounded-pill bg-forest pr-3.5 pl-3 text-sm font-semibold text-frost transition-[background-color,transform] duration-150 ease-out hover:bg-forest-deep active:scale-[0.96] sm:inline-flex"
          >
            <Home className="size-4" strokeWidth={2} />
            Get started
          </Link>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-pill text-ink md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="mt-2 rounded-xl bg-frost p-3 shadow-lift md:hidden">
          <nav className="flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-3 text-base font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-1 flex h-11 items-center justify-center gap-2 rounded-pill bg-forest text-sm font-semibold text-frost"
              onClick={() => setOpen(false)}
            >
              <Home className="size-4" />
              Get started
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-6 rounded-xl bg-forest px-6 py-10 text-sage-mist sm:px-10">
      <div className="grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-logo text-xl font-extrabold text-frost">Grovewell</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-sage-soft">
            A quiet brokerage for houses that belong to the land they sit on.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-wide text-frost uppercase">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/listings" className="text-sage-soft transition-colors duration-150 hover:text-frost">
                All listings
              </Link>
            </li>
            <li>
              <Link to="/residences" className="text-sage-soft transition-colors duration-150 hover:text-frost">
                Residences
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-sage-soft transition-colors duration-150 hover:text-frost">
                Our story
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-wide text-frost uppercase">Visit</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/contact" className="text-sage-soft transition-colors duration-150 hover:text-frost">
                Portland atelier
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-sage-soft transition-colors duration-150 hover:text-frost">
                Book a walkthrough
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-wide text-frost uppercase">Atelier</p>
          <p className="mt-3 text-sm leading-relaxed text-sage-soft">
            412 SE Division Street
            <br />
            Portland, Oregon 97202
            <br />
            <a className="underline decoration-sage-soft/40 underline-offset-4" href="mailto:hello@grovewell.homes">
              hello@grovewell.homes
            </a>
          </p>
        </div>
      </div>
      <p className="mt-10 border-t border-frost/10 pt-6 text-xs text-sage-soft">
        Grovewell Homes · Sample brokerage site · Homes shown are illustrative.
      </p>
    </footer>
  );
}
