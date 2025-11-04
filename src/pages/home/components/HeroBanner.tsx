import React, { useEffect, useState } from "react";
import { heroImages } from "../../../assets";
import { FaHelicopter } from "react-icons/fa";

const categories = [
  { icon: "ri-car-line", label: "Cars" },
  { icon: "ri-ship-line", label: "Boats" },
  { icon: "ri-bus-line", label: "RVs and Motorhomes" },
  { icon: "ri-motorbike-line", label: "Motorcycles" },
  { icon: "ri-plane-line", label: "Private Jets" },
  { icon: <FaHelicopter size={22} />, label: "Helicopter Tours" },
];

const HeroBanner: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] md:h-[600px]">
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 z-20 " />
      {/* Carousel */}
      {heroImages.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.alt}
          fetchPriority={i === 0 ? "high" : undefined}
          loading={i === 0 ? "eager" : "lazy"}
          decoding="async"
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-normal">
          All Your Rides. One Site.
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl font-light leading-relaxed min-h-[100px]">
          Compare cars, RVs, boats, planes, motorcycles, and more — all in one
          place. Vechura helps you find, book, and save on every ride for your
          next adventure.
        </p>

        {/* Categories */}
        <div className="absolute bottom-8 left-0 right-0 px-2 flex justify-center space-x-3 md:space-x-8 items-center">
          {/* {categories.map((cat, idx) => (
            <a
              key={idx}
              href={`#${cat.label.replace(/\s+/g, "-")}`}
              className="flex flex-col items-center text-white transition-all cursor-pointer opacity-80 hover:opacity-100"
            >
              <i className={`${cat.icon} text-2xl`} />
              <span className="text-sm mt-1">{cat.label}</span>
            </a>
          ))}  */}
          {categories.map((cat, idx) => (
            <a
              key={idx}
              href={`#${cat.label.replace(/\s+/g, "-")}`}
              className="flex flex-col items-center text-white transition-all cursor-pointer opacity-80 hover:opacity-100"
            >
              {typeof cat.icon === "string" ? (
                <i className={`${cat.icon} text-2xl`} />
              ) : (
                // Render React icon
                <div className="text-2xl">{cat.icon}</div>
              )}
              <span className="text-sm mt-1 hidden md:block">{cat.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
