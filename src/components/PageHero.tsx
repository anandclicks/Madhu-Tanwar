type PageHeroProps = {
  badge?: string;
  title: string;
  description: string;
};

export function PageHero({ badge, title, description }: PageHeroProps) {
  return (
    <section className="px-5 pt-6 sm:px-8">
      <div className="container-wide overflow-hidden rounded-[2rem] bg-cream px-6 py-14 text-center shadow-[0_14px_40px_rgba(0,133,102,0.06)] sm:px-10 lg:rounded-[2.5rem] lg:py-20">
        {badge && (
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {badge}
          </span>
        )}
        <h1 className="font-display mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
