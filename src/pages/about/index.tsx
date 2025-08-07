import React from "react";

const About = () => {
  return (
    <>
      <section id="about" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* About VehicleVoyager */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                About VehicleVoyager
              </h2>

              <p className="text-neutral-800 mb-4">
                At VehicleVoyager, we're passionate about helping travelers find
                the perfect vehicle for their adventures. Our platform
                aggregates rental options from hundreds of providers, giving you
                access to the best selection and prices.
              </p>
              <p className="text-neutral-800 mb-4">
                Unlike other comparison sites, we specialize exclusively in
                vehicle rentals – from luxury cars to yachts and RVs – allowing
                us to provide deeper insights and more specialized options for
                each category.
              </p>
              <p className="text-neutral-800 mb-6">
                Founded in 2017 by a family team of travel enthusiasts, our
                mission is to make premium vehicle rentals more accessible,
                transparent, and enjoyable for everyone.
              </p>
            </div>

            {/* Our Mission */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Our Mission
              </h2>
              <p className="text-neutral-800 mb-4">
                We're dedicated to helping you find the perfect vehicle for
                every journey, whether it's a practical car for everyday
                adventures, a luxurious yacht for special occasions, or anything
                in between.
              </p>
              <p className="text-neutral-800 mb-4">
                By partnering with leading rental providers worldwide, we offer
                you unmatched selection and competitive pricing across all
                vehicle categories.
              </p>
              <p className="text-neutral-800">
                Our goal is simple: to make vehicle rentals easier, more
                transparent, and more enjoyable for travelers everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
