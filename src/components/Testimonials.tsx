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
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="container-wide">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label">Patient Stories</p>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Results that show — and feel better.
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-0 border border-border md:grid-cols-3">
          {testimonials.map((item, index) => (
            <blockquote
              key={item.name}
              className={`flex flex-col bg-white p-7 sm:p-8 ${
                index < testimonials.length - 1
                  ? "border-b border-border md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <span className="font-display text-5xl leading-none text-brand/30">
                “
              </span>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-foreground">
                {item.quote}
              </p>
              <footer className="mt-8 border-t border-border pt-5">
                <p className="text-sm font-bold text-foreground">{item.name}</p>
                <p className="mt-0.5 text-sm text-muted">{item.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
