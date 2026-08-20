export function DifferenceSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="container-wide grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="section-label">Skin Health</p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.7rem]">
            Why Healthy Skin Matters
          </h2>
        </div>

        <div className="max-w-2xl space-y-5 border-l-2 border-brand/30 pl-6 sm:pl-8">
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            Healthy skin is more than just appearance. It acts as your
            body&apos;s first line of defense against pollution, infections, and
            environmental damage. Daily exposure to UV rays, stress, unhealthy
            eating habits, hormonal changes, and aging can all affect your
            skin&apos;s health.
          </p>
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            Ignoring early signs of skin problems may lead to long-term concerns
            that become more difficult to treat. Consulting an experienced
            dermatologist ensures that your skin receives the care it deserves
            before minor concerns develop into bigger issues.
          </p>
        </div>
      </div>
    </section>
  );
}
