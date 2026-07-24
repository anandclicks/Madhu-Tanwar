import Link from "next/link";

export function CTABanner() {
  return (
    <section className="px-5 pb-16 sm:px-8 lg:px-10 lg:pb-20">
      <div className="container-wide overflow-hidden rounded-xl bg-brand">
        <div className="grid lg:grid-cols-[1.3fr_auto] lg:items-center">
          <div className="px-8 py-12 sm:px-12 lg:py-14">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
              Next step
            </p>
            <h2 className="font-display mt-3 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready for healthier skin and better energy?
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/80">
              Book a discovery call and we&apos;ll build a clear next step across
              nutrition, dermatology, or both.
            </p>
          </div>
          <div className="flex flex-col gap-3 px-8 pb-12 sm:flex-row sm:px-12 lg:flex-col lg:pb-0 lg:pr-12">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 text-sm font-semibold text-brand shadow-sm transition hover:bg-cream"
            >
              Book Appointment
            </Link>
            <Link
              href="/consultations"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/35 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Consultations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
