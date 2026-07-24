type SectionIntroProps = {
  badge: string;
  title: string;
  description: string;
};

export function SectionIntro({ badge, title, description }: SectionIntroProps) {
  return (
    <div className="max-w-2xl">
      <p className="section-label">{badge}</p>
      <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
        {description}
      </p>
    </div>
  );
}
