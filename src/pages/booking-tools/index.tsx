import React from "react";
import {HeadProvider, Title, Meta} from "react-head";
import ClickAndBoatWidget from "../../components/ClickAndBoatWidget";
import EagleRiderWidget from "../../components/EagleRiderWidget";
const BookingTools: React.FC = () => {
  return (
    <>
      {" "}
      <HeadProvider>
        <Title>Vechura Booking Tools</Title>
        <Meta name="description" content="Vechura blog" />
      </HeadProvider>
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <div className="md:col-span-2 space-y-6">
          <div className="container mx-auto px-4">
            <div className="my-4">
              <ClickAndBoatWidget />
            </div>
          </div>

          <div>
            <iframe
              src="/ExpediaSearchWidget.html"
              title="Eagle Rider Widget"
              width="100%"
              height="318"
              style={{border: "none", overflow: "hidden"}}
              loading="lazy"
              // onLoad={() => setLoading(false)}
              className="eagle-rider-widget mb-2"
            />
          </div>
          <div>
            <iframe
              src="/vrbo-widget.html"
              title="Eagle Rider Widget"
              width="100%"
              height="320"
              style={{border: "none", overflow: "hidden"}}
              loading="lazy"
              // onLoad={() => setLoading(false)}
              className="eagle-rider-widget mb-2"
            />
          </div>
          <div>
            <iframe
              src="/hotelscom-widget.html"
              title="Eagle Rider Widget"
              width="100%"
              height="318"
              style={{border: "none", overflow: "hidden"}}
              loading="lazy"
              // onLoad={() => setLoading(false)}
              className="eagle-rider-widget mb-2"
            />
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
