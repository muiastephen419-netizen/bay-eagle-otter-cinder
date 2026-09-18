import { useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { HOME_TYPES } from "@/data/properties";
import { cn } from "@/lib/utils";

export function SearchBar({
  className,
  initialLocation = "",
  initialType = "",
}: {
  className?: string;
  initialLocation?: string;
  initialType?: string;
}) {
  const navigate = useNavigate();
  const [location, setLocation] = useState(initialLocation);
  const [type, setType] = useState(initialType);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    void navigate({
      to: "/listings",
      search: {
        location: location.trim() || undefined,
        type: type || undefined,
      },
    });
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "flex items-center gap-2 rounded-pill bg-sage-soft/90 p-1.5 shadow-lift backdrop-blur-sm sm:p-2",
        className,
      )}
    >
      <div className="flex min-h-11 min-w-0 flex-1 items-center rounded-pill bg-frost px-3 sm:min-h-12 sm:px-4">
        <label className="sr-only" htmlFor="search-location">
          Location
        </label>
        <input
          id="search-location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Region or town"
          className="h-11 min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ink-muted sm:h-12"
        />
        <span className="mx-2 hidden h-6 w-px bg-cream-deep sm:block" />
        <label className="sr-only" htmlFor="search-type">
          Home type
        </label>
        <select
          id="search-type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="hidden h-12 max-w-40 bg-transparent text-sm text-ink outline-none sm:block"
        >
          <option value="">Any home type</option>
          {HOME_TYPES.map((homeType) => (
            <option key={homeType} value={homeType}>
              {homeType}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="inline-flex size-11 shrink-0 items-center justify-center gap-2 rounded-pill bg-forest text-sm font-semibold text-frost transition-[background-color,transform] duration-150 ease-out hover:bg-forest-deep active:scale-[0.96] sm:h-12 sm:w-auto sm:px-6"
      >
        <Search className="size-4" strokeWidth={2.25} />
        <span className="hidden sm:inline">Search</span>
      </button>
    </form>
  );
}
