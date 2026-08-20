const signs = [
  "Persistent acne",
  "Sudden hair fall",
  "Dark patches or pigmentation",
  "Chronic itching or rashes",
  "Skin allergies",
  "Moles that change in size or appearance",
  "Premature wrinkles",
  "Recurring skin infections",
  "Excessive dandruff or scalp concerns",
];

export function Testimonials() {
  return (
    <section className="border-y border-border bg-cream px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="container-wide">
        <div className="max-w-2xl">
          <p className="section-label">When to Visit</p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            When Should You Visit a Dermatologist?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Many people wait until a skin condition becomes severe before seeking
            professional help.
          </p>
          <p className="mt-3 text-[15px] font-semibold text-foreground">
            Consider consulting a dermatologist if you experience:
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {signs.map((sign, index) => (
            <div key={sign} className="flex items-center gap-4 bg-white p-6">
              <span className="font-display text-xl font-bold text-brand/40">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-[15px] font-medium text-foreground">{sign}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Early diagnosis often leads to more effective treatment and better
          outcomes.
        </p>
      </div>
    </section>
  );
}
