import Link from "next/link";

const differences = [
  {
    title: "Two specialties. One plan.",
    description:
      "Nutrition and dermatology work together — so your meals and skin treatments support the same goals.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3c.8 2.6 3 4.5 5.6 5-2.6.5-4.8 2.4-5.6 5-.8-2.6-3-4.5-5.6-5C9 7.5 11.2 5.6 12 3Z" />
        <path d="M12 13.2c.55 1.7 2 3 3.75 3.35-1.75.35-3.2 1.65-3.75 3.35-.55-1.7-2-3-3.75-3.35 1.75-.35 3.2-1.65 3.75-3.35Z" />
      </svg>
    ),
  },
  {
    title: "Clinical, not generic",
    description:
      "Every recommendation is grounded in medical expertise and tailored to your labs, lifestyle, and skin type.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 3h6v4h4v6h-4v8H9v-8H5V7h4V3Z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Results you can feel",
    description:
      "Clearer skin, steadier energy, and habits that last — with guidance that fits real life.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10Z" />
      </svg>
    ),
  },
];

export function DifferenceSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:py-24">
      <div className="container-wide overflow-hidden rounded-[2rem] bg-cream px-6 py-12 sm:px-10 lg:rounded-[2.5rem] lg:px-14 lg:py-16">
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Why Dr. Madhu Tanwar
            </span>
            <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              Care that connects skin and nutrition.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted lg:justify-self-end lg:text-right">
            A modern clinic experience designed for lasting health — inside and
            out.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {differences.map((item, index) => (
            <article
              key={item.title}
              className="group relative flex flex-col rounded-[1.5rem] bg-white p-7 shadow-[0_8px_30px_rgba(0,133,102,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(0,133,102,0.12)]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-white">
                  {item.icon}
                </span>
                <span className="font-display text-3xl font-bold text-brand/15 transition group-hover:text-brand/25">
                  0{index + 1}
                </span>
              </div>
              <h3 className="font-display mt-7 text-xl font-bold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                {item.description}
              </p>
              <div className="mt-6 h-1 w-10 rounded-full bg-brand/20 transition-all duration-300 group-hover:w-16 group-hover:bg-brand" />
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:justify-start">
          <Link href="/about" className="btn-primary">
            Know more about me
          </Link>
        </div>
      </div>
    </section>
  );
}
