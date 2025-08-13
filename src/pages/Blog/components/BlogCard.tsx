import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../utils/constants";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  title,
  excerpt,
  date,
  image,
}) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={BASE_URL + image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-500 text-sm mb-3">{date}</p>
        <p className="text-gray-700 mb-4">{excerpt}</p>
        <Link
          to={`/blog/${slug}`}
          className="text-blue-600 hover:underline font-medium"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
