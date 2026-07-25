const testimonials = [
  {
    quote:
      "Treating my skin and diet together finally made the difference. Clearer skin and more energy within weeks.",
    name: "Priya S.",
    role: "Acne & nutrition program",
  },
  {
    quote:
      "The meal plans were realistic, and the dermatology advice was precise. I feel supported at every step.",
    name: "Jordan M.",
    role: "Integrated care package",
    featured: true,
  },
  {
    quote:
      "Professional, modern, and genuinely caring. My digestion and complexion both improved.",
    name: "Elena R.",
    role: "Gut-skin consultation",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:py-24">
      <div className="container-wide overflow-hidden rounded-[2rem] bg-brand px-6 py-12 sm:px-10 lg:rounded-[2.5rem] lg:px-14 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-[#9af5c8]" />
            Patient Stories
          </span>
          <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Results that show — and feel better.
          </h2>
          <p className="mt-4 text-base text-white/75 sm:text-lg">
            Real patients. Real progress. Care that works from the inside out.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className={`flex flex-col rounded-[1.5rem] p-7 transition duration-300 hover:-translate-y-1 ${
                item.featured
                  ? "bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                  : "bg-white/95 shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex gap-0.5 text-brand" aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <span className="font-display text-4xl leading-none text-brand/20">
                  “
                </span>
              </div>

              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground">
                {item.quote}
              </p>

              <footer className="mt-7 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-soft font-display text-sm font-bold text-brand">
                  {item.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">{item.name}</p>
                  <p className="text-xs text-muted">{item.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
