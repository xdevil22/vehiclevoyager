import React, { useEffect, useState } from "react";

type OutdoorsyItem = {
  id: string;
  title: string;
  image: string;
  price: string;
};

const OutdoorsyListings: React.FC = () => {
  const [listings, setListings] = useState<OutdoorsyItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.outdoorsy.com/api/v2/rentals?filter[keywords]=rv&per_page=6"
    )
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        const mapped = data.data.map((item: any) => ({
          id: item.id,
          title: item.attributes.name,
          image: item.attributes.primary_image_url,
          price: `$${item.attributes.price_per_day} / day`,
        }));
        setListings(mapped);
        setError(false);
      })
      .catch((err) => {
        console.error("Failed to fetch Outdoorsy listings:", err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-10 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Featured RV Rentals</h2>

      {loading && <p className="text-gray-500">Loading listings...</p>}

      {!loading && error && (
        <p className="text-red-500">
          Failed to load listings. Please try again later.
        </p>
      )}

      {!loading && !error && listings.length === 0 && (
        <p className="text-gray-500">No listings found.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {listings.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 mb-3">{item.price}</p>
              <a
                href="https://www.outdoorsy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                View on Outdoorsy
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-400 mt-6">
        Powered by Outdoorsy API – All affiliate links redirect to Outdoorsy
        homepage.
      </p>
    </section>
  );
};

export default OutdoorsyListings;
