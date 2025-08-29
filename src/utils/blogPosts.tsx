// src/utils/blogPosts.ts
import { JSX } from "react";
import { BASE_URL } from "./constants";

import Blog2 from "./blogpostdata/blog2";
import Blog1 from "./blogpostdata/blog1";
import Blog3 from "./blogpostdata/blog3";
export interface BlogPost {
  slug: string;
  mainTitle: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  content: JSX.Element;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "road-trip-ready-15-must-have-items-for-your-next-adventure",
    mainTitle: "Road Trip Ready - 15 Must-Have Items for Your Next Adventure",
    title: "Why the Right Gear Makes All the Difference on a Road Trip",
    excerpt:
      "There's something magical about the open road — winding through scenic routes, singing along to your favorite playlist, and discovering hidden gems along the way. But every great road trip needs more than just a full tank and a destination. The best road trip gear can make all the difference between a memorable adventure and a frustrating detour.",
    date: "Published on: April 11, 2025",
    image: "assets/custom-images/thor-motor-coachrvezy2024.jpg",
    seoTitle: "Road Trip Ready: 15 Essential Items for Every Journey",
    seoDescription:
      "Gear up for your next road trip with these 15 must-have items. From travel pillows to emergency kits, see the best picks for comfort and safety.",

    keywords:
      "road trip essentials, travel accessories for cars, best gear for car travel, road trip safety kits, travel gadgets, long drive must-haves, family car trip checklist",
    content: (
      <>
        <Blog2 />
      </>
    ),
  },
  {
    slug: "10-best-family-friendly-boat-rentals-in-fort-lauderdale",
    mainTitle: "10 Best Family-Friendly Boat Rentals in Fort Lauderdale",
    title: "Why Fort Lauderdale is Perfect for a Family Boating Day",
    excerpt:
      "Nicknamed the “Venice of America,” Fort Lauderdale offers an extensive network of scenic canals, calm coastal waters, and sandy beaches — all of which make it an ideal destination for a family boat rental. Whether you’re planning a birthday cruise, wildlife-watching trip, or just a relaxing day on the water, Fort Lauderdale has the right vessel for your crew.",
    date: "Published on: March 1, 2025",
    image: "assets/custom-images/lauderdale.jpg",
    seoTitle: "Best Family-Friendly Boat Rentals in Fort Lauderdale",
    seoDescription:
      "Discover 7 of the best luxury yachts to rent in Miami. See stunning photos, key features, and how to book your dream yacht through trusted partners.",

    keywords:
      "road trip essentials, travel accessories for cars, best gear for car travel, road trip safety kits, travel gadgets, long drive must-haves, family car trip checklist",

    content: (
      <>
        <Blog3 />
      </>
    ),
  },
  {
    slug: "top-7-luxury-yacht-rentals-in-miami",
    mainTitle:
      "Top 7 Luxury Yacht Rentals in Miami for an Unforgettable Getaway",

    title: "Top 7 Luxury Yacht Rentals in Miami - Luxury Getaways by Sea",
    excerpt:
      "Discover 7 of the best luxury yachts to rent in Miami. See stunning photos, key features, and how to book your dream yacht through trusted partners.",
    date: "Published on: February 3, 2025",
    image: "assets/custom-images/getmyboat-leopard.jpg",
    seoTitle: "Top 7 Luxury Yacht Rentals in Miami - Luxury Getaways by Sea",
    seoDescription:
      "Discover 7 of the best luxury yachts to rent in Miami. See stunning photos, key features, and how to book your dream yacht through trusted partners.",
    keywords:
      "road trip essentials, travel accessories for cars, best gear for car travel, road trip safety kits, travel gadgets, long drive must-haves, family car trip checklist",

    content: (
      <>
        <Blog1 />
      </>
    ),
  },
];
