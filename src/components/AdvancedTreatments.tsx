const treatments = [
  "Acne management",
  "Scar reduction",
  "Pigmentation correction",
  "Skin rejuvenation",
  "Hair restoration",
  "Anti-aging procedures",
  "Laser-based treatments",
  "Medical skincare solutions",
];

export function AdvancedTreatments() {
  return (
    <section className="border-y border-border bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="container-wide">
        <div className="max-w-2xl">
          <p className="section-label">Advanced Treatments</p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Advanced Treatments for Modern Skin Concerns
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Dermatology has evolved significantly over the years. Today, advanced
            technologies allow many skin concerns to be treated safely with
            minimal downtime.
          </p>
          <p className="mt-3 text-[15px] font-semibold text-foreground">
            Depending on your individual needs, dermatological care may include
            treatments designed for:
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((item, index) => (
            <div
              key={item}
              className="flex flex-col gap-4 bg-white p-6 transition hover:bg-brand-soft"
            >
              <span className="font-display text-3xl font-bold text-brand/25">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-[15px] font-semibold text-foreground">
                {item}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Each recommendation is based on clinical evaluation and your specific
          skin condition.
        </p>
      </div>
    </section>
  );
}
