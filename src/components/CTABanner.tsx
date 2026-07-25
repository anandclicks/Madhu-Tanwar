import Link from "next/link";

export function CTABanner() {
  return (
    <section className="px-5 pb-16 sm:px-8 lg:pb-20">
      <div className="container-wide relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#00a078] via-brand to-brand-dark px-8 py-14 shadow-[0_24px_60px_rgba(0,133,102,0.28)] sm:px-12 lg:rounded-[2.5rem] lg:py-16">
        <div className="pointer-events-none absolute -right-10 top-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-8 bottom-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
            Next step
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready for healthier skin and better energy?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/80">
            Book a discovery call and we&apos;ll build a clear next step across
            nutrition, dermatology, or both.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-brand shadow-sm transition hover:bg-cream"
            >
              Book Appointment
            </Link>
            <Link
              href="/consultations"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/35 px-7 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Consultations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
