import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Dermatology & Skin Care",
  description:
    "Medical dermatology care for acne, pigmentation, aging, and healthy skin barrier support.",
};

const treatments = [
  {
    title: "Acne & Breakouts",
    description:
      "Medical protocols plus nutrition support to calm inflammation and prevent scarring.",
  },
  {
    title: "Pigmentation & Glow",
    description:
      "Targeted care for uneven tone, sun damage, and dullness with barrier-safe routines.",
  },
  {
    title: "Anti-Aging Skin Health",
    description:
      "Evidence-based approaches for firmness, texture, and long-term skin resilience.",
  },
  {
    title: "Sensitive & Barrier Repair",
    description:
      "Gentle plans for redness, dryness, eczema-prone skin, and reactive barriers.",
  },
  {
    title: "Gut–Skin Axis Care",
    description:
      "Where diet and dermatology meet — addressing internal triggers behind skin flares.",
  },
  {
    title: "Custom Skincare Plans",
    description:
      "Product and treatment roadmaps matched to your skin type, climate, and lifestyle.",
  },
];

export default function DermatologyPage() {
  return (
    <>
      <PageHero
        badge="Dermatology"
        title="Clearer, healthier skin — clinically guided."
        description="Modern dermatology care with the added advantage of nutrition insight for results that last beyond topical fixes."
      />

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_25px_50px_rgba(0,133,102,0.14)] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/doctor.avif"
                alt="Dr. Madhu Tanwar — Dermatology consultation"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Dermatology with a deeper lens.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Skin reflects what happens inside. As a dermatologist and
              dietitian, I design treatment plans that address both surface
              symptoms and underlying nutritional factors.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Book Skin Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Skin concerns we treat
            </h2>
            <p className="mt-4 text-base text-muted sm:text-lg">
              Personalized dermatology plans for the issues that matter most.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((item) => (
              <div
                key={item.title}
                className="glass-card rounded-[1.5rem] p-7 transition hover:-translate-y-1"
              >
                <div className="mb-4 h-1.5 w-10 rounded-full bg-gradient-to-r from-emerald-400 to-brand" />
                <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
