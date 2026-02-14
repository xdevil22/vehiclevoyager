import React, {JSX} from "react";
import {Link} from "react-router-dom";
import {BASE_URL} from "../../../utils/constants";

interface BlogCardProps {
  blogid: number;
  slug: string;
  mainTitle: string;
  title: string;
  excerpt: string | JSX.Element;
  date: string;
  image: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  blogid,
  slug,
  mainTitle,
  title,
  excerpt,
  date,
  image,
}) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
        <h1 className="text-3xl font-bold mb-6 px-5 pt-5">{mainTitle}</h1>
        <div className="px-5">
          {" "}
          <div className="text-sm text-gray-600 italic leading-relaxed advertiser-disclosure">
            {blogid === 14
              ? "Vechura may earn a commission from affiliate links in this post, at no extra cost to you. Learn more in our Advertiser Disclosure"
              : blogid === 16
                ? null
                : "Vechura may earn a commission from affiliate links in this post, at no extra cost to you. As an Amazon Associate, we earn from qualifying purchases. Learn more in our Advertiser Disclosure."}
          </div>
          <hr className="my-6 border-t-2 border-gray-400" />
        </div>

        <img
          src={BASE_URL + image}
          alt={title}
          className="w-full"
          loading="lazy"
        />

        <div className="p-5">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-500 text-sm mb-3">{date}</p>
          <p className="text-gray-700 mb-4">{excerpt}</p>
          <Link
            to={`/blog/${slug}`}
            className="text-blue-600 hover:underline font-medium">
            Read More →
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
