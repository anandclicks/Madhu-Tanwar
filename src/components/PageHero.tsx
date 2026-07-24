type PageHeroProps = {
  badge?: string;
  title: string;
  description: string;
};

export function PageHero({ badge, title, description }: PageHeroProps) {
  return (
    <section className="px-5 pt-5 sm:px-8 lg:px-10">
      <div className="container-wide hero-glow relative overflow-hidden rounded-[2rem] px-6 py-14 text-center shadow-[0_16px_40px_rgba(0,133,102,0.08)] sm:px-10 lg:rounded-[2.75rem] lg:py-20">
        <div className="pointer-events-none absolute -left-16 top-0 h-48 w-48 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-teal-300/25 blur-3xl" />
        {badge && (
          <span className="relative inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-brand shadow-sm">
            {badge}
          </span>
        )}
        <h1 className="font-display relative mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="relative mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
