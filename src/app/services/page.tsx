import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional skin, hair, cosmetic, and nutrition services at Dr. Madhu Tanwar's Clinic in Gurgaon.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Services" description="Choose a service to view details." />

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="container-wide grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col bg-white transition hover:-translate-y-1"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute left-4 top-4 rounded-md bg-brand px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white">
                  {service.short}
                </span>
              </div>
              <div className="flex flex-1 flex-col border border-t-0 border-border p-6">
                <h2 className="font-display text-lg font-bold leading-snug tracking-tight text-foreground">
                  {service.title}
                </h2>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                  {service.metaDescription}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  View service
                  <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
