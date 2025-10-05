import {JSX} from "react";
import {BASE_URL} from "./constants";

import Blog2 from "./blogpostdata/blog2";
import Blog1 from "./blogpostdata/blog1";
import Blog3 from "./blogpostdata/blog3";
import Blog4 from "./blogpostdata/blog4";
import Blog5 from "./blogpostdata/blog5";
import Blog6 from "./blogpostdata/blog6";
export interface BlogPost {
  slug: string;
  mainTitle: string;
  title: string;
  excerpt: string | JSX.Element;
  date: string;
  image: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  content: JSX.Element;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "exotic-car-rentals-in-las-vegas",
    mainTitle: "Exotic Car Rentals in Las Vegas - Drive Your Dream Ride",

    title: "Why Exotic Car Rentals Are the Perfect Fit for Las Vegas",
    excerpt:
      "Las Vegas isn't just about dazzling casinos, world-class shows, and neon nights — it's also the ultimate playground for car enthusiasts. Imagine cruising the Strip in a Lamborghini, posing in front of the Bellagio in a Ferrari, or taking a McLaren out to Red Rock Canyon. With a wide variety of exotic and luxury car rental services in Las Vegas, turning heads is just a reservation away.",
    date: "Published on: April 22, 2025",
    image: "assets/blogs/exotic-car-rentals.webp",
    seoTitle: "Why Exotic Car Rentals Are the Perfect Fit for Las Vegas",
    seoDescription:
      "Las Vegas isn't just about dazzling casinos, world-class shows, and neon nights — it's also the ultimate playground for car enthusiasts. Imagine cruising the Strip in a Lamborghini, posing in front of the Bellagio in a Ferrari, or taking a McLaren out to Red Rock Canyon. With a wide variety of exotic and luxury car rental services in Las Vegas, turning heads is just a reservation away.",
    keywords:
      "Dream Ride, Exotic Car Rentals, best gear for car travel, road trip safety kits, travel gadgets, long drive must-haves, family car trip checklist",

    content: (
      <>
        <Blog4 />
      </>
    ),
  },
  {
    slug: "road-trip-ready-15-must-have-items-for-your-next-adventure",
    mainTitle: "Road Trip Ready - 15 Must-Have Items for Your Next Adventure",
    title: "Why the Right Gear Makes All the Difference on a Road Trip",
    excerpt:
      "There's something magical about the open road — winding through scenic routes, singing along to your favorite playlist, and discovering hidden gems along the way. But every great road trip needs more than just a full tank and a destination. The best road trip gear can make all the difference between a memorable adventure and a frustrating detour.",
    date: "Published on: April 11, 2025",
    image: "assets/custom-images/rvs/thor-motor-coachrvezy2024.webp",
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
    slug: "7best-rv-rentals-in-phoenix",
    mainTitle: "7 Best RV Rentals in Phoenix for Desert Adventures",

    title: "Why Phoenix is a Top RV Rental Destination",
    excerpt:
      "Phoenix is more than just a gateway to the desert — it's the starting line for some of America's most iconic road trip routes. Whether you're heading north to Sedona and the Grand Canyon or cruising south toward Tucson and Organ Pipe National Monument, an RV rental in Phoenix gives you the freedom to explore Arizona in comfort and style.",
    date: "Published on: April 2, 2025",
    image: "assets/blogs/phoenix-desert.webp",
    seoTitle: "Best RV Rentals in Phoenix - Explore the Desert in Comfort",
    seoDescription:
      "Find the perfect RV for your Phoenix adventure. Compare features, sizes, and booking options.",
    keywords:
      "Dream Ride, Exotic Car Rentals, best gear for car travel, road trip safety kits, travel gadgets, long drive must-haves, family car trip checklist",

    content: (
      <>
        <Blog5 />
      </>
    ),
  },
  {
    slug: "motorcycle-rentals-in-los-angeles",
    mainTitle: "Motorcycle Rentals in Los Angeles - Top 5 Picks",

    title: "Why Ride a Motorcycle in Los Angeles?",
    excerpt: (
      <>
        Los Angeles is one of the best cities in the world for motorcycle
        riding. From iconic roads like the{" "}
        <strong>Pacific Coast Highway</strong> and{" "}
        <strong>Mulholland Drive</strong> to scenic escapes like{" "}
        <strong>Angeles Crest Highway</strong>, LA offers riders a thrilling mix
        of coastal views, canyon twists, and smooth open roads.
      </>
    ),
    date: "Published on: March 27, 2025",
    image: "assets/blogs/motorcycle-rental-los-angeles.webp",
    seoTitle: "Best Motorcycle Rentals in Los Angeles - Top 5 Bikes to Ride",
    seoDescription:
      "See the top motorcycle rentals in LA, from Harleys to sportbikes, with links to trusted booking partners.",
    keywords: "motorcycle rental Los Angeles",

    content: (
      <>
        <Blog6 />
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
    image: "assets/custom-images/lauderdale.webp",
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
    image: "assets/custom-images/boats/getmyboat-leopard.webp",
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
