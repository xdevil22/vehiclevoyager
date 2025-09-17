import React, { useEffect, useState } from "react";
import vehicles from "../../../utils/vehicles.json";
import VehicleCard from "./VehicleCard";

import ClickAndBoatWidget from "../../../components/ClickAndBoatWidget";
import EagleRiderWidget from "../../../components/EagleRiderWidget";

import RoamlyBanner from "./RoamlyBanner";
import AmazonBanner from "../../../components/AmazonBanner";
import SailoBanner from "./SailoBanner";

type RV = {
  type: string;
  brand: string;
  name: string;
  image: string;
  url: string;
  price?: string | null;
};

const mockData: RV[] = [
  {
    type: "RV",
    brand: "Outdoorsy",
    name: "2014 Airstream International Onyx",
    image: "assets/custom-images/2014-airstream-onyx.webp",
    url: "https://outdoorsyinc.go2cloud.org/aff_c?offer_id=2&aff_id=2660&url=https://www.outdoorsy.com/rv-rental/phoenix_az/2014_airstream_international_205577-listing?address=Peoria%2C%20AZ&filter%5Btype%5D=trailer&price%5Bmin%5D=1100&result_number=2",
    price: null,
  },
  {
    type: "RV",
    brand: "Outdoorsy",
    name: "2018 Fleetwood Discovery",
    image: "assets/custom-images/2018-fleetwood-discovery.webp",
    url: "https://outdoorsyinc.go2cloud.org/aff_c?offer_id=2&aff_id=2660&url=https://www.outdoorsy.com/rv-rental/phoenix_az/2018_fleetwood_discovery_358466-listing?address=Peoria%2C%20AZ&price%5Bmin%5D=30000&result_number=14    ",
    price: null,
  },
  {
    type: "RV",
    brand: "Outdoorsy",
    name: "2022 Entegra Coach Accolade XL",
    image: "assets/custom-images/2022-entegra-coach-accolade-xl.webp",
    url: "https://outdoorsyinc.go2cloud.org/aff_c?offer_id=2&aff_id=2660&url=https://www.outdoorsy.com/rv-rental/phoenix_az/2022_entegra-coach_accolade-xl_462995-listing",
    price: null,
  },
  {
    type: "RV",
    brand: "Outdoorsy",
    name: "2021 Entegra Coach Qwest ",
    image: "assets/custom-images/2021-entegra-coach-qwest.webp",
    url: "https://outdoorsyinc.go2cloud.org/aff_c?offer_id=2&aff_id=2660&url=https://www.outdoorsy.com/rv-rental/glendale_az/2021_entegra-coach_qwest_370708-listing?address=Peoria%2C%20AZ&result_number=17",
    price: null,
  },
  {
    type: "RV",
    brand: "Outdoorsy",
    name: "2024 Ram Entegra Ethos ",
    image: "assets/custom-images/2024-ram-entegra-ethos.webp",
    url: "https://outdoorsyinc.go2cloud.org/aff_c?offer_id=2&aff_id=2660&url=https://www.outdoorsy.com/rv-rental/phoenix_az/2024_ram_entegra-ethos-20t_411657-listing?address=Peoria%2C%20AZ&result_number=6",
    price: null,
  },
];
const mockData2: RV[] = [
  {
    type: "RV",
    brand: "Outdoorsy",
    name: '"Pop-up Pioneer" Freedom 2280 FREE DELIVERY TO MYRTLE BEACH CAMPGROUNDS"',
    image: "assets/custom-images/rvezy-conquest.jpg",
    url: "https://www.outdoorsy.com",
    price: null,
  },
  {
    type: "RV",
    brand: "Outdoorsy",
    name: "Baby Rio | 5x8 Squaredrop Camper Trailer",
    image: "assets/custom-images/rvezy-conquest.jpg",
    url: "https://www.outdoorsy.com",
    price: null,
  },
  {
    type: "RV",
    brand: "Outdoorsy",
    name: "Waymaker Adventures - Coleman Rubicon 1400bh",
    image: "assets/custom-images/rvezy-conquest.jpg",
    url: "https://www.outdoorsy.com",
    price: null,
  },
  {
    type: "RV",
    brand: "Outdoorsy",
    name: "The Roaming Rockwood!",
    image: "assets/custom-images/rvezy-conquest.jpg",
    url: "https://www.outdoorsy.com",
    price: null,
  },
  {
    type: "RV",
    brand: "Outdoorsy",
    name: 'The "OG"',
    image: "assets/custom-images/rvezy-conquest.jpg",
    url: "https://www.outdoorsy.com",
    price: null,
  },
  {
    type: "RV",
    brand: "Outdoorsy",
    name: '2022 Mallard T180BH "Sprout"',
    image: "assets/custom-images/rvezy-conquest.jpg",
    url: "https://www.outdoorsy.com",
    price: null,
  },
  {
    type: "RV",
    brand: "Outdoorsy",
    name: "2018 Keystone Bullet",
    image: "assets/custom-images/rvezy-conquest.jpg",
    url: "https://www.outdoorsy.com",
    price: null,
  },
  {
    type: "RV",
    brand: "Outdoorsy",
    name: "Boondoggle",
    image: "assets/custom-images/rvezy-conquest.jpg",
    url: "https://www.outdoorsy.com",
    price: null,
  },
  {
    type: "RV",
    brand: "Outdoorsy",
    name: "Pioneer Bunkhouse 30S",
    image: "assets/custom-images/rvezy-conquest.jpg",
    url: "https://www.outdoorsy.com",
    price: null,
  },
  {
    type: "RV",
    brand: "Outdoorsy",
    name: "The Wandering Wildwood",
    image: "assets/custom-images/rvezy-conquest.jpg",
    url: "https://www.outdoorsy.com",
    price: null,
  },
  {
    type: "RV",
    brand: "Outdoorsy",
    name: "2018 Keystone Bullet",
    image: "assets/custom-images/rvezy-conquest.jpg",
    url: "https://www.outdoorsy.com",
    price: null,
  },
  {
    type: "RV",
    brand: "Outdoorsy",
    name: "2014 Keystone Hornet Hideout",
    image: "assets/custom-images/rvezy-conquest.jpg",
    url: "https://www.outdoorsy.com",
    price: null,
  },
];

const groupByType = (type: string) => {
  return (vehicles as RV[]).filter((v) => v.type === type);
};

const HomeCategories = () => {
  const categories = [
    "Cars",
    "Boats",
    "RVs and Motorhomes",
    "Motorcycles",
    "Private Jets",
  ];

  const categoryIcons: Record<string, string> = {
    Cars: "ri-car-line",
    Boats: "ri-ship-line",
    "RVs and Motorhomes": "ri-bus-line",
    Motorcycles: "ri-motorbike-line",
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

        const listings: RV[] = data?.data?.map((item: any) => ({
          type: "RV",
          brand: "Outdoorsy",
          name: item.attributes?.name || "No Name",
          image:
            item.attributes?.primary_image_url ||
            "https://via.placeholder.com/400x250.png?text=No+Image",
          url: `https://www.outdoorsy.com/rv/${item.id}`,
          price: null, // keeping null for consistency
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

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="p-6">
      {/* <div className="container mx-auto px-4">
        <SailoBanner />
      </div> */}
      {categories.map((category) => {
        let items: RV[] = groupByType(category);

        if (category === "RVs and Motorhomes") {
          // Merge vehicles.json RVs with fetched RVs
          items = [...items, ...rvs];
        }

        if (items.length === 0) return null;

        return (
          <section
            key={category}
            id={category.replace(/\s+/g, "-")}
            className="mb-10 scroll-mt-36">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold font-heading text-neutral-900">
                  <i
                    className={`${categoryIcons[category]} text-2xl text-black-500 mr-2`}></i>
                  {category}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {items.map((vehicle, idx) => (
                  <VehicleCard key={idx} {...vehicle} />
                ))}
              </div>
            </div>

            {/* {category === "Boats" && (
              <div className="container mx-auto px-4">
                <div className="my-4">
                  <ClickAndBoatWidget />
                </div>
              </div>
            )} */}

            {/* {category === "Motorcycles" && (
              <div className="container mx-auto px-4">
                <div className="my-4">
                  <EagleRiderWidget />
                </div>
              </div>
            )} */}
          </section>
        );
      })}

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-3">
          <div className="col-span-1 lg:col-span-2 bg-yellow-50 shadow-md rounded-lg border border-yellow-200 rounded-xl w-full overflow-x-auto">
            <AmazonBanner />
          </div>

          <div className="col-span-1 bg-white shadow-md rounded-lg flex items-center justify-center border border-gray-300 w-full">
            <RoamlyBanner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategories;
