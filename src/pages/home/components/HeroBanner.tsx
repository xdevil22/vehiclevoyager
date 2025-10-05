import React, {useEffect, useState} from "react";
import {heroImages} from "../../../assets";

const categories = [
  {icon: "ri-car-line", label: "Cars"},
  {icon: "ri-ship-line", label: "Boats"},
  {icon: "ri-bus-line", label: "RVs and Motorhomes"},
  {icon: "ri-motorbike-line", label: "Motorcycles"},
  {icon: "ri-plane-line", label: "Private Jets"},
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
          // srcSet={img.srcSet}
          // sizes="(max-width: 480px) 480px,
          //        (max-width: 768px) 768px,
          //        (max-width: 1280px) 1280px,
          //        1920px"
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
          Premium Vehicle Rentals for Every Adventure
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl font-light leading-relaxed min-h-[100px]">
          Find the perfect vehicle for your next journey. Compare prices from
          top rental companies and choose the best deal for your adventure.
        </p>

        {/* Categories */}
        <div className="absolute bottom-8 left-0 right-0 px-2 flex justify-center space-x-3 md:space-x-8 items-center">
          {categories.map((cat, idx) => (
            <a
              key={idx}
              href={`#${cat.label.replace(/\s+/g, "-")}`}
              className="flex flex-col items-center text-white transition-all cursor-pointer opacity-80 hover:opacity-100">
              <i className={`${cat.icon} text-2xl`} />
              <span className="text-sm mt-1">{cat.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
