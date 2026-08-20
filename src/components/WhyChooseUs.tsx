const focus = [
  "Patient-centered consultations",
  "Scientific, evidence-based treatments",
  "Personalized skincare solutions",
  "Modern dermatology techniques",
  "Comfortable and hygienic environment",
  "Transparent treatment recommendations",
  "Long-term skin wellness",
];

export function WhyChooseUs() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="container-wide grid items-start gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="section-label">What Makes Us Different</p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Makes Dr. Madhu Tanwar&apos;s Clinic Different?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Choosing a dermatologist is an important decision. Patients
            appreciate a clinic that combines medical expertise with
            compassionate care.
          </p>
          <p className="mt-4 text-[15px] font-semibold text-foreground">
            At Dr. Madhu Tanwar&apos;s Clinic, the focus is on:
          </p>
        </div>

        <div>
          <ul className="grid gap-0 border-t border-border">
            {focus.map((item, index) => (
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
            Every patient receives individual attention because lasting results
            begin with understanding each person&apos;s unique skin.
          </p>
        </div>
      </div>
    </section>
  );
}
