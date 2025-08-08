import React, { useState } from "react";
import fallback from "../../../assets/default-vehicle2.jpg";
import { BASE_URL } from "../../../utils/constants";
type VehicleCardProps = {
  type: string;
  brand: string;
  name: string;
  image: string;
  url: string;
  price?: string | null;
  // fallBackSrc?: string;
};

const VehicleCard: React.FC<VehicleCardProps> = ({
  type,
  brand,
  name,
  image,
  url,
  price,
  // fallBackSrc = fallback,
}) => {
  const [imgSrc, setImgSrc] = useState(image);
  const handleAffiliateClick = () => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "affiliate_click", {
        event_category: "affiliate",
        event_label: "Amazon Travel Gear",
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
                className="block w-full rounded-md overflow-hidden"
              >
                <img
                  src={imgSrc}
                  alt={`${brand} rental`}
                  loading="lazy"
                  onError={() => setImgSrc(fallback)}
                  className="w-full h-48- object-cover-"
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
              onError={() => setImgSrc(fallback)}
              className="w-full h-48 object-cover-"
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
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary/90 h-10 px-4 py-2 flex-1"
              >
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
