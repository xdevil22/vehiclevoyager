import {LandingPageData} from "./types";

/**
 * EXAMPLE: Car Rental Las Vegas
 * Created by copying car-rental-phoenix.ts and updating:
 * 1. slug → "car-rental-las-vegas"
 * 2. title → "Car Rental Las Vegas"
 * 3. All location-specific content
 */

export const landingPage: LandingPageData = {
  slug: "car-rental-las-vegas",
  title: "Car Rental Las Vegas",
  seoTitle:
    "Las Vegas Car Rental Deals | Compare Rental Rates in Las Vegas, NV",
  seoDescription:
    "Compare Las Vegas car rental deals from top providers, book airport pickup, and get local tips for your Vegas trip.",
  hero: {
    headline: "Las Vegas Car Rental Made Simple",
    subheadline:
      "Compare trusted rental deals, secure the best airport pickup options, and get on the road faster in Vegas.",
    buttons: [
      {label: "Compare Rentals", href: "/cars", style: "primary"},
      {label: "Check Prices", href: "#pricing", style: "secondary"},
    ],
  },
  sections: [
    {
      id: "overview",
      type: "content",
      title: "Renting a Car in Las Vegas",
      subtitle: "Explore the Strip and beyond with the right rental car.",
      body: [
        "Las Vegas is best explored by car. From the Strip to nearby Red Rock Canyon, Hoover Dam, and Valley of Fire, a rental gives you freedom, comfort, and flexibility.",
        "This page helps you compare rental options, understand Las Vegas pricing, and book the best vehicle for business travel, bachelor/bachelorette parties, or exciting Vegas adventures.",
      ],
    },
    {
      id: "why-choose",
      type: "featureGrid",
      title: "Why Choose Las Vegas Car Rental",
      subtitle: "Smart reasons to compare rental quotes before you book.",
      items: [
        {
          title: "Airport pickup at Harry Reid",
          description:
            "Quick arrival-level pickup options make it easy to grab your car and head to your hotel without extra wait.",
        },
        {
          title: "Flexible Vegas and area dropoff",
          description:
            "Choose one-way rentals between Vegas airport, downtown hotels, or nearby cities for easier travel planning.",
        },
        {
          title: "Wide vehicle selection",
          description:
            "Compare economy, SUV, and premium vehicles from multiple providers to match your Vegas style.",
        },
        {
          title: "Desert and landmark expertise",
          description:
            "Get practical Las Vegas-specific rental tips for Strip parking, desert driving, and nearby natural wonders.",
        },
      ],
    },
    {
      id: "pricing",
      type: "featureGrid",
      title: "Las Vegas Rental Pricing and Value",
      subtitle:
        "Find the best deal by comparing price, vehicle type, and pickup location.",
      items: [
        {
          title: "Daily rate comparisons",
          description:
            "See how compact, standard, and SUV rates differ so you can choose the best value for your Vegas trip length.",
        },
        {
          title: "Pay attention to fees",
          description:
            "Look for transparent airport, resort parking, and mileage charges before you book to avoid surprises.",
        },
        {
          title: "Book early for savings",
          description:
            "Las Vegas rental prices often rise closer to travel dates, especially during mega events and peak season.",
        },
      ],
    },
    {
      id: "tips",
      type: "tips",
      title: "Las Vegas Car Rental Tips",
      subtitle: "Easy ways to save time and avoid extra costs.",
      items: [
        {
          title: "Compare multiple providers",
          description:
            "Use comparison searches to find lower daily rates and better vehicle availability at Vegas airport.",
        },
        {
          title: "Choose the best pickup location",
          description:
            "Harry Reid International is convenient, but off-airport locations can offer lower rates and fewer airport fees.",
        },
        {
          title: "Check the mileage policy",
          description:
            "Make sure your rental includes unlimited miles if you plan to drive to Red Rock Canyon, Valley of Fire, or the Hoover Dam.",
        },
      ],
    },
    {
      id: "quick-links",
      type: "internalLinks",
      title: "Quick Las Vegas Rental Links",
      links: [
        {label: "Compare local rentals", href: "/cars"},
        {label: "Booking tools and resources", href: "/booking-tools"},
        {label: "VehicleVoyager home page", href: "/"},
      ],
    },
    {
      id: "faq",
      type: "faq",
      title: "Las Vegas Car Rental FAQs",
      items: [
        {
          question: "Do I need a credit card to rent a car in Las Vegas?",
          answer:
            "Most rental companies prefer a credit card for the security deposit, but some providers also accept debit cards with additional identity checks.",
        },
        {
          question: "Can I pick up my rental car at Las Vegas airport?",
          answer:
            "Yes — airport pickup is a popular option. Compare providers to find the best pickup counter and fee structure for your flight arrival.",
        },
        {
          question: "What should I know about Las Vegas rental insurance?",
          answer:
            "Check whether your travel insurance or credit card already covers rental cars before purchasing extra coverage at the counter.",
        },
      ],
    },
    {
      id: "final-cta",
      type: "cta",
      title: "Ready to reserve your Las Vegas rental?",
      subtitle:
        "Compare options now and lock in the best Las Vegas car rental deal for your next trip.",
      buttons: [
        {label: "Compare Rentals", href: "/cars", style: "primary"},
        {label: "See Local Pricing", href: "#pricing", style: "secondary"},
      ],
    },
  ],
};
