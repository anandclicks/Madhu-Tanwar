"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "/", label: "Home", enabled: true },
  { href: "/nutrition", label: "Nutrition", enabled: false },
  { href: "/dermatology", label: "Skin Care", enabled: false },
  { href: "/consultations", label: "Consultations", enabled: false },
  { href: "/about", label: "About", enabled: false },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-border/60 bg-white/70 backdrop-blur-2xl">
        <div className="container-wide flex h-[4.4rem] items-center justify-between px-5 sm:px-8">
          <Logo />

          <nav className="hidden items-center gap-1 rounded-full border border-border/80 bg-cream/80 p-1.5 shadow-[0_8px_24px_rgba(0,133,102,0.06)] xl:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              const className = `rounded-full px-4 py-1.5 text-sm font-medium transition ${
                active
                  ? "bg-brand text-white shadow-[0_6px_16px_rgba(0,133,102,0.28)]"
                  : "text-muted hover:bg-white hover:text-foreground"
              }`;

              if (!link.enabled) {
                return (
                  <span
                    key={link.href}
                    role="link"
                    aria-disabled="true"
                    className={`${className} cursor-default`}
                  >
                    {link.label}
                  </span>
                );
              }

              return (
                <Link key={link.href} href={link.href} className={className}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden xl:block">
            <Link href="/contact" className="btn-primary btn-sm">
              Book Appointment
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-sm xl:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="border-t border-border bg-white px-5 py-4 xl:hidden">
            <nav className="flex flex-col gap-1">
              {links.map((link) => {
                const className =
                  "rounded-xl px-3 py-2.5 text-[15px] font-medium text-foreground hover:bg-cream";

                if (!link.enabled) {
                  return (
                    <span
                      key={link.href}
                      role="link"
                      aria-disabled="true"
                      className={`${className} cursor-default`}
                    >
                      {link.label}
                    </span>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={className}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-3 w-full"
              >
                Book Appointment
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
