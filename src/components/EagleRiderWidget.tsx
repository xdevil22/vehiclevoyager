import {useEffect} from "react";

declare global {
  interface Window {
    loadReservationWidget?: (
      widgetId: string,
      elementId: string,
      width: number,
      height: number,
      lang: string,
      isHorizontal: boolean,
      showBooking: boolean,
      version: string
    ) => void;
  }
}

const EagleRiderWidget = ({width = 750, height = 280}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.eaglerider.com/reservation_widget/load_white_label.js";
    script.async = true;
    script.onload = () => {
      if (window.loadReservationWidget) {
        window.loadReservationWidget(
          "fdc2ea5c-8d86-4558-887d-45675d1e910f",
          "eagleWidget",
          width,
          height,
          "en",
          true, // force horizontal mode
          true,
          "v2"
        );
      }
    };
    document.body.appendChild(script);
  }, [width, height]);

  return (
    <div className="my-6">
      <p className="font-semibold text-lg mb-3">
        🏍️ Browse Live Motorcycle Rentals
      </p>
      <div id="eagleWidget" style={{minHeight: height}} />
      <noscript>
        <p>
          Widget failed to load. Visit{" "}
          <a
            href="https://www.eaglerider.com/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline">
            EagleRider.com
          </a>{" "}
          to browse rentals.
        </p>
      </noscript>
    </div>
  );
};

export default EagleRiderWidget;
