import Image from "next/image";
import Link from "next/link";

const features = [
  "Clinical Nutrition",
  "Dermatology Care",
  "Personalized Plans",
];

export function Hero() {
  return (
    <section className="overflow-hidden bg-cream">
      <div className="container-wide grid items-center gap-8 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:py-16 xl:gap-16">
        <div className="animate-fade-up order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Dietitian · Dermatologist
          </span>

          <h1 className="font-display mt-6 text-[2.15rem] font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
            Healthy skin starts with{" "}
            <span className="text-brand">nourished living.</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            Dual-specialty care that connects nutrition and dermatology —
            science-backed meal plans, clear skin protocols, and consultations
            tailored to your body.
          </p>

          <ul className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {features.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-semibold text-foreground"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand text-white">
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

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary w-full sm:w-auto">
              Get Started Today
            </Link>
            <Link href="/about" className="btn-secondary w-full sm:w-auto">
              Meet Dr. Madhu Tanwar
            </Link>
          </div>
        </div>

        <div className="animate-fade-in delay-200 order-1 w-full lg:order-2">
          <div className="relative h-[300px] w-full overflow-hidden rounded-[1.5rem] sm:h-[400px] lg:h-[520px]">
            <Image
              src="/hero-diet-bowl.png"
              alt="Healthy grilled salmon with fresh vegetables"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
