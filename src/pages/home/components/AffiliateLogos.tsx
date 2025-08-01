import React from "react";

type Provider = {
  href: string;
  imgSrc: string;
  alt: string;
};
import Jetslogo from "../../../assets/logos/turo.jpg";
import riderslogo from "../../../assets/logos/riderslogo.svg";
import outdoorsylogo from "../../../assets/logos/outdoorsy.png";
import getmyboatlog from "../../../assets/logos/gmyb.png";
import fox from "../../../assets/logos/fox.png";
const providers: Provider[] = [
  {
    href: "https://www.villiersjets.com/",
    imgSrc: Jetslogo,
    alt: "Villiers Jets logo",
  },
  {
    href: "https://www.riders-share.com/",
    imgSrc: riderslogo,
    alt: "Riders Share logo",
  },
  {
    href: "https://www.outdoorsy.com/",
    imgSrc: outdoorsylogo,
    alt: "Outdoorsy logo",
  },
  {
    href: "https://www.getmyboat.com/",
    imgSrc: getmyboatlog,
    alt: "Getmyboat logo",
  },
  {
    href: "https://www.foxrentacar.com/",
    imgSrc: fox,
    alt: "Fox Rent A Car logo",
  },
];

const AffiliateLogos = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-700 mb-6">
          Affiliate
        </h2>
        <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
          {providers.map((provider, index) => (
            <a
              key={index}
              href={provider.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${provider.alt}`}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 border border-gray-200"
            >
              <img
                src={provider.imgSrc}
                alt={provider.alt}
                className="h-8 md:h-10 max-w-[120px] md:max-w-[150px] object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliateLogos;
