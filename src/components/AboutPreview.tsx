import Image from "next/image";

export function AboutPreview() {
  return (
    <section className="bg-cream px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="container-wide grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -left-3 top-6 hidden h-[70%] w-3 bg-brand sm:block" />
          <div className="relative h-[460px] w-full overflow-hidden rounded-xl sm:h-[500px]">
            <Image
              src="/doctor.avif"
              alt="Dr. Madhu Tanwar"
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
          </div>
        </div>

        <div className="lg:pl-4">
          <p className="section-label">Personalized Care</p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Personalized Care Makes the Difference
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            No two patients have identical skin. Factors such as age, genetics,
            hormones, climate, occupation, stress, and lifestyle all influence
            skin health.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            At Dr. Madhu Tanwar&apos;s Clinic, treatment plans are personalized
            after a thorough skin assessment. This patient-first approach helps
            ensure treatments are appropriate, effective, and aligned with
            individual goals.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Rather than offering quick fixes, the focus remains on achieving
            long-term skin health through medical expertise and consistent care.
          </p>
        </div>
      </div>
    </section>
  );
}
