import Image from "next/image";

const concerns = [
  "Acne",
  "Hair fall",
  "Dry skin",
  "Premature aging",
  "Nutritional deficiencies affecting skin health",
];

export function NutritionSection() {
  return (
    <section className="bg-cream px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="container-wide grid items-start gap-12 lg:grid-cols-2 lg:gap-14">
        <div className="relative mx-auto w-full max-w-lg lg:sticky lg:top-28 lg:max-w-none">
          <div className="grid grid-rows-2 gap-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
              <Image
                src="/why-nutrition.png"
                alt="Fresh, nutrient-rich food for healthy skin"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
              <Image
                src="/why-dermatology.png"
                alt="Balanced nutrition supporting skin wellness"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="section-label">Healthy Skin Starts from Within</p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Healthy Skin Starts from Within
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-[1.05rem]">
            Beautiful skin isn&apos;t only about creams and treatments.
            Nutrition, hydration, sleep, stress management, and daily habits all
            contribute to skin health.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-[1.05rem]">
            This is why many patients also search for a dietician near me while
            looking for skincare solutions.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-[1.05rem]">
            A balanced diet rich in vitamins, minerals, antioxidants, healthy
            fats, and adequate protein supports collagen production, improves
            skin repair, and helps reduce inflammation.
          </p>

          <p className="mt-6 text-[15px] font-semibold text-foreground">
            Good nutrition may help support healthier skin in concerns such as:
          </p>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {concerns.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-base leading-relaxed text-muted sm:text-[1.05rem]">
            Combining professional dermatological care with healthy lifestyle
            habits often provides better long-term results.
          </p>
        </div>
      </div>
    </section>
  );
}
