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
    <section className="border-b border-border bg-white px-5 py-10 sm:px-8 lg:px-10">
      <div className="container-wide">
        <p className="mb-6 text-center text-[0.7rem] font-bold uppercase tracking-[0.2em] text-muted">
          Trusted clinical partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 sm:gap-x-0">
          {partners.map((name, i) => (
            <div key={name} className="flex items-center">
              <span className="px-4 text-sm font-semibold text-foreground/70 sm:px-6 sm:text-[0.95rem]">
                {name}
              </span>
              {i < partners.length - 1 && (
                <span className="hidden h-4 w-px bg-border sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
