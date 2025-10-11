import React, {useState} from "react";

import {BASE_URL} from "../../../utils/constants";
import {defaultImages} from "../../../assets";

type VehicleCardProps = {
  type: string;
  brand: string;
  name: string;
  image: string;
  url: string;
  price?: string | null;
};

const VehicleCard: React.FC<VehicleCardProps> = ({
  type,
  brand,
  name,
  image,
  url,
  price,
}) => {
  const [imgSrc, setImgSrc] = useState(image);

  const handleAffiliateClick = () => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "affiliate_click", {
        event_category: "affiliate",
        event_label: `${brand} ${name}`,
        value: 1,
      });
    }
  };
  return (
    <>
      {type === "Private Jets" ? (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-xl transition ">
          <div className="">
            <div className="flex">
              <a
                href={url}
                target="_blank"
                onClick={handleAffiliateClick}
                rel="noopener noreferrer"
                className="block w-full rounded-md overflow-hidden">
                <img
                  src={imgSrc}
                  alt={`${brand} rental`}
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                  onError={() => setImgSrc(defaultImages.defaultVehicle2)}
                  className="w-full"
                  width={200}
                  height={100}
                />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-xl transition">
          <div className="relative">
            <img
              src={BASE_URL + imgSrc}
              alt={`${brand} rental`}
              loading="lazy"
              onError={() => setImgSrc(defaultImages.defaultVehicle2)}
              className="w-full"
              width={200}
              height={100}
            />
            {price && (
              <div className="absolute top-4 right-4 bg-accent text-neutral-900 font-medium text-sm px-2 py-1 rounded">
                {price}
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold text-neutral-900 mb-2">{name}</h3>

            <div className="flex flex-col sm:flex-row gap-2">
              {/* <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm 
                font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 
                focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
                bg-primary text-white hover:bg-primary/90 h-10 px-4 py-2 flex-1">
                View Deals
              </a> */}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleAffiliateClick}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm 
             font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 
             focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
             bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2 flex-1">
                View Deals
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VehicleCard;
