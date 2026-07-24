import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Clinical Nutrition",
    description:
      "Custom meal plans, metabolic coaching, and science-backed eating strategies for energy and wellness.",
    href: "/nutrition",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Dermatology Care",
    description:
      "Medical skin treatments for acne, pigmentation, aging, and barrier repair — personalized to your skin.",
    href: "/dermatology",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Integrated Consults",
    description:
      "1-on-1 sessions that connect diet, lifestyle, and dermatology into one clear action plan.",
    href: "/consultations",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
  },
];

export function ServicesPreview() {
  return (
    <section className="bg-gradient-to-b from-surface via-cream/40 to-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="container-wide">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-white px-4 py-1.5 text-sm font-medium text-brand shadow-sm">
            Services
          </span>
          <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nutrition and skin care, beautifully aligned.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Choose focused support or combine specialties for complete
            transformation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group overflow-hidden rounded-[1.75rem] border border-border/80 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,133,102,0.12)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {service.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  Explore
                  <svg
                    viewBox="0 0 16 16"
                    className="h-4 w-4 transition group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
