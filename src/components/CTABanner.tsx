import Link from "next/link";

export function CTABanner() {
  return (
    <section className="px-5 pb-16 sm:px-8 lg:px-10 lg:pb-20">
      <div className="container-wide overflow-hidden rounded-xl bg-brand">
        <div className="grid lg:grid-cols-[1.3fr_auto] lg:items-center">
          <div className="px-8 py-12 sm:px-12 lg:py-14">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
              Book Your Consultation Today
            </p>
            <h2 className="font-display mt-3 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Book Your Consultation Today
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/85">
              Your skin deserves expert attention at every stage of life.
              Whether you&apos;re concerned about acne, pigmentation, hair fall,
              aging, or overall skin wellness, Dr. Madhu Tanwar&apos;s Clinic is
              committed to helping you achieve healthier skin with evidence-based
              dermatological care.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/85">
              Schedule your consultation today and take the first step toward
              healthier, more confident skin with a trusted dermatologist.
            </p>
          </div>
          <div className="flex flex-col gap-3 px-8 pb-12 sm:flex-row sm:px-12 lg:flex-col lg:pb-0 lg:pr-12">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 text-sm font-semibold text-brand shadow-sm transition hover:bg-cream"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/dermatology"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/35 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Treatments
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
