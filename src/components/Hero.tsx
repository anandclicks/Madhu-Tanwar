import Image from "next/image";
import Link from "next/link";

const features = [
  "Clinical Nutrition",
  "Dermatology Care",
  "Personalized Plans",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="container-wide relative grid items-stretch lg:grid-cols-2">
        <div className="animate-fade-up flex flex-col justify-center px-5 py-14 sm:px-8 lg:px-10 lg:py-20 xl:pr-16">
          <p className="section-label">Dietitian · Dermatologist</p>

          <h1 className="font-display mt-6 max-w-xl text-[2.6rem] font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
            Healthy skin starts with{" "}
            <span className="text-brand">nourished living.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            Dual-specialty care that connects nutrition and dermatology —
            science-backed meal plans, clear skin protocols, and consultations
            tailored to your body.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-y border-border py-5">
            {features.map((item) => (
              <span
                key={item}
                className="text-sm font-semibold tracking-wide text-foreground"
              >
                <span className="mr-2 text-brand">+</span>
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Get Started Today
            </Link>
            <Link href="/about" className="btn-secondary">
              Meet Dr. Madhu Tanwar
            </Link>
          </div>
        </div>

        <div className="animate-fade-in delay-200 relative min-h-[420px] bg-background sm:min-h-[520px] lg:min-h-full">
          <Image
            src="/doctor.avif"
            alt="Dr. Madhu Tanwar — Dietitian and Dermatologist"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute bottom-6 left-6 right-6 rounded-md bg-white/95 px-5 py-4 backdrop-blur-sm sm:left-auto sm:right-8 sm:w-auto">
            <p className="font-display text-base font-bold text-foreground">
              Dr. Madhu Tanwar
            </p>
            <p className="text-sm text-muted">Dietitian · Dermatologist</p>
          </div>
        </div>
      </div>
    </section>
  );
}
