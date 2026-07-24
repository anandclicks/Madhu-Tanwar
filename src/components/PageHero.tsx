type PageHeroProps = {
  badge?: string;
  title: string;
  description: string;
};

export function PageHero({ badge, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-border bg-cream px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
      <div className="container-wide max-w-3xl">
        {badge && <p className="section-label">{badge}</p>}
        <h1 className="font-display mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
