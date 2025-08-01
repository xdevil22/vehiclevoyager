import React, {useState} from "react";
import fallback from "../../../assets/default-vehicle2.jpg";

type VehicleCardProps = {
  type: string;
  brand: string;
  name: string;
  image: string;
  url: string;
  price?: string | null;
  people?: number | null;
  features?: string[];
  location?: string;
  fallBackSrc?: string;
};

const VehicleCard: React.FC<VehicleCardProps> = ({
  type,
  brand,
  name,
  image,
  url,
  price,
  people,
  features,
  location,
  fallBackSrc = fallback,
}) => {
  const [imgSrc, setImgSrc] = useState(image);

  return (
    <>
      {type === "Private Jets" ? (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-xl transition">
          <div className="">
            <div className="flex">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-md overflow-hidden">
                <img
                  src={imgSrc}
                  alt={`${brand} rental`}
                  loading="lazy"
                  onError={() => setImgSrc(fallBackSrc)}
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
              src={imgSrc}
              alt={`${brand} rental`}
              loading="lazy"
              onError={() => setImgSrc(fallBackSrc)}
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
            {/* {location && (
              <div className="flex items-center text-sm text-neutral-800 mb-3">
                <i className="ri-map-pin-line mr-1"></i>
                {location ? location : "Location not available"}
              </div>
            )} */}
            {/* <div className="mb-4">
              <div className="flex flex-wrap gap-2 text-sm text-neutral-800">
                {people && (
                  <div className="flex items-center bg-gray-100 px-2 py-1 rounded">
                    <i className="ri-user-line mr-1"></i> {people} people
                  </div>
                )}

                {features && features.length > 0 ? (
                  features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center bg-gray-100 px-2 py-1 rounded">
                      <i className="ri-ship-line mr-1"></i> {feature}
                    </div>
                  ))
                ) : (
                  <span className="text-sm text-gray-400 italic">
                    No features listed
                  </span>
                )}
              </div>
            </div> */}
            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary/90 h-10 px-4 py-2 flex-1">
                View Deals
              </a>

              {/* <div className="flex gap-2">
                <a
                  href="/listing/206"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
                  <i className="ri-information-line"></i>
                </a>
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors hover:bg-accent rounded-full h-10 w-10 text-gray-400 hover:text-gray-500"
                  aria-label="Add to favorites">
                  <i className="ri-heart-line"></i>
                  <span className="sr-only">Add to favorites</span>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VehicleCard;
