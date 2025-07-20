import { useEffect } from "react";

const ClickAndBoatWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.clickandboat.com/widget.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="my-8">
      <h2 className="text-xl font-bold mb-2">⛵ Browse Live Boat Rentals</h2>
      <div
        className="clickandboat-widget"
        data-widget-user="64e4be4f23e65"
        data-widget-lang="en"
        data-widget-type="search"
        data-widget-display="horizontal"
        data-widget-lat="25.7617"
        data-widget-lng="-80.1918"
        data-widget-dest-id="55"
        data-widget-search-url="https://www.clickandboat.com"
        data-widget-dest-name="Miami"
      />
    </div>
  );
};

export default ClickAndBoatWidget;
