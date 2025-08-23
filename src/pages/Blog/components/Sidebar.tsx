import React from "react";
import CTABox from "./CTABox";
import BrevoNewsletter from "../../../components/BrevoNewsletter";
import SailoBanner from "../../home/components/SailoBanner";

const Sidebar: React.FC = () => {
  return (
    <aside className="space-y-6">
      {/* <CTABox /> */}

      <div className="bg-gray-100  rounded-lg shadow">
        <BrevoNewsletter />
      </div>
      <div className="bg-gray-100 p-2 rounded-lg shadow">
        <SailoBanner />
      </div>

      {/* <div className="bg-gray-100 p-4 rounded-lg shadow">
        <h4 className="font-bold mb-2">Popular Topics</h4>
        <ul className="space-y-2 text-blue-600">
          <li>
            <a href="#">Trevel Tips</a>
          </li>
          <li>
            <a href="#">Vehicle Rent</a>
          </li>
          <li>
            <a href="#">Eagle Rider Rentals</a>
          </li>
        </ul>
      </div> */}
    </aside>
  );
};

export default Sidebar;
