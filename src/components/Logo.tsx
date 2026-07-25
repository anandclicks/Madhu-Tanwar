import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#00a078] to-brand text-[0.7rem] font-bold tracking-wide text-white shadow-[0_8px_20px_rgba(0,133,102,0.3)]">
        MT
      </span>
      <span className="leading-tight">
        <span className="block font-display text-[1.05rem] font-bold tracking-tight text-foreground sm:text-lg">
          Dr. Madhu Tanwar
        </span>
        <span className="hidden text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-brand sm:block">
          Premium Clinical Care
        </span>
      </span>
    </Link>
  );
}
