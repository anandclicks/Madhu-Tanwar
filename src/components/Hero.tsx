import Image from "next/image";
import Link from "next/link";

const features = [
  "Acne & Scars",
  "Pigmentation",
  "Hair Fall",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="container-wide relative grid items-stretch lg:grid-cols-2">
        <div className="animate-fade-up flex flex-col justify-center px-5 py-14 sm:px-8 lg:px-10 lg:py-20 xl:pr-16">
          <p className="section-label">Best Skin Clinic Near Me</p>

          <h1 className="font-display mt-6 max-w-2xl text-[2rem] font-bold leading-[1.1] tracking-tight text-foreground sm:text-[2.4rem] lg:text-[2.9rem]">
            Looking for the best skin clinic near me? Your journey to healthy,{" "}
            <span className="text-brand">glowing skin</span> starts here.
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
            Your skin is one of the first things people notice about you, but
            more importantly, it reflects your overall health and well-being.
            Whether you&apos;re dealing with acne, pigmentation, hair fall, signs
            of aging, or simply want healthier skin, choosing the right skin
            specialist can make all the difference.
          </p>

          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
            If you&apos;ve been searching online for a{" "}
            <span className="font-semibold text-foreground">
              skin clinic near me
            </span>
            , you&apos;re likely looking for experienced professionals, advanced
            treatments, and personalized care that delivers real results. At{" "}
            <span className="font-semibold text-foreground">
              Dr. Madhu Tanwar&apos;s Clinic
            </span>
            , we believe every individual deserves healthy, confident skin
            backed by scientific diagnosis and evidence-based treatment.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-y border-border py-5">
            {features.map((item) => (
              <span
                key={item}
                className="text-sm font-semibold tracking-wide text-foreground"
              >
                <span className="mr-2 text-brand">+</span>
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Book Your Consultation
            </Link>
            <Link href="/about" className="btn-secondary">
              Meet Dr. Madhu Tanwar
            </Link>
          </div>
        </div>

        <div className="animate-fade-in delay-200 relative min-h-[420px] bg-background sm:min-h-[520px] lg:min-h-full">
          <Image
            src="/doctor.avif"
            alt="Dr. Madhu Tanwar — Dermatologist and Dietician"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute bottom-6 left-6 right-6 rounded-md bg-white/95 px-5 py-4 backdrop-blur-sm sm:left-auto sm:right-8 sm:w-auto">
            <p className="font-display text-base font-bold text-foreground">
              Dr. Madhu Tanwar
            </p>
            <p className="text-sm text-muted">Dermatologist · Dietician</p>
          </div>
        </div>
      </div>
    </section>
  );
}
