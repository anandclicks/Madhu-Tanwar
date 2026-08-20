import Image from "next/image";
import Link from "next/link";
import type { LocationPageData, LocationSection } from "@/content/locations";

function Paragraphs({
  items,
  className = "text-base leading-relaxed text-muted sm:text-lg",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <>
      {items.map((text, i) => (
        <p key={i} className={`${className} ${i > 0 ? "mt-4" : ""}`}>
          {text}
        </p>
      ))}
    </>
  );
}

function List({ lead, items }: { lead?: string; items: string[] }) {
  return (
    <div className="mt-6">
      {lead && (
        <p className="text-[15px] font-semibold text-foreground">{lead}</p>
      )}
      <ul className="mt-4 grid gap-0 border-t border-border">
        {items.map((item, index) => (
          <li
            key={item}
            className="flex items-center gap-4 border-b border-border py-3.5"
          >
            <span className="font-display text-sm font-bold text-brand/45">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="flex-1 text-[15px] font-medium text-foreground">
              {item}
            </span>
            <span className="text-brand" aria-hidden>
              ✓
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Subs({ subs }: { subs: NonNullable<LocationSection["subs"]> }) {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2">
      {subs.map((sub) => (
        <div
          key={sub.title}
          className="rounded-xl border border-border bg-white p-6"
        >
          <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
            {sub.title}
          </h3>
          <div className="mt-3">
            <Paragraphs
              items={sub.body}
              className="text-[15px] leading-relaxed text-muted"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function Section({ section }: { section: LocationSection }) {
  const cta = section.variant === "cta";

  if (cta) {
    return (
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="container-wide overflow-hidden rounded-2xl bg-brand px-8 py-12 sm:px-12 lg:py-16">
          <h2 className="font-display max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {section.title}
          </h2>
          {section.body && (
            <div className="mt-5 max-w-2xl">
              <Paragraphs
                items={section.body}
                className="text-base leading-relaxed text-white/85 sm:text-lg"
              />
            </div>
          )}
          {section.subs?.map((sub) => (
            <div key={sub.title} className="mt-8 max-w-2xl">
              <h3 className="font-display text-xl font-bold tracking-tight text-white">
                {sub.title}
              </h3>
              <div className="mt-3">
                <Paragraphs
                  items={sub.body}
                  className="text-base leading-relaxed text-white/85"
                />
              </div>
            </div>
          ))}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 text-sm font-semibold text-brand shadow-sm transition hover:bg-cream"
            >
              Book Appointment
            </Link>
            <Link
              href="/consultations"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/35 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Consultations
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const bg =
    section.variant === "muted"
      ? "bg-cream border-y border-border"
      : "bg-white";

  const content = (
    <>
      <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[2.1rem]">
        {section.title}
      </h2>
      {section.body && (
        <div className="mt-5">
          <Paragraphs items={section.body} />
        </div>
      )}
      {section.list && <List lead={section.list.lead} items={section.list.items} />}
      {section.after && (
        <div className="mt-6">
          <Paragraphs items={section.after} />
        </div>
      )}
    </>
  );

  return (
    <section className={`px-5 py-14 sm:px-8 lg:px-10 lg:py-20 ${bg}`}>
      <div className="container-wide">
        {section.image ? (
          <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div>{content}</div>
            <div className="relative order-first aspect-[4/3] w-full overflow-hidden rounded-2xl lg:order-last lg:sticky lg:top-28">
              <Image
                src={section.image.src}
                alt={section.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        ) : (
          <div className="max-w-3xl">{content}</div>
        )}
        {section.subs && (
          <div className={section.image ? "mt-2" : "max-w-3xl"}>
            <Subs subs={section.subs} />
          </div>
        )}
      </div>
    </section>
  );
}

export function LocationPage({ data }: { data: LocationPageData }) {
  return (
    <>
      <section className="border-b border-border bg-cream px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="container-wide grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <nav className="mb-5 flex items-center gap-2 text-sm text-muted">
              <Link href="/locations" className="hover:text-foreground">
                Locations
              </Link>
              <span aria-hidden>/</span>
              <span className="text-foreground">{data.area}</span>
            </nav>
            <h1 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-[2.7rem]">
              {data.hero.title}
            </h1>
            <div className="mt-5">
              <Paragraphs items={data.hero.intro} />
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Book Appointment
              </Link>
              <Link href="/consultations" className="btn-secondary">
                View Consultations
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-[0_25px_50px_rgba(0,133,102,0.14)] sm:aspect-[5/4]">
            <Image
              src={data.hero.image.src}
              alt={data.hero.image.alt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      {data.sections.map((section) => (
        <Section key={section.title} section={section} />
      ))}
    </>
  );
}
