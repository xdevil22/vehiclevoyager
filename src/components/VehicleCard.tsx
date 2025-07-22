import React, {useState} from "react";
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
    <div className="border rounded-lg shadow hover:shadow-lg transition bg-white flex flex-col">
      <img
        src={imgSrc}
        alt={brand}
        className="w-full h-48 object-cover rounded-t"
        onError={(e) => setImgSrc(fallBackSrc)}
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-1">{brand}</h3>
        <p className="text-sm text-gray-600 mb-4 flex-grow">{name}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-auto bg-blue-600 text-white text-sm text-center font-medium px-4 py-2 rounded hover:bg-blue-700 transition">
          View Deals
        </a>
      </div>
    </div>
  );
};

export default VehicleCard;
