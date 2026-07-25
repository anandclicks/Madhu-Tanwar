import Link from "next/link";

const columns = [
  {
    title: "Care",
    links: [
      { href: "/nutrition", label: "Nutrition" },
      { href: "/dermatology", label: "Skin Care" },
      { href: "/consultations", label: "Consultations" },
      { href: "/about", label: "About" },
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
    <footer className="mt-4">
      <div className="bg-brand">
        <div className="container-wide flex flex-col items-start justify-between gap-5 px-5 py-8 sm:flex-row sm:items-center sm:px-8">
          <div>
            <p className="font-display text-xl font-bold text-white sm:text-2xl">
              Ready to start your health journey?
            </p>
            <p className="mt-1 text-sm text-white/75">
              Book a consultation with Dr. Madhu Tanwar today.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-brand shadow-sm transition hover:bg-cream"
          >
            Book Appointment
          </Link>
        </div>
      </div>

      <div className="border-t border-border bg-cream">
        <div className="container-wide grid gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-sm font-bold text-white shadow-[0_8px_20px_rgba(0,133,102,0.25)]">
                MT
              </span>
              <div>
                <p className="font-display text-lg font-bold text-foreground">
                  Dr. Madhu Tanwar
                </p>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-brand">
                  Dietitian · Dermatologist
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">
              Integrated dietitian and dermatology care for lasting health —
              from the plate to your skin.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={`${col.title}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-[15px] font-medium text-foreground/75 transition hover:text-brand"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
              Contact
            </h3>
            <div className="mt-4 space-y-3 rounded-2xl bg-white p-5 shadow-[0_8px_24px_rgba(0,133,102,0.06)]">
              <p className="text-sm text-muted">
                <span className="block text-xs font-semibold uppercase tracking-wide text-brand">
                  Email
                </span>
                <a
                  href="mailto:hello@drmadhutanwar.com"
                  className="mt-1 font-medium text-foreground transition hover:text-brand"
                >
                  hello@drmadhutanwar.com
                </a>
              </p>
              <p className="text-sm text-muted">
                <span className="block text-xs font-semibold uppercase tracking-wide text-brand">
                  Hours
                </span>
                <span className="mt-1 block font-medium text-foreground">
                  Mon–Fri, 9am–6pm
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/80">
          <div className="container-wide flex flex-col gap-2 px-5 py-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p>
              © {new Date().getFullYear()} Dr. Madhu Tanwar. All rights reserved.
            </p>
            <p className="font-medium text-foreground/70">
              Dietitian · Dermatologist · Evidence-based care
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
