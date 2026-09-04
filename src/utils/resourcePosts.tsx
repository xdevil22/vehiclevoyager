import React, { lazy, Suspense } from "react";
import { JSX } from "react";

const Resource1 = lazy(() => import("./resoursepostdata/resource1"));
const Resource2 = lazy(() => import("./resoursepostdata/resource2"));

export interface ResourcePost {
  resourceId: number;
  slug: string;
  mainTitle: string;
  subtitle: string;
  caption: string;
  date: string;
  excerpt: string | JSX.Element;

  seoTitle: string;
  seoDescription: string;
  keywords: string;

  content: JSX.Element;
}

export const resourcePosts: ResourcePost[] = [
  {
    resourceId: 1,
    slug: "vehicle-rental-insurance-guide",
    mainTitle: "Vehicle Rental Insurance and Protection Guide",

    subtitle: "How coverage works for cars, RVs, motorcycles and boats",
    caption:
      "Coverage varies by platform, vehicle, location and booking. Always review the checkout terms and rental agreement.",
    excerpt: (
      <>
        <p>
          Rental insurance is confusing because several products that sound
          similar can protect completely different things. Liability coverage
          pays for injury or property damage caused to someone else. A loss
          damage waiver may reduce what you owe for the rented vehicle, but it
          is usually not insurance. A platform protection plan may be a contract
          that limits financial responsibility only when every rule is followed.
        </p>
      </>
    ),
    date: "Last verified: August 25, 2026",

    seoTitle:
      "Vehicle Rental Insurance Guide: Cars, RVs, Motorcycles and Boats",
    seoDescription:
      "Understand rental insurance, damage waivers, liability coverage and protection plans for cars, RVs, motorcycles and boats before you book.",
    keywords:
      "vehicle rental, insurance, damage waiver, liability, protection plan",
    content: (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <Resource1 />
        </Suspense>
      </>
    ),
  },
  {
    resourceId: 2,
    slug: "vehicle-rental-requirements",
    mainTitle:
      "Vehicle Rental Age, License, Deposit and Insurance Requirements",

    subtitle:
      "A verified U.S. comparison of eleven major car, RV, motorcycle and boat-rental platforms",
    caption:
      "Policies can vary by vehicle, owner, location and trip. Confirm the checkout terms before booking.",
    excerpt: (
      <>
        <p>
          Renting a vehicle is not governed by one universal minimum age or one
          standard deposit. A 21-year-old may qualify for a Cruise America RV
          but not an RVezy rental. Turo changes its age requirement according to
          the value and class of the car. Motorcycle platforms require the
          appropriate endorsement and may ask younger riders to document several
          years of experience. Boat rentals are even more variable because the
          listing, captain arrangement and local boating laws all matter.
        </p>
      </>
    ),
    date: "Last verified: August 25, 2026",

    seoTitle: "Vehicle Rental Age & License Requirements (2026)",
    seoDescription:
      "Compare rental age, license, deposit and insurance rules for 11 major U.S. car, RV, motorcycle and boat-rental platforms, including Expedia and Turo.",
    keywords:
      "vehicle rental, age requirements, license requirements, deposit requirements, insurance requirements",
    content: (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <Resource2 />
        </Suspense>
      </>
    ),
  },
];
