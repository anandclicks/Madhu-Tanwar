import Image from "next/image";
import Link from "next/link";

const reasons = [
  {
    title: "Expert medical care",
    description:
      "Every treatment is guided by expert medical care to ensure safety and effectiveness.",
  },
  {
    title: "Personalized plans",
    description:
      "Plans tailored to your unique skin, hair, and wellness goals — never one-size-fits-all.",
  },
  {
    title: "Advanced technology",
    description:
      "We use advanced, FDA-approved technology focused on visible, lasting results.",
  },
  {
    title: "Hygiene & comfort",
    description:
      "The highest standards of hygiene in a calm, comfortable clinic setting.",
  },
  {
    title: "Trusted by clients",
    description:
      "A growing base of happy clients who trust our care — inside and out.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:py-24">
      <div className="container-wide overflow-hidden rounded-[2rem] bg-cream px-6 py-12 sm:px-10 lg:rounded-[2.5rem] lg:px-12 lg:py-16">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-14">
          <div className="relative mx-auto w-full max-w-lg lg:sticky lg:top-28 lg:max-w-none">
            <div className="grid gap-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] shadow-[0_16px_40px_rgba(0,133,102,0.1)]">
                <Image
                  src="/why-nutrition.png"
                  alt="Fresh nutrition and healthy meal preparation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] shadow-[0_16px_40px_rgba(0,133,102,0.1)]">
                <Image
                  src="/why-dermatology.png"
                  alt="Advanced dermatology and skin care treatment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
              </div>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Our Promise
            </span>
            <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Choose Us?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-[1.05rem]">
              At our clinic, every treatment is guided by expert medical care to
              ensure safety and effectiveness. We offer personalized plans
              tailored to your unique skin, hair, and wellness goals. Using only
              advanced, FDA-approved technology, we focus on delivering visible,
              lasting results. Our clinic maintains the highest standards of
              hygiene in a calm and comfortable setting. With a growing base of
              happy clients who trust our care, we&apos;re committed to helping
              you look and feel your best — inside and out.
            </p>

            <div className="mt-8 space-y-3">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="premium-card grid grid-cols-[auto_1fr] gap-4 rounded-2xl p-4"
                >
                  <span className="font-display text-lg font-bold text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{reason.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary mt-9">
              Know more about me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
