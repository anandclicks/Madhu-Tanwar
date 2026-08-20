import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { locations } from "@/content/locations";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Dr. Madhu Tanwar's Clinic locations: DLF Phase 2, Sushant Lok, and Sector 25 Gurugram.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        title="Locations"
        description="Choose a location to view details."
      />

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="container-wide grid gap-6 md:grid-cols-3">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="group block bg-white transition hover:-translate-y-1"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={loc.cardImage}
                  alt={loc.hero.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute left-4 top-4 rounded-md bg-brand px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white">
                  {loc.area}
                </span>
              </div>
              <div className="border border-t-0 border-border p-6">
                <h2 className="font-display text-lg font-bold leading-snug tracking-tight text-foreground">
                  {loc.hero.title}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {loc.hero.intro[0]}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  View location
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
