import Link from "next/link";
import { Logo } from "./Logo";

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
    <footer className="mt-8 border-t border-border bg-gradient-to-b from-white to-cream/60">
      <div className="container-wide grid gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-10">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted">
            Integrated dietitian and dermatology care for lasting health —
            from the plate to your skin.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold tracking-wide text-foreground">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={`${col.title}-${link.label}`}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-muted transition hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border/80">
        <div className="container-wide flex flex-col gap-2 px-5 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© {new Date().getFullYear()} Dr. Madhu Tanwar. All rights reserved.</p>
          <p>Dietitian · Dermatologist · Evidence-based care</p>
        </div>
      </div>
    </footer>
  );
}
