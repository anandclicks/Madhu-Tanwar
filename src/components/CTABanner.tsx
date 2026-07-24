import Link from "next/link";

export function CTABanner() {
  return (
    <section className="px-5 pb-16 sm:px-8 lg:px-10 lg:pb-20">
      <div className="container-wide relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-cream px-8 py-14 text-center shadow-[0_16px_40px_rgba(0,133,102,0.08)] sm:px-12 lg:rounded-[2.75rem] lg:py-16">
        <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-teal-300/25 blur-3xl" />

        <h2 className="font-display relative mx-auto max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Ready for healthier skin and better energy?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Book a discovery call and we&apos;ll build a clear next step across
          nutrition, dermatology, or both.
        </p>
        <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/contact" className="btn-primary">
            Book Appointment
          </Link>
          <Link href="/consultations" className="btn-secondary">
            View Consultations
          </Link>
        </div>
      </div>
    </section>
  );
}
