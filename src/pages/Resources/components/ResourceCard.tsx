import React, { JSX } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../utils/constants";

interface ResourceCardProps {
  resourceId: number;
  slug: string;
  mainTitle: string;
  caption: string;
  subtitle: string;
  excerpt: string | JSX.Element;
  date: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  resourceId,
  slug,
  mainTitle,
  caption,
  subtitle,
  excerpt,
  date,
}) => {
  return (
    <>
      <div className="bg-white rounded-lg- shadow hover:shadow-lg transition overflow-hidden">
        <h1 className="text-3xl font-bold mb-6 px-5 pt-5 text-[#1d496d]">
          {mainTitle}
        </h1>
        <div className="px-5">
          <div className="text-sm text-gray-600 italic leading-relaxed advertiser-disclosure">
            {caption}
          </div>
          <hr className="my-6 border-t-2 border-gray-400" />
        </div>

        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2">{subtitle}</h3>
          <p className="text-[#1d496d] text-sm mb-3 font-semibold">{date}</p>
          <p className="text-gray-700 mb-4">{excerpt}</p>
          <Link
            to={`/resources/${slug}`}
            className="text-blue-600 hover:underline font-medium"
          >
            Read More →
          </Link>
        </div>
      </div>
    </>
  );
};

export default ResourceCard;
