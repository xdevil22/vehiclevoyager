import React from "react";
import {logosImages} from "../../../assets";

import ExpediaAffiliate from "./ExpediaAffiliate";
type Provider = {
  href: string;
  imgSrc: string;
  alt: string;
  className: string;
};

const providers: Provider[] = [
  {
    href: "https://www.villiersjets.com/",
    imgSrc: logosImages.Jetslogo,
    alt: "Villiers Jets logo",
    className: "jetslogo",
  },
  {
    href: "https://www.riders-share.com/",
    imgSrc: logosImages.riderslogo,
    alt: "Riders Share logo",
    className: "riderslogo",
  },
  {
    href: "https://www.outdoorsy.com/",
    imgSrc: logosImages.outdoorsylogo,
    alt: "Outdoorsy logo",
    className: "outdoorsylogo",
  },
  // {
  //   href: "https://www.getmyboat.com/",
  //   imgSrc: logosImages.getmyboatlogo,
  //   alt: "Getmyboat logo",
  //   className: "getmyboatlogo",
  // },
  {
    href: "https://www.foxrentacar.com/",
    imgSrc: logosImages.fox,
    alt: "Fox Rent A Car logo",
    className: "foxlogo",
  },
  {
    href: "https://www.awin1.com/cread.php?awinmid=92667&awinaffid=1967225&ued=https%3A%2F%2Fwww.sailo.com",
    imgSrc: logosImages.sailo,
    alt: "Fox Rent A Car logo",
    className: "sailologo",
  },
  {
    href: "https://www.maverickhelicopter.com/al.aspx?id=280252&t=0",
    imgSrc: logosImages.maverick,
    alt: "Maverick",
    className: "maverick",
  },
  {
    href: "https://lvcexotics.com",
    imgSrc: logosImages.lvcexotic,
    alt: "Lvc Exotic",
    className: "lvcexotic",
  },
  {
    href: "https://www.expedia.com/?siteid=1&langid=1033&clickref=1110lVjksag&affcid=US.DIRECT.PHG.1100l416322.1100l75595&ref_id=1110lVjksag&my_ad=AFF.US.DIRECT.PHG.1100l416322.1100l75595&afflid=1110lVjksag&affdtl=PHG.1110lVjksag.PZAcfXM5TJ",
    imgSrc: logosImages.expediainline,
    alt: "Expedia Inline",
    className: "expediainline",
  },
];
{
}
const AffiliateLogos = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-700 mb-6">
          Our Trusted Affiliates
        </h2>
        <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap affiliate-logos">
          {providers.map((provider, index) => (
            <a
              key={index}
              href={provider.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${provider.alt}`}
              className={`flex items-center justify-center  bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 border border-gray-200 ${provider.className === "expediainline" ? "expediainline" : null}`}>
              <img
                src={provider.imgSrc}
                alt={provider.alt}
                className={`h-8 md:h-10 max-w-[120px] md:max-w-[150px] object-contain ${provider.className}`}
                loading="lazy"
                width={120}
                height={50}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliateLogos;
