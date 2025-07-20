import React from "react";
// import defaultImage from "../assets/default-vehicle.png"; // Replace with your actual path

type VehicleCardProps = {
  brand: string;
  name: string;
  image: string;
  url: string;
};

const VehicleCard: React.FC<VehicleCardProps> = ({
  brand,
  name,
  image,
  url,
}) => {
  //   const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  //     e.currentTarget.src = defaultImage;
  //   };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block border rounded-lg shadow hover:shadow-lg transition p-4 bg-white"
    >
      <img
        src={image}
        alt={brand}
        className="w-full h-48 object-cover rounded"
        onError={(e) =>
          (e.currentTarget.src =
            "https://via.placeholder.com/400x300.png?text=No+Image")
        }
      />
      <h3 className="mt-2 text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{brand}</p>
    </a>
  );
};

export default VehicleCard;
