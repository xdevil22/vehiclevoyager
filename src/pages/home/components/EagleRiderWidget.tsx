import React, { useState } from "react";

const EagleRiderIframeWidget = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="my-6 relative min-h-[300px]">
      <p className="font-semibold text-lg mb-3">
        🏍️ Browse Live Motorcycle Rentals
      </p>

      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-10">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      <iframe
        src="/eagle-rider-widget.html"
        title="EagleRider Motorcycle Widget"
        width="100%"
        height="300"
        style={{ border: "none", overflow: "hidden" }}
        loading="lazy"
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

export default EagleRiderIframeWidget;
