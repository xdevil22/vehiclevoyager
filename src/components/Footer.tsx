import React from "react";

import {Link} from "react-router-dom";
import vechuraLogo from "../../public/assets/vechura-logo.png";
import {BASE_URL} from "../utils/constants";
const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      {/* SEO Verification (Hidden) */}
      <p
        style={{
          fontSize: "1px",
          color: "transparent",
          margin: 0,
          padding: 0,
          height: "0px",
          overflow: "hidden",
        }}>
        Impact-Site-Verification: 54deb5d6-162c-4ff1-b44c-96f31b50fc38
      </p>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Contact */}
          <div>
            <div className="flex items-center space-x-2 mb-6 vechuraLogo">
              {/* <RiSteering2Fill className="text-primary text-3xl" />
              <span className="text-2xl font-bold font-heading">
                VehicleVoyager
              </span> */}
              <img src={BASE_URL + vechuraLogo} alt="vechura" loading="lazy" />
              <span className="text-2xl font-bold font-heading">Vechura</span>
            </div>
            <p className="text-neutral-200 mb-6">
              Finding the perfect vehicle for your next adventure has never been
              easier.
            </p>
            <div>
              <h4 className="text-lg font-bold mb-2">Contact Us</h4>
              <a
                href="mailto:info@vehiclevoyager.net"
                className="text-neutral-200 hover:text-primary transition-colors">
                info@vehiclevoyager.net
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                {label: "Home", to: "/"},
                {label: "Booking Tools", to: "/booking-tools"},
                {label: "About", to: "/about"},
                {label: "Blog", to: "/blog"},
              ].map(({label, to}) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-neutral-200 hover:text-primary transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg font-bold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              {[
                "Miami, FL",
                "Los Angeles, CA",
                "Las Vegas, NV",
                "New York, NY",
                "Orlando, FL",
                "San Diego, CA",
                "Phoenix, AZ",
              ].map((city) => (
                <li key={city}>
                  <span className="text-neutral-200">{city}</span>
                </li>
              ))}
            </ul>
            {/* <ul className="space-y-2">
              {[
                "Miami, FL",
                "Los Angeles, CA",
                "Las Vegas, NV",
                "New York, NY",
                "Orlando, FL",
                "San Diego, CA",
                "Phoenix, AZ",
              ].map((city) => (
                <li key={city}>
                  <Link
                    to={`/category/cars?location=${encodeURIComponent(
                      city.split(",")[0]
                    )}`}
                    className="text-neutral-200 hover:text-primary transition-colors"
                  >
                    {city}
                  </Link>
                </li>
              ))}
            </ul> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            © 2025 Vechura. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/privacy-policy"
              className="text-neutral-400 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-neutral-400 hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
            <Link
              to="/cookie-policy"
              className="text-neutral-400 hover:text-primary text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
