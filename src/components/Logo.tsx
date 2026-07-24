import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-brand shadow-[0_8px_18px_rgba(0,133,102,0.28)]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5 text-white"
          aria-hidden="true"
        >
          <path
            d="M12 3.5c.8 2.4 2.9 4.2 5.4 4.7-2.5.5-4.6 2.3-5.4 4.7-.8-2.4-2.9-4.2-5.4-4.7 2.5-.5 4.6-2.3 5.4-4.7Z"
            fill="currentColor"
          />
          <path
            d="M12 13.2c.55 1.65 2 2.9 3.7 3.25-1.7.35-3.15 1.6-3.7 3.25-.55-1.65-2-2.9-3.7-3.25 1.7-.35 3.15-1.6 3.7-3.25Z"
            fill="currentColor"
            opacity="0.85"
          />
        </svg>
      </span>
      <span className="font-display text-[1.05rem] font-bold leading-tight tracking-tight text-foreground sm:text-lg">
        Dr. Madhu <span className="text-brand">Tanwar</span>
      </span>
    </Link>
  );
}
