import React from "react";
import {blogPosts} from "../../utils/blogPosts";
import BlogCard from "./components/BlogCard";
import Sidebar from "./components/Sidebar";
import {Helmet} from "react-helmet";

const Blog: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Vechura blog</title>
        <meta name="description" content="Vechura blog" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default Blog;
