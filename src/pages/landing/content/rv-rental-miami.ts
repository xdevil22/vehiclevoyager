import {LandingPageData} from "./types";

export const landingPage: LandingPageData = {
  slug: "rv-rental-miami",
  title: "RV Rental Miami",
  seoTitle: "Miami RV Rental Deals | Compare RV Rates in Miami, Florida",
  seoDescription:
    "Compare Miami RV rental deals, book beachfront parking, and explore Florida Keys with your own mobile home.",
  hero: {
    headline: "RV Rental in Miami Made Simple",
    subheadline:
      "Compare trusted RV rental deals, book premium parking, and explore coastal Florida with complete freedom.",
    buttons: [
      {label: "Compare RVs", href: "/cars", style: "primary"},
      {label: "Check Prices", href: "#pricing", style: "secondary"},
    ],
  },
  sections: [
    {
      id: "overview",
      type: "content",
      title: "Renting an RV in Miami",
      subtitle:
        "Freedom to explore Florida's beaches and Keys from your mobile home.",
      body: [
        "Miami is an ideal RV home base for exploring South Florida beaches, the Florida Keys, and beyond. An RV rental gives you comfort, flexibility, and the independence to travel at your own pace.",
        "Compare Miami RV options and discover how to make the most of your Florida coastal adventure with proper planning and the right vehicle.",
      ],
    },
    {
      id: "why-choose",
      type: "featureGrid",
      title: "Why Choose Miami RV Rental",
      subtitle: "Smart reasons to compare rental quotes before you book.",
      items: [
        {
          title: "Gateway to Florida Keys",
          description:
            "Miami RV rentals put you close to Key West, unique Everglades, and scenic coastal routes.",
        },
        {
          title: "Full-hookup campground access",
          description:
            "South Florida has abundant RV parks with water, electrical, and sewage hookups for comfortable stays.",
        },
        {
          title: "Spacious family travel",
          description:
            "RVs provide sleeping, kitchen, and dining space—perfect for families exploring Florida together.",
        },
        {
          title: "Flexible parking and routes",
          description:
            "Discover beachfront parking options and plan spontaneous detours at your own pace.",
        },
      ],
    },
    {
      id: "pricing",
      type: "featureGrid",
      title: "Miami RV Rental Pricing & Value",
      subtitle:
        "Find the best deal based on RV size, amenities, and travel dates.",
      items: [
        {
          title: "Class A, B, and C options",
          description:
            "Compare affordable Class B motorhomes to large Class A rigs with premium amenities and kitchen space.",
        },
        {
          title: "Seasonal pricing for Florida",
          description:
            "Winter months (Dec-Mar) see higher rates. Summer offers savings but requires hurricane awareness planning.",
        },
        {
          title: "Mileage and fuel considerations",
          description:
            "Calculate fuel costs for RV travel—crucial for planning Keys trips and longer Florida routes.",
        },
      ],
    },
    {
      id: "tips",
      type: "tips",
      title: "Miami RV Rental Tips",
      subtitle: "Expert advice for Miami RV travel.",
      items: [
        {
          title: "Book campgrounds in advance",
          description:
            "Popular South Florida and Keys campgrounds fill quickly. Reserve early, especially for winter season.",
        },
        {
          title: "Plan for US-1 driving to the Keys",
          description:
            "The scenic but narrow Overseas Highway requires careful RV maneuvering. Check height and width restrictions.",
        },
        {
          title: "Prepare for humidity and weather",
          description:
            "AC and slide-outs are essential in South Florida. Understand hurricane season and travel insurance.",
        },
      ],
    },
    {
      id: "quick-links",
      type: "internalLinks",
      title: "Quick Miami RV Rental Links",
      links: [
        {label: "Compare all rentals", href: "/cars"},
        {label: "Booking tools and resources", href: "/booking-tools"},
        {label: "VehicleVoyager home page", href: "/"},
      ],
    },
    {
      id: "faq",
      type: "faq",
      title: "Miami RV Rental FAQs",
      items: [
        {
          question: "Can I drive my rental RV to the Florida Keys?",
          answer:
            "Yes, but check the US-1 route carefully for RV size limits. Some narrow areas require careful maneuvering. Verify your rental agreement allows Keys travel.",
        },
        {
          question: "What hookups are available at Miami RV parks?",
          answer:
            "Most South Florida RV parks offer full hookups (water, electric, sewage). Check directly with parks for specific amenities and availability.",
        },
        {
          question: "Is RV rental or purchase better for Florida travel?",
          answer:
            "Rental works best for vacations and testing RV life without ownership costs, storage, and maintenance responsibilities.",
        },
      ],
    },
    {
      id: "final-cta",
      type: "cta",
      title: "Ready to book your Miami RV adventure?",
      subtitle:
        "Compare RV options now and lock in the best Miami rental deal for your Florida Keys trip.",
      buttons: [
        {label: "Compare RVs", href: "/cars", style: "primary"},
        {label: "See Local Pricing", href: "#pricing", style: "secondary"},
      ],
    },
  ],
};
