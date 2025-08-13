import React from "react";

const CTABox: React.FC = () => {
  return (
    <div className="bg-blue-600 text-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-bold mb-2">Subscribe to our Newsletter</h3>
      <p className="mb-4">Get the latest posts delivered to your inbox.</p>
      <form className="flex gap-2">
        <input
          type="email"
          placeholder="Your email"
          className="flex-1 px-3 py-2 rounded text-black"
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default CTABox;
