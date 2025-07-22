import React, { useState } from "react";
import fallback from "../assets/default-vehicle.png"; // with extension

type VehicleCardProps = {
  brand: string;
  name: string;
  image: string;
  url: string;
  fallBackSrc?: string;
};

const VehicleCard: React.FC<VehicleCardProps> = ({
  brand,
  name,
  image,
  url,
  fallBackSrc = fallback,
}) => {
  const [imgSrc, setImgSrc] = useState(image);

  return (
    <div className="rounded-xl border bg-white shadow-md transition-all duration-300 hover:shadow-xl ">
      <img
        src={imgSrc}
        alt={brand}
        className="w-full h-48 object-cover rounded-t"
        onError={(e) => setImgSrc(fallBackSrc)}
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-neutral-900 mb-2">{brand}</h3>
        <p className="text-sm bg-gray-100 py-1 rounded mb-4 flex-grow">
          {name}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-auto bg-blue-600 text-white text-sm text-center font-medium px-4 
          py-2 rounded hover:bg-blue-700- transition"
        >
          View Deals
        </a>
      </div>
    </div>
  );
};

export default VehicleCard;
