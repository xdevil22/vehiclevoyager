import React from "react";
import {useParams} from "react-router-dom";
import {blogPosts} from "../../utils/blogPosts";
import Sidebar from "./components/Sidebar";
import {BASE_URL} from "../../utils/constants";
import {Helmet} from "react-helmet";

const BlogPost: React.FC = () => {
  const {slug} = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="text-center py-10">Post not found</div>;
  }

  return (
    <>
      {" "}
      <Helmet>
        <title>{post.seoTitle || post.title}</title>
        <meta name="description" content={post.seoDescription} />
        <meta name="keywords" content={post.keywords} />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 blog-article">
        <article className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-6">{post.mainTitle}</h1>
          <img
            src={BASE_URL + post.image}
            alt={post.title}
            className="w-full h-64- object-cover- rounded-lg mb-6"
            loading="lazy"
          />
          <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
          <p className="text-gray-500 mb-6">{post.date}</p>
          <div className="prose max-w-none">{post.content}</div>
        </article>
        <Sidebar />
      </div>
    </>
  );
};

export default BlogPost;
