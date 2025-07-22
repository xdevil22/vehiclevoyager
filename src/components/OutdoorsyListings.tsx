import { useEffect, useState } from "react";
import fallback from "../assets/default-vehicle.png"; // with extension
import RoamlyBanner from "./RoamlyBanner";
type RV = {
  id: string;
  name: string;
  image: string;
  url: string;
};

const mockData: RV[] = [
  {
    id: "1",
    name: "Cozy Camper Van",
    image: fallback,
    url: "https://www.outdoorsy.com/rv/1",
  },
  {
    id: "2",
    name: "Luxury RV Adventure",
    image: fallback,
    url: "https://www.outdoorsy.com/rv/2",
  },
  {
    id: "3",
    name: "Family Travel Trailer",
    image: fallback,
    url: "https://www.outdoorsy.com/rv/3",
  },
];

const OutdoorsyListings = () => {
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

        // If fetch fails with CORS or bad response
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {rvs.map((rv) => (
        <div
          key={rv.id}
          className="border rounded-xl shadow-md bg-white transition-all duration-300 hover:shadow-xl p-4"
        >
          <img
            src={rv.image}
            alt={rv.name}
            className="h-40 object-cover rounded-lg w-full"
          />

          <h4 className="text-lg bg-gray-100 py-1 rounded font-semibold mt-2">
            {rv.name}
          </h4>

          <a
            href={rv.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 w-full bg-blue-600 text-white text-sm text-center font-medium px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            View Listing
          </a>
        </div>
      ))}
      <RoamlyBanner />
    </div>
  );
};

export default OutdoorsyListings;
