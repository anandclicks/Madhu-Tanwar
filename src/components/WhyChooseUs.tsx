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
    <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — lifestyle reference images */}
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:mt-10">
              <Image
                src="/why-nutrition.png"
                alt="Fresh nutrition and healthy meal preparation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/why-dermatology.png"
                alt="Advanced dermatology and skin care treatment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>

        {/* Right — content */}
        <div>
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-white px-4 py-1.5 text-sm font-medium text-brand shadow-sm">
            Our Promise
          </span>
          <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-[1.05rem]">
            At our clinic, every treatment is guided by expert medical care to
            ensure safety and effectiveness. We offer personalized plans tailored
            to your unique skin, hair, and wellness goals. Using only advanced,
            FDA-approved technology, we focus on delivering visible, lasting
            results. Our clinic maintains the highest standards of hygiene in a
            calm and comfortable setting. With a growing base of happy clients
            who trust our care, we&apos;re committed to helping you look and feel
            your best — inside and out.
          </p>

          <ul className="mt-8 space-y-4">
            {reasons.map((reason) => (
              <li key={reason.title} className="flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
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
                <div>
                  <p className="text-[15px] font-semibold text-foreground">
                    {reason.title}
                  </p>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted">
                    {reason.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <Link href="/about" className="btn-primary mt-9">
            Know more about me
          </Link>
        </div>
      </div>
    </section>
  );
}
