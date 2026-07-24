import Image from "next/image";
import Link from "next/link";

export function AboutPreview() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="relative h-[440px] w-full overflow-hidden rounded-2xl sm:h-[480px]">
            <Image
              src="/doctor.avif"
              alt="Dr. Madhu Tanwar"
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
          </div>
        </div>

        <div>
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-white px-4 py-1.5 text-sm font-medium text-brand shadow-sm">
            Meet Dr. Madhu Tanwar
          </span>
          <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Dual expertise. Personal attention.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Dr. Madhu Tanwar is a dietitian and dermatologist helping patients
            improve health from the inside out — pairing clinical nutrition with
            modern skin care for results that last.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Dietitian & dermatologist",
              "Specialties in acne, gut-skin health & metabolic wellness",
              "Virtual and in-clinic consultations available",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[15px] font-medium text-foreground"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-brand text-white shadow-[0_4px_10px_rgba(0,133,102,0.3)]">
                  <svg
                    viewBox="0 0 16 16"
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M3.5 8.5l3 3 6-6" />
                  </svg>
                </span>
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
