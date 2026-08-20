import Image from "next/image";
import Link from "next/link";
import type {
  ServicePageData,
  ServiceSection,
  ServiceBlock,
} from "@/content/services";

function Paragraph({ text, tone }: { text: string; tone: "dark" | "light" }) {
  const cls =
    tone === "light"
      ? "text-base leading-relaxed text-white/85 sm:text-lg"
      : "text-base leading-relaxed text-muted sm:text-lg";
  return <p className={cls}>{text}</p>;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-0 border-t border-border">
      {items.map((item, index) => (
        <li
          key={item + index}
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
  );
}

function SubGrid({
  subs,
  tone,
}: {
  subs: { title: string; body: string[] }[];
  tone: "dark" | "light";
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {subs.map((sub) => (
        <div
          key={sub.title}
          className={
            tone === "light"
              ? "rounded-xl border border-white/20 bg-white/10 p-6"
              : "rounded-xl border border-border bg-white p-6"
          }
        >
          <h3
            className={
              tone === "light"
                ? "font-display text-lg font-bold tracking-tight text-white"
                : "font-display text-lg font-bold tracking-tight text-foreground"
            }
          >
            {sub.title}
          </h3>
          <div className="mt-3 space-y-3">
            {sub.body.map((text, i) => (
              <p
                key={i}
                className={
                  tone === "light"
                    ? "text-[15px] leading-relaxed text-white/85"
                    : "text-[15px] leading-relaxed text-muted"
                }
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Render an ordered block list, grouping consecutive subs into a grid.
function Blocks({
  blocks,
  tone,
}: {
  blocks: ServiceBlock[];
  tone: "dark" | "light";
}) {
  const rendered: React.ReactNode[] = [];
  let i = 0;
  let key = 0;
  while (i < blocks.length) {
    const block = blocks[i];
    if (block.t === "sub") {
      const group: { title: string; body: string[] }[] = [];
      while (i < blocks.length && blocks[i].t === "sub") {
        const s = blocks[i] as Extract<ServiceBlock, { t: "sub" }>;
        group.push({ title: s.title, body: s.body });
        i += 1;
      }
      rendered.push(
        <div key={key++} className="mt-6">
          <SubGrid subs={group} tone={tone} />
        </div>,
      );
      continue;
    }
    if (block.t === "list") {
      rendered.push(
        <div key={key++} className="mt-6">
          <BulletList items={block.items} />
        </div>,
      );
      i += 1;
      continue;
    }
    // paragraph
    rendered.push(
      <div key={key++} className="mt-4 first:mt-5">
        <Paragraph text={block.text} tone={tone} />
      </div>,
    );
    i += 1;
  }
  return <>{rendered}</>;
}

function Section({ section }: { section: ServiceSection }) {
  if (section.variant === "cta") {
    return (
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="container-wide overflow-hidden rounded-2xl bg-brand px-8 py-12 sm:px-12 lg:py-16">
          <h2 className="font-display max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {section.title}
          </h2>
          <div className="max-w-2xl">
            <Blocks blocks={section.blocks} tone="light" />
          </div>
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

  return (
    <section className="border-b border-border bg-white px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
      <div className="container-wide max-w-3xl">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[2.1rem]">
          {section.title}
        </h2>
        <Blocks blocks={section.blocks} tone="dark" />
      </div>
    </section>
  );
}

export function ServicePage({ data }: { data: ServicePageData }) {
  return (
    <>
      <section className="border-b border-border bg-cream px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="container-wide grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <nav className="mb-5 flex items-center gap-2 text-sm text-muted">
              <Link href="/services" className="hover:text-foreground">
                Services
              </Link>
              <span aria-hidden>/</span>
              <span className="text-foreground">{data.short}</span>
            </nav>
            <h1 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
              {data.title}
            </h1>
            <div className="mt-5 space-y-4">
              {data.intro.map((text, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-muted sm:text-lg"
                >
                  {text}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Book Appointment
              </Link>
              <Link href="/services" className="btn-secondary">
                All Services
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-[0_25px_50px_rgba(0,133,102,0.14)] sm:aspect-[5/4]">
            <Image
              src={data.image}
              alt={data.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      {data.sections.map((section, i) => (
        <Section key={i} section={section} />
      ))}
    </>
  );
}
