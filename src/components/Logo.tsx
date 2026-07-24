import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-3 ${className}`}>
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand text-sm font-bold text-white">
        MT
      </span>
      <span className="leading-tight">
        <span className="block font-display text-[0.95rem] font-bold tracking-tight text-foreground sm:text-lg">
          Dr. Madhu Tanwar
        </span>
        <span className="block text-[0.65rem] font-medium uppercase tracking-[0.14em] text-muted">
          Dietitian · Dermatologist
        </span>
      </span>
    </Link>
  );
}
