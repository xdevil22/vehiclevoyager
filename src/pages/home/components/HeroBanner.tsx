import React, { useEffect, useState } from "react";
import car from "../../../assets/herobanner/cars.png";
import boat from "../../../assets/herobanner/cars.png";
import bus from "../../../assets/herobanner/bus.png";
import motercycle from "../../../assets/herobanner/motercycle.jpg";
import plain from "../../../assets/herobanner/plain.jpg";
const HeroBanner = () => {
  const backgroundImages = [car, boat, bus, motercycle, plain];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {backgroundImages.map((url, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            i === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${url})` }}
        />
      ))}

      <section className="relative h-[500px] md:h-[600px] z-20">
        <div className="absolute inset-0 bg-neutral-900 bg-opacity-60" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1
            className=" text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6
          tracking-tight leading-normal"
          >
            Premium Vehicle Rentals for Every Adventure
          </h1>

          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl font-light leading-relaxed">
            Find the perfect vehicle for your next journey. Compare prices from
            top rental agencies in one place.
          </p>
        </div>

        {/* Category Icons */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-8 items-center z-30">
          {[
            { icon: "ri-car-line", label: "Cars" },
            { icon: "ri-ship-line", label: "Boats" },
            { icon: "ri-motorbike-line", label: "Motorcycles" },
            { icon: "ri-plane-line", label: "Private Jets" },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-white transition-all cursor-pointer opacity-80 hover:opacity-100`}
            >
              <i className={`${item.icon} text-2xl`} />
              <span className="text-sm mt-1">{item.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HeroBanner;
