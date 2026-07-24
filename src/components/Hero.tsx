import Image from "next/image";
import Link from "next/link";

const features = [
  "Clinical Nutrition",
  "Dermatology Care",
  "Personalized Plans",
];

export function Hero() {
  return (
    <section className="px-5 pt-5 sm:px-8 lg:px-10">
      <div className="container-wide relative overflow-hidden rounded-[2rem] bg-cream lg:rounded-[2.75rem]">
        <div className="relative grid items-center gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-16 lg:py-16 xl:px-20">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand shadow-sm">
              Dietitian · Dermatologist
            </span>

            <h1 className="font-display mt-6 max-w-xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
              Healthy skin starts with{" "}
              <span className="text-brand">nourished living.</span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Dual-specialty care that connects nutrition and dermatology —
              science-backed meal plans, clear skin protocols, and consultations
              tailored to your body.
            </p>

            <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-3">
              {features.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-semibold text-foreground"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand text-white shadow-[0_4px_10px_rgba(0,133,102,0.28)]">
                    <svg
                      viewBox="0 0 16 16"
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M3.5 8.5l3 3 6-6" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-primary">
                Get Started Today
              </Link>
              <Link href="/about" className="btn-secondary">
                Meet Dr. Madhu Tanwar
              </Link>
            </div>
          </div>

          <div className="animate-fade-in delay-200 relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-white shadow-[0_18px_40px_rgba(15,23,42,0.1)] ring-1 ring-black/5 lg:min-h-[520px]">
              <Image
                src="/doctor.avif"
                alt="Dr. Madhu Tanwar — Dietitian and Dermatologist"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 42vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/50 via-slate-900/15 to-transparent p-6 pt-24">
                <p className="text-sm font-semibold text-white">
                  Dr. Madhu Tanwar
                </p>
                <p className="mt-0.5 text-xs text-white/85">
                  Dietitian · Dermatologist
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
