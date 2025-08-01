import React, {JSX, useEffect, useState} from "react";
import vehicles from "../../../utils/vehicles.json";
import VehicleCard from "./VehicleCard";

import ClickAndBoatWidget from "./ClickAndBoatWidget";
import EagleRiderWidget from "./EagleRiderWidget";
import fallback from "../../../assets/default-vehicle2.jpg";
import RoamlyBanner from "./RoamlyBanner";

type RV = {
  type: string;
  brand: string;
  name: string;
  image: string;
  url: string;
  price: string;
  people: number;
  location: string;
  features: string[];
};

const mockData: RV[] = [
  {
    type: "RV",
    brand: "Outdoorsy",
    name: "Cozy Camper Van",
    image: fallback,
    url: "https://www.outdoorsy.com",
    price: "$120/day",
    people: 4,
    location: "",
    features: ["Kitchen", "Shower", "Comfortable Beds"],
  },
  {
    type: "RV",
    brand: "Outdoorsy",
    name: "Luxury RV Adventure",
    image: fallback,
    url: "https://www.outdoorsy.com",
    price: "$200/day",
    people: 6,
    location: "",
    features: ["TV", "Luxury Interior", "Slide Out"],
  },
  {
    type: "RV",
    brand: "Outdoorsy",
    name: "Family Travel Trailer",
    image: fallback,
    url: "https://www.outdoorsy.com",
    price: "$150/day",
    people: 5,
    location: "",
    features: ["Bunk Beds", "Bathroom", "Dining Area"],
  },
  {
    type: "RV",
    brand: "Outdoorsy",
    name: "Cozy Camper Van",
    image: fallback,
    url: "https://www.outdoorsy.com",
    price: "$120/day",
    people: 4,
    location: "",
    features: ["Portable Toilet", "Kitchenette", "Heater"],
  },
  {
    type: "RV",
    brand: "Outdoorsy",
    name: "Luxury RV Adventure",
    image: fallback,
    url: "https://www.outdoorsy.com",
    price: "$200/day",
    people: 6,
    location: "",
    features: ["Bluetooth Audio", "Outdoor Shower", "Solar Panels"],
  },
];

const groupByType = (type: string) => {
  return vehicles.filter((v) => v.type === type);
};

const HomeCategories = () => {
  const categories = ["Car", "Boat", "RV", "Motorcycle", "Private Jets"];
  const categoryIcons: Record<string, string> = {
    Car: "ri-car-line",
    Boat: "ri-ship-line",
    RV: "ri-bus-line",
    Motorcycle: "ri-motorbike-line",
    "Private Jets": "ri-plane-line",
  };

  const [rvs, setRVs] = useState<RV[]>([]);

  useEffect(() => {
    const fetchRVs = async () => {
      try {
        const res = await fetch(
          `https://outdoorsyinc.go2cloud.org/aff_c?offer_id=2&aff_id=2660`,
          {
            headers: {
              Authorization:
                "Bearer e1fd8ca38a5481caedc751513afbd05a829abfe9575103f28de6f104ace9084f",
            },
          }
        );

        if (!res.ok || res.headers.get("content-type")?.includes("text/html")) {
          throw new Error("Invalid response");
        }

        const data = await res.json();

        const listings = data?.data?.map((item: any) => ({
          id: item.id,
          name: item.attributes?.name || "No Name",
          image:
            item.attributes?.primary_image_url ||
            "https://via.placeholder.com/400x250.png?text=No+Image",
          url: `https://www.outdoorsy.com/rv/${item.id}`,
        }));

        if (Array.isArray(listings) && listings.length > 0) {
          setRVs(listings);
        } else {
          setRVs(mockData);
        }
      } catch (err) {
        console.warn("Using mock data due to error:", err);
        setRVs(mockData);
      }
    };

    fetchRVs();
  }, []);

  return (
    <div className="p-6">
      {categories.map((category) => {
        let items = groupByType(category);

        if (category === "RV") {
          // Combine vehicles.json RVs with fetched RVs
          items = [...items, ...rvs];
        }

        if (items.length === 0) return null;

        return (
          <section key={category} className="mb-10">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold font-heading text-neutral-900">
                  <i
                    className={`${categoryIcons[category]} text-2xl text-black-500 mr-2`}></i>
                  {category}
                </h2>
                {/* <h2 className="text-3xl font-bold font-heading text-neutral-900 flex items-center gap-2">
                  {categoryIcons[category]}
                  {category}
                </h2> */}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {items.map((vehicle, idx) => (
                  <VehicleCard key={idx} {...vehicle} />
                ))}
              </div>
            </div>
          </section>
        );
      })}
      <div className="container mx-auto px-4">
        <ClickAndBoatWidget />
        <EagleRiderWidget />
        <RoamlyBanner />
      </div>
      {/* </div> */}
      {/* <div className="flex flex-wrap gap-6 items-start">
        <div className="flex-1 min-w-[280px] max-w-[400px]">
          <ClickAndBoatWidget />
        </div>

        <div className="flex-1 min-w-[280px] max-w-[750px]">
          <EagleRiderWidget />
        </div>

        <div className="flex-1 min-w-[280px] max-w-[320px]">
          <RoamlyBanner />
        </div>
      </div> */}
    </div>
  );
};

export default HomeCategories;
