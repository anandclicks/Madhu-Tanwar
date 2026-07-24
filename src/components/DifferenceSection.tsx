const differences = [
  {
    title: "Two specialties. One plan.",
    description:
      "Nutrition and dermatology work together — so your meals and skin treatments support the same goals.",
  },
  {
    title: "Clinical, not generic",
    description:
      "Every recommendation is grounded in medical expertise and tailored to your labs, lifestyle, and skin type.",
  },
  {
    title: "Results you can feel",
    description:
      "Clearer skin, steadier energy, and habits that last — with guidance that fits real life.",
  },
];

export function DifferenceSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="container-wide">
        <div className="max-w-2xl">
          <p className="section-label">Why Dr. Madhu Tanwar</p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.7rem]">
            Care that connects skin and nutrition.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            A modern clinic experience designed for lasting health — inside and
            out.
          </p>
        </div>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {differences.map((item, index) => (
            <div
              key={item.title}
              className="animate-fade-up grid gap-4 py-8 md:grid-cols-[7rem_1fr_1.4fr] md:items-start md:gap-10"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <span className="font-display text-4xl font-bold text-brand/25">
                0{index + 1}
              </span>
              <h3 className="font-display text-xl font-bold tracking-tight text-foreground md:pt-2">
                {item.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-muted md:pt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
