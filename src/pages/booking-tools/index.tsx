import React from "react";
import { Helmet } from "react-helmet";
import ClickAndBoatWidget from "../../components/ClickAndBoatWidget";
import EagleRiderWidget from "../../components/EagleRiderWidget";
const BookingTools: React.FC = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>VehicleVoyager Booking Tools</title>
        <meta name="description" content="VehicleVoyager blog" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="container mx-auto px-4">
            <div className="my-4">
              <ClickAndBoatWidget />
            </div>
          </div>
          <div className="container mx-auto px-4">
            <div className="my-4">
              <EagleRiderWidget />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingTools;
