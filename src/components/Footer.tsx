import Link from "next/link";

const columns = [
  {
    title: "Services",
    links: [
      { href: "/services/hydrafacial-gurgaon", label: "Hydrafacial" },
      { href: "/services/acne-treatment-gurgaon", label: "Acne Treatment" },
      { href: "/services/hair-fall-treatment-gurgaon", label: "Hair Fall Treatment" },
      { href: "/services/dietician-gurgaon", label: "Dietician" },
      { href: "/services", label: "All Services" },
    ],
  },
  {
    title: "Locations",
    links: [
      { href: "/locations/dietician-dlf-phase-2", label: "Dietician DLF Phase 2" },
      { href: "/locations/skin-clinic-sushant-lok", label: "Skin Clinic Sushant Lok" },
      {
        href: "/locations/hydrafacial-sector-25-gurugram",
        label: "Hydrafacial Sector 25",
      },
      { href: "/locations", label: "All Locations" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/contact", label: "Book Appointment" },
      { href: "/contact", label: "Contact" },
      { href: "/consultations", label: "Session Types" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-white">
      <div className="container-wide grid gap-10 px-5 py-14 sm:px-8 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.2fr_1fr] lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-sm font-bold text-brand">
              MT
            </span>
            <div>
              <p className="font-display text-lg font-bold text-white">
                Dr. Madhu Tanwar
              </p>
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-white/55">
                Dietitian · Dermatologist
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/65">
            Integrated dietitian and dermatology care for lasting health —
            from the plate to your skin.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={`${col.title}-${link.label}`}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-white/75 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col gap-2 px-5 py-5 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© {new Date().getFullYear()} Dr. Madhu Tanwar. All rights reserved.</p>
          <p>Dietitian · Dermatologist</p>
        </div>
      </div>
    </footer>
  );
}
