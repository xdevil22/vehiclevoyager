import React from "react";
import CTABox from "./CTABox";
import BrevoNewsletter from "../../../components/BrevoNewsletter";
import SailoBanner from "../../home/components/SailoBanner";
import ExpediaSearchWidget from "../../home/components/ExpediaSearchWidget";

const Sidebar: React.FC = () => {
  return (
    <aside className="space-y-6">
      <div className="bg-gray-100  rounded-lg shadow">
        <BrevoNewsletter />
      </div>
      <div className="bg-gray-100 p-2 rounded-lg shadow">
        <SailoBanner />
      </div>
      <div>
        <ExpediaSearchWidget />
      </div>
    </aside>
  );
};

export default Sidebar;
