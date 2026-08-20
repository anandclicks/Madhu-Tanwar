const provides = [
  "Accurate diagnosis by an experienced dermatologist",
  "Personalized treatment plans",
  "Advanced dermatological procedures",
  "Safe and hygienic clinical environment",
  "Modern equipment and evidence-based treatments",
  "Honest guidance without unnecessary procedures",
  "Long-term skin health solutions",
];

export function ChooseClinic() {
  return (
    <section className="border-y border-border bg-cream px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="container-wide grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="section-label">The Right Clinic</p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choosing the Right Skin Clinic Matters
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            When searching for a skin clinic near me, you&apos;ll find numerous
            options. However, not every clinic offers the same level of
            expertise, technology, and patient care.
          </p>
        </div>

        <div>
          <p className="text-[15px] font-semibold text-foreground">
            A trusted skin clinic should provide:
          </p>
          <ul className="mt-5 grid gap-0 border-t border-border">
            {provides.map((item, index) => (
              <li
                key={item}
                className="flex items-center gap-4 border-b border-border py-5"
              >
                <span className="font-display text-lg font-bold text-brand/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-[15px] font-medium text-foreground">
                  {item}
                </span>
                <span className="text-brand" aria-hidden>
                  ✓
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            At Dr. Madhu Tanwar&apos;s Clinic, every treatment begins with
            understanding your skin type, medical history, lifestyle, and
            individual concerns before recommending the most suitable treatment
            plan.
          </p>
        </div>
      </div>
    </section>
  );
}
