import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function LeafMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={cn("size-5", className)}
    >
      <path
        d="M16 4c6 3 11 9 12 16-5 1-10-1-14-5-1 5-1 10 2 14-7-2-12-8-13-15 5-1 9 1 13 5 1-5 1-10-0-15Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Logo({
  className,
  onFrost = false,
}: {
  className?: string;
  onFrost?: boolean;
}) {
  return (
    <Link
      to="/"
      className={cn(
        "inline-flex items-center gap-2 font-logo text-xl font-extrabold tracking-tight",
        onFrost ? "text-forest" : "text-forest",
        className,
      )}
    >
      <span className="grid size-8 place-items-center rounded-full bg-forest text-frost">
        <LeafMark className="size-4" />
      </span>
      Grovewell
    </Link>
  );
}
