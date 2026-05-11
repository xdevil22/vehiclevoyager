import {LandingPageData} from "./types";

export const landingPage: LandingPageData = {
  slug: "car-rental-denver",
  title: "Car Rental Denver",
  seoTitle: "Denver Car Rental Deals | Compare Rental Rates in Denver, CO",
  seoDescription:
    "Compare Denver car rental deals from top providers, book airport pickup, and get local tips for your Colorado trip.",
  hero: {
    headline: "Denver Car Rental Made Simple",
    subheadline:
      "Compare trusted rental deals, secure the best airport pickup options, and explore Colorado from Denver.",
    buttons: [
      {label: "Compare Rentals", href: "/cars", style: "primary"},
      {label: "Check Prices", href: "#pricing", style: "secondary"},
    ],
  },
  sections: [
    {
      id: "overview",
      type: "content",
      title: "Renting a Car in Denver",
      subtitle: "Explore the Mile High City and Rocky Mountain adventures.",
      body: [
        "Denver is your gateway to Colorado's best attractions. Whether you're exploring downtown Denver, heading to the mountains, or visiting nearby national parks, a rental car gives you the freedom to travel at your own pace.",
        "This page helps you compare rental options, understand Denver pricing, and book the best vehicle for city exploration, mountain road trips, or outdoor adventures.",
      ],
    },
    {
      id: "why-choose",
      type: "featureGrid",
      title: "Why Choose Denver Car Rental",
      subtitle: "Smart reasons to compare rental quotes before you book.",
      items: [
        {
          title: "Denver International Airport pickup",
          description:
            "Easy pickup at DEN with convenient rental counters and fast checkout to start your trip.",
        },
        {
          title: "Mountain-ready vehicles",
          description:
            "Rent SUVs and all-wheel-drive options perfect for Colorado mountain roads and elevation.",
        },
        {
          title: "Flexible dropoff locations",
          description:
            "Return your rental in downtown Denver or surrounding areas with one-way rental options.",
        },
        {
          title: "Local Denver expertise",
          description:
            "Get practical tips for navigating downtown, mountain driving, and Rocky Mountain National Park access.",
        },
      ],
    },
    {
      id: "pricing",
      type: "featureGrid",
      title: "Denver Rental Pricing & Value",
      subtitle:
        "Find the best deal by comparing price, vehicle type, and pickup location.",
      items: [
        {
          title: "Economy to luxury options",
          description:
            "Choose from compact cars for city driving to SUVs for mountain adventures with transparent pricing.",
        },
        {
          title: "Mileage and fee transparency",
          description:
            "Compare unlimited mileage options and understand airport fees before booking your Denver rental.",
        },
        {
          title: "Seasonal pricing patterns",
          description:
            "Book ahead during high seasons (summer travel and ski season) to lock in better Denver rental rates.",
        },
      ],
    },
    {
      id: "tips",
      type: "tips",
      title: "Denver Car Rental Tips",
      subtitle: "Easy ways to save time and avoid extra costs.",
      items: [
        {
          title: "Prepare for elevation and mountain passes",
          description:
            "Denver is 5,280 feet high. Understand how altitude affects your vehicle and plan for mountain driving.",
        },
        {
          title: "Book unlimited mileage for road trips",
          description:
            "If exploring Rocky Mountain National Park or beyond, unlimited mileage saves money compared to per-mile charges.",
        },
        {
          title: "Check winter/weather requirements",
          description:
            "Winter months may require all-wheel-drive or tire chains. Book accordingly for Colorado mountain safety.",
        },
      ],
    },
    {
      id: "quick-links",
      type: "internalLinks",
      title: "Quick Denver Rental Links",
      links: [
        {label: "Compare local rentals", href: "/cars"},
        {label: "Booking tools and resources", href: "/booking-tools"},
        {label: "VehicleVoyager home page", href: "/"},
      ],
    },
    {
      id: "faq",
      type: "faq",
      title: "Denver Car Rental FAQs",
      items: [
        {
          question: "Do I need all-wheel drive to rent a car in Denver?",
          answer:
            "All-wheel-drive is not required year-round, but highly recommended for winter travel and mountain roads. Summer visitors can rent economy or sedan vehicles.",
        },
        {
          question: "Can I rent at Denver International Airport?",
          answer:
            "Yes — major rental companies operate at DEN. Airport rentals may have higher fees, so compare with downtown Denver location rates.",
        },
        {
          question: "What's included in typical Denver car rental insurance?",
          answer:
            "Check your credit card, travel insurance, or home insurance coverage. Many policies cover rental cars, so adding expensive rental company coverage may be unnecessary.",
        },
      ],
    },
    {
      id: "final-cta",
      type: "cta",
      title: "Ready to reserve your Denver rental?",
      subtitle:
        "Compare options now and lock in the best Denver car rental deal for your Colorado adventure.",
      buttons: [
        {label: "Compare Rentals", href: "/cars", style: "primary"},
        {label: "See Local Pricing", href: "#pricing", style: "secondary"},
      ],
    },
  ],
};
