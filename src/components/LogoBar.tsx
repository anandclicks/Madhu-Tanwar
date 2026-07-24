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
    <section className="px-5 py-12 sm:px-8 lg:px-10">
      <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
        Trusted clinical partners
      </p>
      <div className="container-wide flex flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:gap-x-12">
        {partners.map((name) => (
          <div
            key={name}
            className="flex items-center gap-2.5 rounded-full border border-border bg-white px-4 py-2.5 shadow-sm"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-soft text-[10px] text-brand">
              ◆
            </span>
            <span className="text-sm font-semibold tracking-wide text-slate-600 sm:text-[15px]">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
