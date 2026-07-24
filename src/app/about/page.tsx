import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Dr. Madhu Tanwar — dietitian and dermatologist offering integrated clinical care.",
};

const values = [
  {
    title: "Whole-person care",
    description:
      "Skin and nutrition are connected. We treat both with equal clinical rigor.",
  },
  {
    title: "Science, made clear",
    description:
      "Complex medical guidance translated into simple, confident next steps.",
  },
  {
    title: "Modern clinic experience",
    description:
      "Premium, calm appointments — virtual or in person — built around your life.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About"
        title="Dietitian. Dermatologist. One trusted clinician."
        description="Dr. Madhu Tanwar provides elevated medical care that treats health from the inside out."
      />

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-3 rounded-[2.2rem] bg-gradient-to-br from-emerald-400/25 to-teal-200/30 blur-md" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white shadow-[0_25px_50px_rgba(0,133,102,0.14)]">
              <Image
                src="/doctor.avif"
                alt="Dr. Madhu Tanwar"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet Dr. Madhu Tanwar
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Dr. Madhu Tanwar is a dietitian and dermatologist helping patients
              improve energy, digestion, and skin health through connected care
              plans — never disconnected advice.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Whether you need clearer skin, a sustainable meal plan, or both,
              you&apos;ll leave each session with clarity and confidence.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Credentials", "Dietitian · Dermatologist"],
                ["Focus", "Gut–skin & metabolic health"],
                ["Experience", "10+ years clinical care"],
                ["Sessions", "Virtual & in-clinic"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-border bg-surface px-5 py-4 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                    {label}
                  </p>
                  <p className="mt-1 font-semibold text-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="container-wide overflow-hidden rounded-[2rem] bg-cream px-6 py-14 sm:px-10 lg:rounded-[2.75rem] lg:px-14">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What we believe
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-[1.5rem] border border-white bg-white p-7 shadow-[0_12px_30px_rgba(0,133,102,0.06)]"
              >
                <h3 className="font-display text-xl font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-primary">
              Book with Dr. Madhu Tanwar
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
