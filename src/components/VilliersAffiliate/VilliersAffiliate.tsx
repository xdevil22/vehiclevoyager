import {useEffect, useState} from "react";
import axios from "axios";
import {VilliersFlight} from "./villiersTypes";

const VilliersAffiliate = () => {
  const [flights, setFlights] = useState<VilliersFlight[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFlights = async () => {
      try {
        const res = await axios.get<any[]>(
          "https://vechura-backend.vercel.app/api/villiers"
        );

        const mapped = res.data.map((item) => ({
          origin: item["villiers:originAirport"],
          destination: item["villiers:destinationAirport"],
          departureDate: item["villiers:departureDate"],
          departureTime: item["villiers:departureTime"],
          price: item["villiers:price"],
          bookingLink: item["villiers:trackingLink"] || item.link,
        }));

        setFlights(mapped);
      } catch (err) {
        console.error(err);
        setError("Failed to load private jet deals.");
      } finally {
        setLoading(false);
      }
    };

    loadFlights();
  }, []);

  // ✅ Loader (no white screen)
  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="animate-pulse text-gray-500">
          Loading private jet deals…
        </p>
      </div>
    );
  }

  // ✅ Error state
  if (error) {
    return <div className="py-10 text-center text-red-600">{error}</div>;
  }

  // ✅ Empty state
  if (!flights.length) {
    return (
      <div className="py-10 text-center text-gray-500">
        No private jet deals available right now.
      </div>
    );
  }

  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Private Jet Empty Leg Deals</h2>

      {flights.map((flight, i) => (
        <div key={i} className="border p-4 mb-3 rounded">
          <p className="font-semibold">
            {flight.origin} → {flight.destination}
          </p>

          <p>
            {flight.departureDate} {flight.departureTime}
          </p>

          <p className="font-bold">{flight.price}</p>

          {flight.bookingLink && (
            <a
              href={flight.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline">
              View & Book
            </a>
          )}
        </div>
      ))}
    </section>
  );
};

export default VilliersAffiliate;
