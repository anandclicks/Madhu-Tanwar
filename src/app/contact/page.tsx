import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Book Appointment",
  description:
    "Book a nutrition, dermatology, or dual-specialty consultation with Dr. Madhu Tanwar.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Get Started"
        title="Book your appointment."
        description="Tell us whether you need nutrition, dermatology, or integrated care — we’ll follow up within one business day."
      />

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="container-wide grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              What happens next
            </h2>
            <ul className="mt-8 space-y-6">
              {[
                {
                  title: "Share your goals",
                  text: "Nutrition, skin concerns, or both — include what matters most.",
                },
                {
                  title: "Personal reply",
                  text: "You’ll hear from the clinic with next steps and timing options.",
                },
                {
                  title: "Confirm your session",
                  text: "Choose virtual or in-clinic and begin your care plan.",
                },
              ].map((item, i) => (
                <li key={item.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-brand text-sm font-bold text-white shadow-[0_8px_16px_rgba(0,133,102,0.3)]">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="mt-1 text-[15px] text-muted">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-3 rounded-[1.5rem] border border-emerald-100 bg-cream p-6 text-sm text-muted shadow-sm">
              <p>
                <span className="font-semibold text-foreground">Email:</span>{" "}
                hello@drmadhutanwar.com
              </p>
              <p>
                <span className="font-semibold text-foreground">Hours:</span> Mon–Fri,
                9am–6pm
              </p>
              <p>
                <span className="font-semibold text-foreground">Care:</span> Nutrition ·
                Dermatology · Dual specialty
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
