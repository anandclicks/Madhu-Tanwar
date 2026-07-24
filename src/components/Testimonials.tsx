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
    <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="container-wide overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-500 via-brand to-teal-900 px-6 py-14 shadow-[0_25px_60px_rgba(0,133,102,0.25)] sm:px-10 lg:rounded-[2.75rem] lg:px-14 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur">
            Patient Stories
          </span>
          <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Results that show — and feel better.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="rounded-[1.5rem] border border-white/15 bg-white/10 p-7 backdrop-blur-md"
            >
              <p className="text-[15px] leading-relaxed text-white/95">
                “{item.quote}”
              </p>
              <footer className="mt-6">
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="text-sm text-white/70">{item.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
