import Image from "next/image";
import Link from "next/link";

export function AboutPreview() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
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
          <p className="section-label">Meet Dr. Madhu Tanwar</p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Dual expertise. Personal attention.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Dr. Madhu Tanwar is a dietitian and dermatologist helping patients
            improve health from the inside out — pairing clinical nutrition with
            modern skin care for results that last.
          </p>

          <ul className="mt-8 space-y-0 border-l-2 border-brand/30 pl-5">
            {[
              "Dietitian & dermatologist",
              "Specialties in acne, gut-skin health & metabolic wellness",
              "Virtual and in-clinic consultations available",
            ].map((item) => (
              <li
                key={item}
                className="border-b border-border py-3.5 text-[15px] font-medium text-foreground last:border-b-0"
              >
                {item}
              </li>
            ))}
          </ul>

          <Link href="/about" className="btn-primary mt-9">
            About Dr. Madhu Tanwar
          </Link>
        </div>
      </div>
    </section>
  );
}
