import {LandingPageData} from "./types";

/**
 * LANDING PAGE TEMPLATE
 *
 * To create a new page:
 * 1. Copy this file and rename to: [category]-[location].ts
 *    Examples: car-rental-denver.ts, rv-rental-miami.ts
 * 2. Replace all [PLACEHOLDERS] with your content
 * 3. Update the slug, URLs, and section details
 * 4. The page will automatically appear at /{slug}
 */

export const landingPage: LandingPageData = {
  // Unique slug for the URL route (becomes /[slug])
  slug: "[category]-[location]",

  // Display title (used in breadcrumbs/navigation)
  title: "[Category] [Location]",

  // SEO: Page title for browser tab and search results
  seoTitle: "[Category] [Location] | Compare Deals | VehicleVoyager",

  // SEO: Meta description (155-160 chars ideal)
  seoDescription:
    "Compare [category] deals in [location]. Book trusted rentals, get local tips, and find the best [location] [category] rates.",

  // Hero section (top banner with headline + CTA buttons)
  hero: {
    headline: "[Category] in [Location] Made Simple",
    subheadline:
      "Compare trusted rental deals, secure the best pickup options, and get on the road faster in [Location].",
    buttons: [
      // Primary CTA - usually "Compare Rentals" or similar
      {label: "Compare Rentals", href: "/cars", style: "primary"},
      // Secondary CTA - usually "Check Prices" or anchor link
      {label: "Check Prices", href: "#pricing", style: "secondary"},
    ],
  },

  sections: [
    // ========== SECTION 1: OVERVIEW ==========
    {
      id: "overview",
      type: "content",
      title: "Renting [Category] in [Location]",
      subtitle: "[2-3 word tagline about the location/experience]",
      body: [
        "[First paragraph: Why you need a rental in this location. What makes it unique? What are the main use cases?]",
        "[Second paragraph: What this page helps with. What should users expect to learn or find?]",
      ],
    },

    // ========== SECTION 2: WHY CHOOSE THIS RENTAL TYPE ==========
    {
      id: "why-choose",
      type: "featureGrid",
      title: "Why Choose [Location] [Category] Rental",
      subtitle: "Smart reasons to compare rental quotes before you book.",
      items: [
        {
          title: "[Feature 1 - e.g., Airport pickup]",
          description:
            "[Why this matters and benefit to user. Be specific to location/vehicle type.]",
        },
        {
          title: "[Feature 2 - e.g., Flexible dropoff]",
          description:
            "[Why this matters and benefit to user. Be specific to location/vehicle type.]",
        },
        {
          title: "[Feature 3 - e.g., Wide selection]",
          description:
            "[Why this matters and benefit to user. Be specific to location/vehicle type.]",
        },
        {
          title: "[Feature 4 - e.g., Local advice]",
          description:
            "[Why this matters and benefit to user. Be specific to location/vehicle type.]",
        },
      ],
    },

    // ========== SECTION 3: PRICING GUIDE ==========
    {
      id: "pricing",
      type: "featureGrid",
      title: "[Location] [Category] Pricing & Value",
      subtitle:
        "Find the best deal by comparing price, vehicle type, and pickup location.",
      items: [
        {
          title: "[Pricing factor 1]",
          description:
            "[Context about this pricing factor and how to compare.]",
        },
        {
          title: "[Pricing factor 2]",
          description:
            "[Context about this pricing factor and how to compare.]",
        },
        {
          title: "[Pricing factor 3]",
          description:
            "[Context about this pricing factor and how to compare.]",
        },
      ],
    },

    // ========== SECTION 4: LOCATION/VEHICLE-SPECIFIC TIPS ==========
    {
      id: "tips",
      type: "tips",
      title: "[Location] [Category] Rental Tips",
      subtitle: "Easy ways to save time and avoid extra costs.",
      items: [
        {
          title: "[Tip 1]",
          description:
            "[Practical advice specific to this location/vehicle combination.]",
        },
        {
          title: "[Tip 2]",
          description:
            "[Practical advice specific to this location/vehicle combination.]",
        },
        {
          title: "[Tip 3]",
          description:
            "[Practical advice specific to this location/vehicle combination.]",
        },
      ],
    },

    // ========== SECTION 5: QUICK LINKS (Optional) ==========
    {
      id: "quick-links",
      type: "internalLinks",
      title: "Quick [Location] Rental Links",
      links: [
        {label: "Compare local rentals", href: "/cars"},
        {label: "Booking tools and resources", href: "/booking-tools"},
        {label: "VehicleVoyager home page", href: "/"},
      ],
    },

    // ========== SECTION 6: FAQ ==========
    {
      id: "faq",
      type: "faq",
      title: "[Location] [Category] Rental FAQs",
      items: [
        {
          question: "[Frequently asked question 1?]",
          answer: "[Answer with specific details about location/vehicle type.]",
        },
        {
          question: "[Frequently asked question 2?]",
          answer: "[Answer with specific details about location/vehicle type.]",
        },
        {
          question: "[Frequently asked question 3?]",
          answer: "[Answer with specific details about location/vehicle type.]",
        },
      ],
    },

    // ========== SECTION 7: FINAL CTA ==========
    {
      id: "final-cta",
      type: "cta",
      title: "Ready to reserve your [Location] [Category]?",
      subtitle:
        "Compare options now and lock in the best [Location] [Category] rental deal for your next trip.",
      buttons: [
        {label: "Compare Rentals", href: "/cars", style: "primary"},
        {label: "See Local Pricing", href: "#pricing", style: "secondary"},
      ],
    },
  ],
};
