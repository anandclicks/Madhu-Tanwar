import Image from "next/image";

const concerns = [
  {
    title: "Acne and Acne Scars",
    description:
      "Acne can affect teenagers and adults alike. Professional treatment helps reduce active acne, prevent future breakouts, and improve acne scars through customized treatment plans.",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80",
    tag: "Acne",
  },
  {
    title: "Pigmentation and Uneven Skin Tone",
    description:
      "Melasma, tanning, dark spots, and post-inflammatory pigmentation can make skin appear dull. Advanced dermatological treatments help restore a brighter, more even complexion.",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=80",
    tag: "Pigment",
  },
  {
    title: "Hair Fall and Scalp Problems",
    description:
      "Hair thinning and excessive hair fall may result from genetics, hormonal imbalance, nutritional deficiencies, stress, or medical conditions. A detailed evaluation helps identify the root cause and recommend effective treatment.",
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=80",
    tag: "Hair",
  },
  {
    title: "Anti-Aging Solutions",
    description:
      "Fine lines, wrinkles, skin laxity, and loss of elasticity naturally occur with age. Modern aesthetic treatments help improve skin texture while maintaining natural-looking results.",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=80",
    tag: "Aging",
  },
  {
    title: "Skin Allergies and Infections",
    description:
      "Persistent itching, redness, fungal infections, eczema, psoriasis, and allergic reactions require proper diagnosis to ensure safe and effective treatment.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80",
    tag: "Skin Health",
  },
  {
    title: "Skin Brightening and Rejuvenation",
    description:
      "Professional skin rejuvenation treatments help improve skin texture, hydration, and overall radiance without compromising skin health.",
    image:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=80",
    tag: "Glow",
  },
];

export function ServicesPreview() {
  return (
    <section className="border-y border-border bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="container-wide">
        <div className="max-w-2xl">
          <p className="section-label">Skin Concerns We Help Treat</p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Skin Concerns We Help Treat
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Every person&apos;s skin is unique. That&apos;s why treatment should
            never be one-size-fits-all.
          </p>
          <p className="mt-3 text-[15px] font-semibold text-foreground">
            Some common concerns treated include:
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {concerns.map((concern, index) => (
            <div
              key={concern.title}
              className="group block bg-white transition hover:-translate-y-1"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={concern.image}
                  alt={concern.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute left-4 top-4 rounded-md bg-brand px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white">
                  {concern.tag}
                </span>
              </div>
              <div className="border border-t-0 border-border p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
                    {concern.title}
                  </h3>
                  <span className="font-display text-sm font-bold text-brand/40">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {concern.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
