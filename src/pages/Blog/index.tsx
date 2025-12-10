import React from "react";
import {useLocation} from "react-router-dom";
import {blogPosts} from "../../utils/blogPosts";
import BlogCard from "./components/BlogCard";
import Sidebar from "./components/Sidebar";
import {Helmet} from "react-helmet";

const Blog: React.FC = () => {
  const location = useLocation();
  const query =
    new URLSearchParams(location.search).get("search")?.toLowerCase().trim() ||
    "";

  const filteredPosts = blogPosts.filter((post) => {
    const text = `${post.title} ${
      typeof post.excerpt === "string" ? post.excerpt : ""
    }`.toLowerCase();

    // Split search into words: "rentals in las vegas" → ["rentals", "las", "vegas"]
    const keywords = query.split(" ").filter(Boolean);

    return keywords.every((word) => text.includes(word));
  });

  return (
    <>
      <Helmet>
        <title>Vechura Blog</title>
        <meta name="description" content="Articles, guides & news by Vechura" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="md:col-span-2 space-y-6">
          {query && (
            <p className="text-gray-600 italic text-sm mb-2">
              Showing results for:{" "}
              <span className="font-semibold text-blue-700">{query}</span>
            </p>
          )}

          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => <BlogCard key={post.slug} {...post} />)
          ) : (
            <p className="text-gray-500 italic text-sm">
              No blog posts found for your search.
            </p>
          )}
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default Blog;
