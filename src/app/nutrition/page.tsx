import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Nutrition",
  description:
    "Clinical nutrition and custom meal plans from a registered dietitian.",
};

const plans = [
  {
    name: "Essentials",
    price: "$89",
    period: "/ month",
    description: "Balanced weekly structure for everyday energy and wellness.",
    features: [
      "Weekly meal outline",
      "Grocery shopping list",
      "Email support",
      "Recipe swaps included",
    ],
  },
  {
    name: "Performance",
    price: "$149",
    period: "/ month",
    description: "Deeper personalization for metabolic and body-composition goals.",
    features: [
      "Fully customized macros",
      "3 weekly check-ins",
      "Habit tracking guidance",
      "Skin-supportive food focus",
    ],
    featured: true,
  },
  {
    name: "Restore",
    price: "$199",
    period: "/ month",
    description: "Clinical support for gut health, hormones, and recovery.",
    features: [
      "Condition-specific planning",
      "Lab-informed adjustments",
      "Priority messaging",
      "Gut-skin nutrition protocol",
    ],
  },
];

export default function NutritionPage() {
  return (
    <>
      <PageHero
        badge="Nutrition"
        title="Fuel your body. Support your skin."
        description="Personalized meal plans and clinical nutrition coaching designed around your health goals, lifestyle, and dermatology needs."
      />

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Nutrition that works with your skin.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Every plan considers digestion, inflammation, energy, and how food
              shows up on your skin — so progress is visible and sustainable.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Anti-inflammatory & barrier-supportive meal frameworks",
                "Vegetarian, gluten-free & allergy-friendly adaptations",
                "Batch-cooking friendly recipes",
                "Updated weekly based on your feedback",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px] font-medium text-foreground"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-brand text-white shadow-[0_4px_10px_rgba(0,133,102,0.3)]">
                    <svg
                      viewBox="0 0 16 16"
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M3.5 8.5l3 3 6-6" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(0,133,102,0.12)]">
            <Image
              src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80"
              alt="Healthy prepared nutrition meals"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Choose your nutrition plan
            </h2>
            <p className="mt-4 text-base text-muted sm:text-lg">
              Dietitian-led plans with optional dermatology alignment.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[1.75rem] p-8 shadow-[0_14px_40px_rgba(15,23,42,0.06)] ${
                  plan.featured
                    ? "bg-gradient-to-br from-emerald-500 to-brand text-white shadow-[0_20px_50px_rgba(0,133,102,0.3)]"
                    : "border border-border bg-white"
                }`}
              >
                <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    plan.featured ? "text-white/75" : "text-muted"
                  }`}
                >
                  {plan.description}
                </p>
                <p className="mt-6 flex items-end gap-1">
                  <span className="font-display text-4xl font-bold">
                    {plan.price}
                  </span>
                  <span
                    className={`mb-1 text-sm ${
                      plan.featured ? "text-white/70" : "text-muted"
                    }`}
                  >
                    {plan.period}
                  </span>
                </p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`text-sm ${
                        plan.featured ? "text-white/90" : "text-foreground"
                      }`}
                    >
                      · {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={
                    plan.featured
                      ? "mt-8 inline-flex h-11 w-full items-center justify-center rounded-full bg-white text-sm font-semibold text-brand shadow-[0_8px_20px_rgba(15,23,42,0.12)] transition hover:-translate-y-0.5"
                      : "btn-primary mt-8 w-full"
                  }
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
