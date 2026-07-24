import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Consultations",
  description:
    "1-on-1 dietitian and dermatology consultations for personalized care.",
};

const steps = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "A free 15-minute chat to understand your goals across nutrition, skin, or both.",
  },
  {
    step: "02",
    title: "Clinical Assessment",
    description:
      "A deep-dive into health history, skin concerns, labs, and lifestyle patterns.",
  },
  {
    step: "03",
    title: "Integrated Plan",
    description:
      "Clear next steps combining meal structure, skincare, and treatment priorities.",
  },
  {
    step: "04",
    title: "Ongoing Support",
    description:
      "Follow-ups to refine progress and keep momentum without overwhelm.",
  },
];

const sessionTypes = [
  {
    title: "Nutrition Consult",
    duration: "60 minutes",
    price: "$165",
    description:
      "Comprehensive dietitian assessment with a personalized starter nutrition plan.",
  },
  {
    title: "Dermatology Consult",
    duration: "45 minutes",
    price: "$185",
    description:
      "Medical skin evaluation with treatment roadmap and product guidance.",
  },
  {
    title: "Dual Specialty Session",
    duration: "Best value",
    price: "$249",
    description:
      "Combined nutrition + dermatology consult for complete inside-out care.",
  },
];

export default function ConsultationsPage() {
  return (
    <>
      <PageHero
        badge="Consultations"
        title="1-on-1 care that feels elevated."
        description="Private sessions with a dual-certified clinician — virtual or in-clinic — designed around your goals and pace."
      />

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How it works
            </h2>
            <p className="mt-4 text-base text-muted sm:text-lg">
              A calm, structured path from first conversation to lasting results.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => (
              <div
                key={item.step}
                className="rounded-[1.5rem] border border-emerald-100 bg-cream p-6 shadow-[0_10px_30px_rgba(0,133,102,0.05)]"
              >
                <span className="font-display text-sm font-bold text-brand">
                  {item.step}
                </span>
                <h3 className="font-display mt-3 text-lg font-bold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Session options
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {sessionTypes.map((session) => (
              <div
                key={session.title}
                className="flex flex-col rounded-[1.75rem] border border-border bg-white p-8 shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,133,102,0.1)]"
              >
                <p className="text-sm font-semibold text-brand">
                  {session.duration}
                </p>
                <h3 className="font-display mt-2 text-xl font-bold text-foreground">
                  {session.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                  {session.description}
                </p>
                <p className="font-display mt-6 text-3xl font-bold text-foreground">
                  {session.price}
                </p>
                <Link href="/contact" className="btn-primary mt-6 w-full">
                  Book Now
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
