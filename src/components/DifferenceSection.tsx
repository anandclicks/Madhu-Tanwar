import { SectionIntro } from "./SectionIntro";

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
    <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <SectionIntro
        badge="Why Dr. Madhu Tanwar"
        title="Care that connects skin and nutrition."
        description="A modern clinic experience designed for lasting health — inside and out."
      />

      <div className="container-wide mt-14 grid gap-6 md:grid-cols-3">
        {differences.map((item, index) => (
          <div
            key={item.title}
            className={`glass-card animate-fade-up rounded-[1.75rem] p-8 ${
              index === 0
                ? "delay-100"
                : index === 1
                  ? "delay-200"
                  : "delay-300"
            }`}
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-brand text-lg font-bold text-white shadow-[0_10px_22px_rgba(0,133,102,0.3)]">
              {index + 1}
            </div>
            <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
              {item.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
