const dietBenefits = [
  "Support collagen production for firmer, youthful-looking skin",
  "Reduce inflammation associated with acne and certain skin conditions",
  "Improve skin hydration and elasticity",
  "Promote faster skin repair and healing",
  "Strengthen hair and nails",
  "Enhance the overall effectiveness of skincare treatments",
];

export function RightNutrition() {
  return (
    <section className="border-y border-border bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="container-wide">
        <div className="max-w-3xl">
          <p className="section-label">The Right Nutrition</p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Healthy Skin Begins with the Right Nutrition
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            While professional dermatological treatments play a crucial role in
            achieving healthy skin, nutrition is equally important. Your skin
            reflects what you eat, and deficiencies in essential vitamins,
            minerals, healthy fats, and proteins can contribute to acne,
            dullness, pigmentation, premature aging, and even hair fall.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Many people searching for a dietician near me are surprised to learn
            how closely diet and skin health are connected. A qualified dietician
            can help create a personalized nutrition plan that supports your skin
            from within while complementing your dermatological treatment.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.7fr_1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Why Diet Matters for Skin Health
            </h3>
            <p className="mt-4 text-[15px] font-semibold text-foreground">
              A balanced diet can help:
            </p>
          </div>

          <div className="space-y-4">
            {dietBenefits.map((item, index) => (
              <div
                key={item}
                className="grid grid-cols-[auto_1fr] gap-4 border-b border-border pb-4 last:border-b-0"
              >
                <span className="font-display text-lg font-bold text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] leading-relaxed text-foreground">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          If you&apos;ve been looking for a dietician near me along with a
          trusted dermatologist, choosing a clinic that understands the
          relationship between nutrition and skin health can provide a more
          holistic approach to your wellness.
        </p>
      </div>
    </section>
  );
}
