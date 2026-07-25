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
    tag: "Nutrition",
  },
  {
    title: "Dermatology Care",
    description:
      "Medical skin treatments for acne, pigmentation, aging, and barrier repair — personalized to your skin.",
    href: "/dermatology",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
    tag: "Skin",
  },
  {
    title: "Integrated Consults",
    description:
      "1-on-1 sessions that connect diet, lifestyle, and dermatology into one clear action plan.",
    href: "/consultations",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    tag: "Consult",
  },
];

export function ServicesPreview() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:py-24">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label mx-auto w-fit">Services</p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nutrition and skin care, beautifully aligned.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Choose focused support or combine specialties for complete
            transformation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="premium-card group block overflow-hidden rounded-[1.75rem] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_50px_rgba(0,133,102,0.12)]"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white shadow-sm">
                  {service.tag}
                </span>
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                    {service.title}
                  </h3>
                  <span className="font-display text-sm font-bold text-brand/35">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {service.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Explore
                  <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
