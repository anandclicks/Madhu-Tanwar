const habits = [
  "Wear sunscreen every day.",
  "Drink enough water throughout the day.",
  "Eat a balanced, nutrient-rich diet.",
  "Get adequate sleep.",
  "Avoid picking acne or skin lesions.",
  "Use skincare products suitable for your skin type.",
  "Avoid excessive sun exposure.",
  "Consult a dermatologist before trying trending skincare products.",
];

export function HealthyHabits() {
  return (
    <section className="border-y border-border bg-cream px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="container-wide">
        <div className="max-w-2xl">
          <p className="section-label">Everyday Habits</p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everyday Habits That Keep Your Skin Healthy
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Small daily habits can make a significant difference in maintaining
            healthy skin.
          </p>
          <p className="mt-3 text-[15px] font-semibold text-foreground">
            Follow these simple tips:
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {habits.map((habit, index) => (
            <div
              key={habit}
              className="flex flex-col gap-3 border-t-2 border-brand/30 bg-white p-6"
            >
              <span className="font-display text-2xl font-bold text-brand">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-[15px] leading-relaxed text-foreground">
                {habit}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Consistency is more important than using multiple products.
        </p>
      </div>
    </section>
  );
}
