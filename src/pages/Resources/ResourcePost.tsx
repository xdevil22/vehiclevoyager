import React from "react";
import { useParams } from "react-router-dom";
import { resourcePosts } from "../../utils/resourcePosts";
import { blogPosts } from "../../utils/blogPosts";
import Sidebar from "../Blog/components/Sidebar";

import { BASE_URL } from "../../utils/constants";
import { HeadProvider, Title, Meta } from "react-head";

const ResourcePost: React.FC = () => {
  const { slug } = useParams();
  const post = resourcePosts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="text-center py-10">Resource not found</div>;
  }

  return (
    <>
      <HeadProvider>
        <Title>{post.seoTitle || post.mainTitle}</Title>
        <Meta name="description" content={post.seoDescription} />
        <Meta name="keywords" content={post.keywords} />
        <Meta property="og:title" content={post.seoTitle || post.mainTitle} />
        <Meta property="og:description" content={post.seoDescription} />
        <Meta property="og:type" content="article" />
        <Meta name="twitter:card" content="summary_large_image" />
        <Meta name="robots" content="index,follow" />
      </HeadProvider>
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 resource-article">
        <article className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-6 text-[#1d496d]">
            {post.mainTitle}
          </h1>
          <div className="text-sm text-gray-600 italic leading-relaxed advertiser-disclosure">
            {post.caption}
          </div>
          <hr className="my-6 border-t-2 border-gray-400" />
          <h3 className="text-2xl font-bold- mb-4">{post.subtitle}</h3>
          <p className="mb-6 date text-[#1d496d]">{post.date}</p>
          <div className="prose max-w-none">{post.content}</div>
        </article>
        <div>
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default ResourcePost;
