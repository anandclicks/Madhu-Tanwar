const partners = [
  "DermLab",
  "NutriCore",
  "SkinScience",
  "VitalPlate",
  "GlowHealth",
  "ClinicOne",
];

export function LogoBar() {
  return (
    <section className="px-5 py-12 sm:px-8">
      <div className="container-wide premium-card rounded-[1.5rem] px-6 py-8">
        <p className="mb-6 text-center text-[0.7rem] font-bold uppercase tracking-[0.2em] text-brand">
          Trusted clinical partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {partners.map((name) => (
            <span
              key={name}
              className="rounded-full border border-border bg-cream/80 px-5 py-2.5 text-sm font-semibold text-foreground/75 transition hover:border-brand/30 hover:text-brand"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
