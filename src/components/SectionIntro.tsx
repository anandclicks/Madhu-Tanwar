type SectionIntroProps = {
  badge: string;
  title: string;
  description: string;
};

export function SectionIntro({ badge, title, description }: SectionIntroProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="inline-flex items-center rounded-full border border-emerald-200 bg-white px-4 py-1.5 text-sm font-medium text-brand shadow-sm">
        {badge}
      </span>
      <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
        {description}
      </p>
    </div>
  );
}
