export type LocationSub = {
  title: string;
  body: string[];
};

export type LocationSection = {
  badge?: string;
  title: string;
  body?: string[];
  list?: { lead?: string; items: string[] };
  subs?: LocationSub[];
  after?: string[];
  image?: { src: string; alt: string };
  variant?: "default" | "muted" | "cta";
};

export type LocationPageData = {
  slug: string;
  area: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  cardTitle: string;
  cardDescription: string;
  cardImage: string;
  hero: {
    badge: string;
    title: string;
    intro: string[];
    image: { src: string; alt: string };
  };
  sections: LocationSection[];
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const locations: LocationPageData[] = [
  {
    slug: "dietician-dlf-phase-2",
    area: "DLF Phase 2",
    category: "Nutrition & Diet",
    metaTitle: "Dietician DLF Phase 2 | Personalized Nutrition & Diet Consultation",
    metaDescription:
      "Looking for a dietician in DLF Phase 2, Gurgaon? Dr. Madhu Tanwar's Clinic offers personalized nutrition and diet consultation for healthier, sustainable eating.",
    cardTitle: "Dietician in DLF Phase 2",
    cardDescription:
      "Personalized nutrition and diet consultation for healthier eating, weight management, and sustainable habits.",
    cardImage: img("photo-1512621776951-a57141f2eefd"),
    hero: {
      badge: "DLF Phase 2 · Gurgaon",
      title:
        "Dietician DLF Phase 2: Personalized Nutrition and Diet Consultation",
      intro: [
        "Your diet plays an important role in supporting your overall health, energy, lifestyle, and long-term wellness. However, finding the right eating pattern can be challenging when your routine, preferences, health goals, and nutritional needs are different from those of other people.",
        "If you are looking for a dietician in DLF Phase 2, personalized professional guidance can help you understand your nutritional needs and develop practical eating habits that fit into your everyday life.",
        "Dr. Madhu Tanwar's Clinic provides personalized consultation for individuals looking for professional nutrition and diet guidance in Gurgaon. Whether your goal is healthier eating, weight management, or improving your overall nutritional habits, a consultation can help you take a more structured approach.",
      ],
      image: {
        src: img("photo-1490645935967-10de6ba17061"),
        alt: "Fresh, balanced meal prepared for a personalized diet plan",
      },
    },
    sections: [
      {
        badge: "Why Choose Us",
        title: "Why Choose a Dietician in DLF Phase 2?",
        body: [
          "Searching for a dietician DLF Phase 2 can be a convenient option if you live or work in and around the area.",
          "However, choosing a nutrition professional should involve more than simply finding a nearby clinic. Your dietary guidance should take your individual requirements into account rather than relying on a generic diet chart.",
        ],
        list: {
          lead: "Professional nutrition guidance can help you:",
          items: [
            "Understand your current eating habits",
            "Build balanced meals",
            "Make healthier food choices",
            "Plan meals around your daily routine",
            "Work toward healthy weight-management goals",
            "Identify areas where your diet may need improvement",
            "Develop sustainable eating habits",
          ],
        },
        after: [
          "The aim is to make healthy eating practical enough to continue in the long term.",
        ],
      },
      {
        badge: "Personalized Consultation",
        title: "Personalized Diet Consultation in DLF Phase 2",
        body: [
          "Every person's nutritional needs are different. Your age, lifestyle, physical activity, dietary preferences, health status, work routine, and personal goals can all influence your nutritional requirements.",
          "During a consultation, you may discuss your:",
        ],
        subs: [
          {
            title: "Eating Habits",
            body: [
              "Understanding what you normally eat throughout the day can help identify opportunities to improve nutritional balance.",
            ],
          },
          {
            title: "Lifestyle and Routine",
            body: [
              "Your work schedule, activity levels, sleep patterns, and daily routine can influence how easily you can follow a particular nutrition plan.",
            ],
          },
          {
            title: "Personal Goals",
            body: [
              "Your goals may include healthier eating, weight management, improving dietary quality, or supporting overall wellness.",
            ],
          },
          {
            title: "Food Preferences",
            body: [
              "A sustainable diet should take your preferences and practical limitations into account. A plan that is impossible to follow is unlikely to become a long-term habit.",
            ],
          },
        ],
      },
      {
        badge: "Weight Management",
        title: "Dietician for Weight Management",
        image: {
          src: img("photo-1512621776951-a57141f2eefd"),
          alt: "Nutrient-rich foods supporting healthy weight management",
        },
        body: [
          "Weight management is one of the common reasons people seek professional nutrition guidance.",
          "A personalized approach can focus on improving food quality, understanding portions, developing healthier meal patterns, and creating lifestyle habits that can be maintained over time.",
          "Extreme diets and unnecessary food restrictions are not suitable for everyone. A professional consultation can help you understand what approach may be appropriate for your individual needs.",
          "If weight changes are sudden or unexplained, or if you have an underlying health condition, additional medical evaluation may be appropriate.",
        ],
      },
      {
        badge: "Nutrition & Skin",
        title: "Nutrition and Skin Health",
        body: [
          "Nutrition can also form part of a broader approach to skin and overall wellness.",
          "A balanced diet provides nutrients required for normal body functions, including those involved in maintaining healthy skin. However, diet is only one of many factors that can influence skin health.",
          "If you have persistent acne, pigmentation, hair loss, or another skin concern, professional skin assessment may also be necessary.",
          "A combined approach can help you understand how nutrition and professional skin care may fit into your overall wellness plan.",
        ],
      },
      {
        badge: "Good Diet Plan",
        title: "What Makes a Good Diet Plan?",
        image: {
          src: img("photo-1498837167922-ddd27525d352"),
          alt: "A spread of vegetables, fruits, and whole grains",
        },
        body: ["A good nutrition plan should be realistic, balanced, and personalized."],
        list: {
          lead: "Depending on your individual requirements, it may include appropriate amounts of:",
          items: [
            "Vegetables and fruits",
            "Whole grains",
            "Protein-rich foods",
            "Healthy sources of dietary fat",
            "Adequate fluids",
            "Other nutrient-rich foods",
          ],
        },
        after: [
          "The exact foods and portions should depend on your individual nutritional needs and goals.",
          "Healthy eating does not necessarily require expensive ingredients or complicated recipes. Simple, consistent changes can often be easier to maintain than restrictive short-term diets.",
        ],
      },
      {
        badge: "Convenient Location",
        title: "Convenient Clinic Location for DLF Phase 2 Residents",
        variant: "muted",
        body: [
          "For people living or working in DLF Phase 2, choosing a clinic with a convenient primary clinic location can make it easier to attend consultations and maintain consistency.",
          "Convenience can matter when working toward long-term lifestyle changes. Regular follow-ups, when recommended, can help you review your progress and make appropriate adjustments to your nutrition plan.",
          "Before visiting, check the clinic's current appointment availability and location details.",
        ],
      },
      {
        badge: "Who Benefits",
        title: "Who Can Benefit from a Diet Consultation?",
        list: {
          lead: "Professional diet guidance may be useful if you want support with:",
          items: [
            "Healthier everyday eating",
            "Weight management",
            "Meal planning",
            "Improving overall nutritional balance",
            "Developing sustainable eating habits",
            "Nutrition alongside skin and wellness concerns",
            "Understanding how your current diet may be improved",
          ],
        },
        after: [
          "Your individual requirements will determine the most appropriate approach.",
        ],
      },
      {
        badge: "Book a Consultation",
        title: "Book a Diet Consultation Near DLF Phase 2",
        variant: "cta",
        body: [
          "If you are searching for a dietician DLF Phase 2, choosing personalized professional guidance can help you move beyond generic diets and online nutrition trends.",
          "Dr. Madhu Tanwar's Clinic can help you discuss your dietary habits, lifestyle, health goals, and nutritional concerns and explore an approach suited to your individual needs.",
          "The goal is not to follow a temporary diet but to develop healthier habits that can become part of your everyday lifestyle.",
        ],
        subs: [
          {
            title: "Take the First Step Towards Better Nutrition",
            body: [
              "Your diet does not need to be perfect. Small, realistic improvements can become meaningful when maintained consistently.",
              "Book a consultation with Dr. Madhu Tanwar to discuss your nutrition goals and explore personalized diet guidance near DLF Phase 2, Gurgaon.",
              "Schedule your appointment today and take the first step toward healthier and more sustainable eating habits.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "skin-clinic-sushant-lok",
    area: "Sushant Lok",
    category: "Skin & Cosmetic Care",
    metaTitle: "Skin Clinic Sushant Lok | Personalized Skin & Cosmetic Care in Gurgaon",
    metaDescription:
      "Searching for a skin clinic in Sushant Lok? Dr. Madhu Tanwar's Clinic offers personalized skin and cosmetic care — acne, pigmentation, and rejuvenation in Gurgaon.",
    cardTitle: "Skin Clinic in Sushant Lok",
    cardDescription:
      "Personalized skin and cosmetic care for acne, pigmentation, texture, and ageing concerns in Gurgaon.",
    cardImage: img("photo-1570172619644-dfd03ed5d881"),
    hero: {
      badge: "Sushant Lok · Gurgaon",
      title:
        "Skin Clinic Sushant Lok: Personalized Skin and Cosmetic Care in Gurgaon",
      intro: [
        "Healthy skin can influence both your appearance and your confidence. From acne and pigmentation to skin ageing, uneven texture, and other concerns, every person's skin is different and may require an individualized approach.",
        "If you are searching for a skin clinic Sushant Lok, finding professional care close to your home or workplace can make it easier to seek timely advice and stay consistent with your skincare or treatment plan.",
        "Dr. Madhu Tanwar's Clinic provides personalized skin and cosmetic care for individuals looking to understand their skin concerns and explore appropriate treatment options in Gurgaon.",
      ],
      image: {
        src: img("photo-1570172619644-dfd03ed5d881"),
        alt: "Professional skin and cosmetic care consultation",
      },
    },
    sections: [
      {
        badge: "Why Choose Us",
        title: "Why Choose a Skin Clinic in Sushant Lok?",
        body: [
          "Living or working near Sushant Lok makes access to professional skin care more convenient. Instead of relying solely on online skincare advice or experimenting with multiple products, a professional consultation can help you understand what your skin actually needs.",
        ],
        list: {
          lead: "A consultation may help address concerns such as:",
          items: [
            "Acne and recurring pimples",
            "Acne marks and scars",
            "Pigmentation and uneven skin tone",
            "Dull or tired-looking skin",
            "Uneven skin texture",
            "Signs of skin ageing",
            "Excessive oiliness or dryness",
            "Certain cosmetic skin concerns",
          ],
        },
        after: [
          "The appropriate treatment depends on your individual skin condition, medical history, lifestyle, and goals.",
        ],
      },
      {
        badge: "Personalized Care",
        title: "Personalized Skin Care for Your Individual Needs",
        image: {
          src: img("photo-1616394584738-fc6e612e71b9"),
          alt: "Close-up of healthy skin after personalized care",
        },
        body: [
          "No two people's skin is exactly the same. A skincare routine that works for one person may irritate another or simply fail to address the underlying concern.",
          "At a professional consultation, factors such as your skin type, existing concerns, previous treatments, current skincare products, and expectations can be considered before recommending a suitable approach.",
          "Depending on your needs, professional skin care may involve everyday skincare guidance, cosmetic procedures, or treatment for a specific skin condition.",
          "The goal is to choose an approach that is appropriate for your skin rather than simply recommending the latest trending treatment.",
        ],
      },
      {
        badge: "Treatments",
        title: "Skin Treatments You Can Explore",
        body: [
          "Depending on your individual concerns and professional assessment, different treatment options may be considered.",
        ],
        subs: [
          {
            title: "Acne Treatment",
            body: [
              "Persistent acne can be frustrating and may leave behind marks or scars. Professional evaluation can help determine the type and severity of acne and identify appropriate treatment options.",
            ],
          },
          {
            title: "Pigmentation Treatment",
            body: [
              "Dark spots, uneven pigmentation, tanning, and other changes in skin tone can have different causes. A professional assessment can help determine which approach may be suitable.",
            ],
          },
          {
            title: "Hydrafacial",
            body: [
              "Hydrafacial is a professional facial treatment involving cleansing, exfoliation, extraction, and hydration. It may be considered for certain cosmetic concerns such as dullness and surface congestion.",
            ],
          },
          {
            title: "Chemical Peels",
            body: [
              "Chemical peels use selected solutions to exfoliate the skin. Depending on the type of peel and individual skin condition, they may be considered for concerns such as uneven texture or selected pigmentation and acne-related concerns.",
            ],
          },
          {
            title: "Skin Rejuvenation",
            body: [
              "People concerned about fine lines, dullness, uneven texture, or other signs of ageing may explore professional skin rejuvenation options.",
            ],
          },
        ],
        after: [
          "Not every procedure is suitable for every person. A consultation should come before selecting a treatment.",
        ],
      },
      {
        badge: "Choosing a Clinic",
        title: "How to Choose the Right Skin Clinic",
        body: [
          "If you are comparing options for a skin clinic Sushant Lok, don't make your decision based only on distance or promotional offers.",
        ],
        list: {
          lead: "Consider whether the clinic:",
          items: [
            "Provides professional skin assessment",
            "Understands your individual concerns",
            "Explains treatment options clearly",
            "Discusses realistic expectations",
            "Follows appropriate hygiene practices",
            "Provides aftercare guidance",
            "Allows you to ask questions before treatment",
          ],
        },
        after: [
          "A good consultation should help you understand your skin and make an informed decision.",
        ],
      },
      {
        badge: "Convenient Access",
        title: "Convenient Access from Sushant Lok",
        variant: "muted",
        body: [
          "For residents and professionals in and around Sushant Lok, choosing a conveniently located clinic can make attending consultations and follow-ups easier.",
          "Before your appointment, use the clinic's current website location details and map directions to plan your route. Because local traffic and access points can change, checking the latest navigation information before travelling is recommended.",
          "If you are travelling from nearby parts of Gurgaon, planning your visit around local traffic conditions can also make your appointment more convenient.",
        ],
      },
      {
        badge: "When to Visit",
        title: "When Should You Visit a Skin Clinic?",
        body: [
          "You don't necessarily have to wait until a skin concern becomes severe before seeking professional advice.",
        ],
        list: {
          lead: "Consider scheduling a consultation if you experience:",
          items: [
            "Persistent or worsening acne",
            "Recurring skin irritation",
            "Unexplained pigmentation",
            "Significant changes in skin texture",
            "Persistent dryness or oiliness",
            "Acne scars",
            "Concerns about premature skin ageing",
            "A skin issue that does not improve with your regular skincare routine",
          ],
        },
        after: [
          "Early professional assessment may help you understand the concern and determine whether treatment is necessary.",
        ],
      },
      {
        badge: "Book a Consultation",
        title: "Book Your Skin Consultation in Gurgaon",
        variant: "cta",
        body: [
          "If you are searching online for a skin clinic Sushant Lok, choosing professional, personalized care can be an important first step toward managing your skin concerns.",
          "At Dr. Madhu Tanwar's Clinic, the focus is on understanding your individual requirements and discussing appropriate skin and cosmetic treatment options.",
          "Whether you are concerned about acne, pigmentation, uneven texture, ageing, or simply want professional guidance for your skincare routine, a consultation can help you understand your options.",
        ],
        subs: [
          {
            title: "Take the First Step Towards Healthier-Looking Skin",
            body: [
              "Your skin deserves care that is based on its individual needs rather than generic online advice.",
              "Book an appointment with Dr. Madhu Tanwar to discuss your concerns and explore personalized skin care options in Gurgaon.",
              "Check the clinic's latest location and appointment details before your visit.",
              "Schedule your consultation today and take the first step toward healthier, more confident-looking skin.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "hydrafacial-sector-25-gurugram",
    area: "Sector 25 Gurugram",
    category: "Hydrafacial Treatment",
    metaTitle: "Hydrafacial Sector 25 Gurugram | Professional Skin Rejuvenation",
    metaDescription:
      "Looking for Hydrafacial in Sector 25 Gurugram? Dr. Madhu Tanwar's Clinic offers professional Hydrafacial treatment for a fresh, hydrated, and radiant-looking complexion.",
    cardTitle: "Hydrafacial in Sector 25 Gurugram",
    cardDescription:
      "Professional Hydrafacial treatment — cleansing, exfoliation, extraction, and hydration for a fresh, radiant look.",
    cardImage: img("photo-1512290923902-8a9f81dc236c"),
    hero: {
      badge: "Sector 25 · Gurugram",
      title:
        "Hydrafacial Sector 25 Gurugram: Professional Skin Rejuvenation for a Fresh, Radiant Look",
      intro: [
        "Healthy-looking skin can sometimes feel difficult to maintain. Pollution, sun exposure, excess oil, dehydration, stress, and everyday environmental factors can leave the complexion looking dull or congested. Even with a regular skincare routine, you may occasionally want professional skin care to refresh your appearance.",
        "If you are searching for Hydrafacial Sector 25 Gurugram, a professional Hydrafacial treatment may be an option to consider for cleansing, exfoliation, extraction, and hydration.",
        "At Dr. Madhu Tanwar's Clinic, skin treatments are approached according to individual concerns and skin requirements. A consultation can help you understand whether Hydrafacial is suitable for your skin and what you can realistically expect from the treatment.",
      ],
      image: {
        src: img("photo-1512290923902-8a9f81dc236c"),
        alt: "Professional Hydrafacial skin rejuvenation treatment",
      },
    },
    sections: [
      {
        badge: "What Is It",
        title: "What Is a Hydrafacial?",
        body: [
          "Hydrafacial is a non-invasive cosmetic facial treatment that combines several skincare steps in a single procedure.",
        ],
        list: {
          lead: "Depending on the treatment protocol, it may involve:",
          items: [
            "Cleansing",
            "Exfoliation",
            "Gentle extraction",
            "Hydration",
            "Application of selected skincare solutions",
          ],
        },
        after: [
          "The treatment is designed to remove surface impurities while supporting a cleaner, smoother, and more hydrated-looking complexion.",
          "The exact treatment process can vary depending on your skin condition and the protocol followed by the clinic.",
        ],
      },
      {
        badge: "Why Consider It",
        title: "Why Consider Hydrafacial in Sector 25 Gurugram?",
        image: {
          src: img("photo-1596755389378-c31d21fd1273"),
          alt: "Refreshed, radiant skin after a Hydrafacial treatment",
        },
        body: [
          "For people living or working in and around Sector 25, choosing a conveniently accessible skin clinic can make professional skincare easier to fit into a busy routine.",
        ],
        list: {
          lead: "A Hydrafacial Sector 25 Gurugram treatment may be considered if you are concerned about:",
          items: [
            "Dull-looking skin",
            "Surface congestion",
            "Excess oil",
            "Dry or dehydrated-looking skin",
            "Uneven-looking texture",
            "Lack of radiance",
            "Buildup of surface impurities",
          ],
        },
        after: [
          "However, Hydrafacial is not a universal solution for every skin concern. Persistent acne, significant pigmentation, active inflammation, or other skin conditions may require professional assessment and a different treatment approach.",
        ],
      },
      {
        badge: "How It Works",
        title: "How Does a Hydrafacial Work?",
        body: ["A typical Hydrafacial procedure may involve several stages."],
        subs: [
          {
            title: "1. Cleansing",
            body: [
              "The skin is cleansed to remove makeup, oil, dirt, and other surface impurities.",
            ],
          },
          {
            title: "2. Exfoliation",
            body: [
              "A gentle exfoliation step helps remove dead skin cells from the skin's surface.",
            ],
          },
          {
            title: "3. Extraction",
            body: [
              "A specialized technique may be used to help remove surface congestion and impurities from pores.",
            ],
          },
          {
            title: "4. Hydration",
            body: [
              "Hydrating solutions and skincare ingredients may then be applied to help leave the skin feeling refreshed and moisturized.",
            ],
          },
        ],
        after: [
          "The exact products and steps can vary according to the individual's skin and the treatment protocol.",
        ],
      },
      {
        badge: "Benefits",
        title: "Potential Benefits of Hydrafacial",
        body: [
          "A professionally performed Hydrafacial may offer cosmetic benefits such as:",
        ],
        subs: [
          {
            title: "Fresher-Looking Skin",
            body: [
              "Removing surface buildup can help the complexion appear cleaner and more refreshed.",
            ],
          },
          {
            title: "Improved Hydration",
            body: [
              "The treatment includes a hydration-focused step, which may be helpful for skin that looks dry or dehydrated.",
            ],
          },
          {
            title: "Smoother-Looking Texture",
            body: [
              "Exfoliation can help improve the appearance of surface texture.",
            ],
          },
          {
            title: "Reduced Surface Congestion",
            body: [
              "The extraction component may help remove certain surface impurities and congestion.",
            ],
          },
          {
            title: "Enhanced Radiance",
            body: [
              "After treatment, some people notice that their skin looks brighter and more radiant.",
            ],
          },
        ],
        after: [
          "Individual results vary, and Hydrafacial should not be presented as a permanent solution for chronic skin conditions.",
        ],
      },
      {
        badge: "Suitability",
        title: "Is Hydrafacial Suitable for Every Skin Type?",
        body: [
          "Hydrafacial can be considered for many different skin types, but suitability still depends on the individual's skin condition.",
        ],
        list: {
          lead: "Before treatment, discuss any:",
          items: [
            "Active acne or inflammation",
            "Skin infections",
            "Severe sensitivity",
            "Allergies",
            "Recent cosmetic procedures",
            "Current skincare treatments",
            "Prescription skincare products",
          ],
        },
        after: [
          "If your skin is irritated or compromised, a professional may recommend postponing treatment until the skin has recovered.",
        ],
      },
      {
        badge: "Aftercare",
        title: "What Should You Do After Hydrafacial?",
        body: [
          "One advantage of Hydrafacial is that many people can return to their normal routine relatively quickly. However, your skin may still benefit from gentle care following treatment.",
        ],
        list: {
          lead: "You may be advised to:",
          items: [
            "Avoid unnecessarily touching the face",
            "Use gentle skincare products",
            "Apply sunscreen",
            "Limit excessive sun exposure",
            "Avoid aggressive exfoliation for a recommended period",
            "Follow the specific aftercare instructions provided",
          ],
        },
        after: [
          "Your post-treatment routine should be based on the procedure performed and your skin's individual response.",
        ],
      },
      {
        badge: "Comparison",
        title: "Hydrafacial vs Regular Facial",
        variant: "muted",
        body: [
          "A regular facial may include cleansing, massage, exfoliation, masks, and moisturizing.",
          "Hydrafacial differs because it uses a specialized treatment system designed to combine cleansing, exfoliation, extraction, and hydration.",
          "The better choice depends on your skin concerns and goals. If you're unsure, a professional consultation can help determine which option is more appropriate.",
        ],
      },
      {
        badge: "Local Convenience",
        title: "Local Convenience for Sector 25 Gurugram Residents",
        body: [
          "For people in and around Sector 25 Gurugram, choosing a nearby professional skin-care provider can make it easier to maintain a consistent skincare routine.",
          "Local convenience is particularly useful when you are considering treatments that may require follow-up sessions or ongoing skin-care guidance.",
          "Before visiting, check the clinic's latest address, appointment availability, and map directions on the official website. This is especially useful when travelling during busy Gurugram traffic hours.",
        ],
      },
      {
        badge: "Why Dr. Madhu Tanwar",
        title: "Why Choose Dr. Madhu Tanwar for Hydrafacial?",
        body: [
          "Choosing a provider for Hydrafacial Sector 25 Gurugram should be about more than finding the closest treatment.",
          "A professional approach should include understanding your skin concerns, discussing the treatment process, setting realistic expectations, and providing appropriate aftercare guidance.",
          "At Dr. Madhu Tanwar's Clinic, the focus is on personalized skin-care guidance and selecting treatments according to individual requirements.",
          "A consultation can help determine whether Hydrafacial is appropriate for your skin or whether another treatment may better address your concerns.",
        ],
      },
      {
        badge: "Book a Consultation",
        title: "Book Your Hydrafacial Consultation in Gurugram",
        variant: "cta",
        body: [
          "If you are searching for Hydrafacial Sector 25 Gurugram, professional consultation is a useful first step before choosing a treatment.",
          "Whether your goal is to refresh dull-looking skin, improve hydration, address surface congestion, or simply give your complexion a professional skincare boost, Hydrafacial may be worth discussing.",
        ],
        subs: [
          {
            title: "Give Your Skin Professional Care",
            body: [
              "Healthy-looking skin starts with understanding what your skin actually needs.",
              "Book a consultation with Dr. Madhu Tanwar to discuss your skin concerns and find out whether Hydrafacial is suitable for you.",
              "Check the clinic's current location and appointment details before visiting.",
              "Schedule your appointment today and take the first step toward a fresher, smoother, and more radiant-looking complexion.",
            ],
          },
        ],
      },
    ],
  },
];

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}
