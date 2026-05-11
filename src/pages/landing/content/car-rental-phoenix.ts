import {LandingPageData} from "./types";

export const landingPage: LandingPageData = {
  slug: "car-rental-phoenix",
  title: "Car Rental Phoenix",
  seoTitle: "Phoenix Car Rental Deals | Compare Rental Rates in Phoenix, AZ",
  seoDescription:
    "Compare Phoenix car rental deals from top providers, book airport pickup, and get local tips for your Arizona trip.",
  hero: {
    headline: "Phoenix Car Rental Deals | Best Rates & Airport Pickup",
    subheadline:
      "Find the perfect rental car for your Phoenix adventure. Compare prices from top providers, get airport pickup, and explore Arizona with ease.",
    buttons: [
      {label: "Compare Rentals", href: "/cars", style: "primary"},
      {label: "Check Prices", href: "#pricing", style: "secondary"},
    ],
  },
  sections: [
    {
      id: "pricing",
      type: "featureGrid",
      title: "Phoenix Car Rental Pricing",
      subtitle: "Compare rates and find the best deals for your trip.",
      items: [
        {
          title: "Economy Cars",
          description:
            "Starting from $25/day. Perfect for city driving and budget travelers.",
        },
        {
          title: "SUV & Trucks",
          description: "From $45/day. Ideal for families or desert adventures.",
        },
        {
          title: "Luxury Vehicles",
          description:
            "Starting from $75/day. Premium options for special occasions.",
        },
      ],
    },
    {
      id: "tips",
      type: "tips",
      title: "Phoenix Car Rental Tips",
      subtitle:
        "Make the most of your rental experience in the Valley of the Sun.",
      items: [
        {
          title: "Book Early",
          description:
            "Reserve your car 2-3 weeks in advance for the best rates, especially during peak seasons.",
        },
        {
          title: "Check Insurance",
          description:
            "Review your personal insurance coverage to avoid unnecessary rental insurance fees.",
        },
        {
          title: "Fuel Policy",
          description:
            "Most rentals require you to return the car with the same fuel level to avoid refueling charges.",
        },
        {
          title: "GPS & Navigation",
          description:
            "Consider renting a GPS device or using your phone's navigation for desert roads.",
        },
      ],
    },
    {
      id: "information-blocks",
      type: "featureGrid",
      title: "Essential Phoenix Rental Information",
      subtitle: "Everything you need to know about renting in Phoenix.",
      items: [
        {
          title: "Airport Pickup",
          description:
            "Phoenix Sky Harbor (PHX) offers convenient rental counters with quick access to major highways.",
        },
        {
          title: "Age Requirements",
          description:
            "Most companies require renters to be 21+ with a valid driver's license.",
        },
        {
          title: "Driving in Phoenix",
          description:
            "Be prepared for hot weather and heavy traffic. AC is essential, and sun protection is recommended.",
        },
        {
          title: "One-Way Rentals",
          description:
            "Available to nearby cities like Tucson or Flagstaff with reasonable drop-off fees.",
        },
      ],
    },
    {
      id: "faq",
      type: "faq",
      title: "Phoenix Car Rental FAQs",
      items: [
        {
          question: "What's the cheapest way to rent a car in Phoenix?",
          answer:
            "Book in advance, compare multiple providers, and consider off-airport locations for the lowest rates.",
        },
        {
          question: "Do I need a credit card for a Phoenix car rental?",
          answer:
            "Yes, most rental companies require a major credit card for the security deposit.",
        },
        {
          question: "Can I rent a car if I'm under 25?",
          answer:
            "Some providers allow it with a young driver fee, typically $25-35 per day.",
        },
        {
          question: "What's included in the rental price?",
          answer:
            "Base rate usually includes unlimited mileage, but check for taxes, fees, and optional insurance.",
        },
      ],
    },
  ],
};
