import React from "react";
import vehicles from "../utils/vehicles.json";
import VehicleCard from "../components/VehicleCard";

import OutdoorsyListings from "../components/OutdoorsyListings";
import ClickAndBoatWidget from "../components/ClickAndBoatWidget";
import EagleRiderWidget from "../components/EagleRiderWidget";

// Inside the main return block

const groupByType = (type: string) => {
  return vehicles.filter((v) => v.type === type);
};

const Home = () => {
  const categories = ["Boat", "Car", "RV", "Jet"];

  return (
    <div className="p-6">
      {categories.map((category) => {
        const items = groupByType(category);
        if (items.length === 0) return null;

        return (
          <section key={category} className="mb-10">
            <h2 className="text-2xl font-bold mb-4">{category}s</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {items.map((vehicle, idx) => (
                <VehicleCard key={idx} {...vehicle} />
              ))}
            </div>
          </section>
        );
      })}
      {/* other sections */}
      <OutdoorsyListings />
      {/* other sections */}
      {/* Affiliate Widget */}
      <ClickAndBoatWidget />
      {/* Affiliate Widget EagleRiderWidget */}
      <EagleRiderWidget />
    </div>
  );
};

export default Home;
