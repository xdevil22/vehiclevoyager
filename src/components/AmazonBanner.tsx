import React from "react";

const AmazonBookBanner = () => {
  const handleAffiliateClick = () => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "affiliate_click", {
        event_category: "affiliate",
        event_label: "Road Trip Ready Book",
        value: 1,
      });
    }
  };

  return (
    <div className="col-span-1 lg:col-span-2   p-6  flex flex-col md:flex-row items-center gap-6">
      <img
        src="https://m.media-amazon.com/images/I/71qd4twY-1L._SY385_.jpg"
        alt="Road Trip Ready Book Cover"
        className="w-32 h-auto md:w-40 rounded-md shadow"
        loading="lazy"
        width={120}
        height={50}
      />
      <div className="text-left md:text-left">
        <h2 className="text-xl font-bold text-yellow-900 mb-2">
          Road Trip Ready! 🚗🖍️
        </h2>
        <p className="text-gray-800 mb-4 max-w-md">
          The Ultimate 144-Page Travel Activity & Coloring Book for Kids: Packed
          with Puzzles, Games & Coloring Fun for Ages 5-10 | Perfect for Car
          Rides, Vacations, & Screen-Free Entertainment
        </p>
        <a
          href="https://amzn.to/4ojIV3j"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleAffiliateClick}
          className="inline-block bg-yellow-700 text-white px-6 py-2 rounded hover:bg-yellow-800 transition">
          View on Amazon
        </a>
      </div>
    </div>
  );
};

export default AmazonBookBanner;
