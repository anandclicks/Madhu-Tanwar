import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    title: "Dual specialty care",
    text: "Dietitian & dermatologist under one trusted clinician.",
  },
  {
    title: "Clinical focus",
    text: "Acne, gut–skin health & metabolic wellness.",
  },
  {
    title: "Flexible sessions",
    text: "Virtual worldwide & in-clinic appointments.",
  },
];

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 lg:py-24">
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-brand/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-brand/5 blur-3xl" />

      <div className="container-wide relative">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-cream px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Meet Dr. Madhu Tanwar
          </span>
          <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.85rem]">
            Dual expertise.{" "}
            <span className="text-brand">Personal attention.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            A dietitian and dermatologist helping patients improve health from
            the inside out — clear guidance, lasting results.
          </p>
        </div>

        {/* Main showcase */}
        <div className="mt-12 grid items-end gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Portrait card */}
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-cream via-brand-soft/60 to-brand/20 px-6 pt-10 sm:px-10 lg:rounded-[2.5rem]">
            <div className="absolute left-6 top-6 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-brand shadow-sm backdrop-blur">
              RD · Dermatologist
            </div>

            <div className="relative mx-auto flex justify-center">
              <div className="pointer-events-none absolute bottom-8 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-brand/20 blur-3xl" />
              <Image
                src="/doctor-cutout.png"
                alt="Dr. Madhu Tanwar — Dietitian and Dermatologist"
                width={520}
                height={600}
                priority
                className="relative z-10 h-auto w-full max-w-[360px] object-contain drop-shadow-[0_30px_60px_rgba(0,133,102,0.22)] sm:max-w-[420px]"
                sizes="(max-width: 1024px) 85vw, 420px"
              />
            </div>
          </div>

          {/* Experience panel */}
          <div className="flex flex-col justify-center pb-2 lg:pb-8">
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "10+", label: "Years experience" },
                { value: "2", label: "Specialties" },
                { value: "1:1", label: "Personal care" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="premium-card rounded-2xl px-3 py-5 text-center"
                >
                  <p className="font-display text-2xl font-bold text-brand sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] font-medium text-muted sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="premium-card group flex gap-4 rounded-2xl p-5 transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,133,102,0.1)]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-sm font-bold text-white shadow-[0_8px_18px_rgba(0,133,102,0.25)]">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="font-display text-base font-bold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/about" className="btn-primary">
                About Dr. Madhu Tanwar
              </Link>
              <Link href="/contact" className="btn-secondary">
                Book a Session
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
