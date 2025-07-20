import { useEffect } from "react";

const EagleRiderWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.eaglerider.com/reservation_widget/load_white_label.js";
    script.onload = () => {
      (window as any).loadReservationWidget(
        "fdc2ea5c-8d86-4558-887d-45675d1e910f",
        "eagleRiderDiv",
        750.0,
        280.0,
        "en",
        true,
        true,
        "v2"
      );
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="my-8">
      <h2 className="text-xl font-bold mb-2">
        🏍️ Browse Live Motorcycle Rentals
      </h2>
      <div id="eagleRiderDiv" />
      <div className="mt-2 text-sm">
        <a
          href="https://www.eaglerider.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Motorcycle Rentals
        </a>
      </div>
    </div>
  );
};

export default EagleRiderWidget;
