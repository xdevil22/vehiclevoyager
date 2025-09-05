import { useEffect, useState } from "react";
import fallback from "../../../assets/default-vehicle3.jpg"; // with extension
import RoamlyBanner from "./RoamlyBanner";
// import RoamlyBanner from "../../../components/RoamlyBanner";
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
  {
    id: "4",
    name: "Cozy Camper Van",
    image: fallback,
    url: "https://www.outdoorsy.com/rv/4",
  },
  {
    id: "5",
    name: "Luxury RV Adventure",
    image: fallback,
    url: "https://www.outdoorsy.com/rv/5",
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
        console.log(data, "dat------------------------");

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
    <div className="container mx-auto px-4 ">
      <h2 className="text-3xl font-bold font-heading text-neutral-900 mb-4">
        Outdoorsy List
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {rvs.map((rv) => (
          <a
            key={rv.id}
            href={rv.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Image with hover zoom */}
            <div className="relative h-[300px] lg:aspect-[16/9]">
              <img
                src={rv.image}
                alt={rv.name}
                className="absolute w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 group-hover:to-black/80 transition-opacity duration-500"></div>

              {/* Text over image */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white flex flex-col gap-2">
                <h3 className="text-lg font-bold">{rv.name}</h3>
                {/* {rv.description && (
                  <p className="text-sm hidden lg:block opacity-0 max-h-0 group-hover:max-h-[100px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    {rv.description}
                  </p>
                )} */}
                <span className="mt-2 inline-block w-fit bg-white text-black text-sm font-semibold px-4 py-1 rounded-md shadow pointer-events-none lg:pointer-events-auto">
                  View Listing
                </span>
              </div>
            </div>

            {/* Optional short description for small screens */}
            {/* {rv.description && (
              <p className="text-sm mt-2 px-2 text-gray-700 lg:hidden">
                {rv.description}
              </p>
            )} */}
          </a>
        ))}
      </div>

      <RoamlyBanner />
    </div>
  );
};

export default OutdoorsyListings;
