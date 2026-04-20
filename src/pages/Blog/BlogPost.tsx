import React from "react";
import {useParams} from "react-router-dom";
import {blogPosts} from "../../utils/blogPosts";
import Sidebar from "./components/Sidebar";
import CTABox from "./components/CTABox";
import {BASE_URL} from "../../utils/constants";

import {HeadProvider, Title, Meta} from "react-head";
const BlogPost: React.FC = () => {
  const {slug} = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="text-center py-10">Post not found</div>;
  }

  const affiliateCTA =
    post.slug ===
    "coachella-2026-travel-guide-for-tickets-where-to-stay-and-getting-around"
      ? {
          title: "Need a car during Coachella?",
          description:
            "Check Turo rentals for festival-friendly pickup near Indio and Palm Springs.",
          href: "https://turoinc.sjv.io/xJEn5A",
          buttonText: "Book Turo Car Rental",
        }
      : post.slug ===
        "sxsw-2026-travel-guide-for-tickets-events-where-to-stay-and-getting-around-austin"
      ? {
          title: "Book SXSW travel essentials",
          description:
            "Reserve hotels, flights, and event transport for Austin with trusted booking partners.",
          href: "https://www.hotels.com/affiliates/search-result-austin-texas-united-states-of-america.hLgW73T",
          buttonText: "Find SXSW Hotels",
        }
      : post.slug === "top-7-luxury-yacht-rentals-in-miami"
      ? {
          title: "Reserve a luxury Miami yacht today",
          description:
            "Browse premium yacht charters for Miami and book your next luxury getaway with confidence.",
          href: "https://www.sailo.com/boat-rentals/FL/Miami?sv1=affiliate&sv_campaign_id=1967225",
          buttonText: "Book Miami Yacht",
        }
      : undefined;

  return (
    <>
      <HeadProvider>
        <Title>{post.seoTitle || post.title}</Title>
        <Meta name="description" content={post.seoDescription} />
        <Meta name="keywords" content={post.keywords} />
      </HeadProvider>
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 blog-article">
        <article className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-6">{post.mainTitle}</h1>
          <div className="text-sm text-gray-600 italic leading-relaxed advertiser-disclosure">
            {post.blogid === 14
              ? "Vechura may earn a commission from affiliate links in this post, at no extra cost to you. Learn more in our Advertiser Disclosure"
              : post.blogid === 16
                ? null
                : "Vechura may earn a commission from affiliate links in this post, at no extra cost to you. As an Amazon Associate, we earn from qualifying purchases. Learn more in our Advertiser Disclosure."}
          </div>
          <hr className="my-6 border-t-2 border-gray-400" />
          <picture>
            <source srcSet={BASE_URL + post.image} type="image/webp" />
            <img
              src={BASE_URL + post.image}
              alt={post.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </picture>
          <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
          <p className="text-gray-500 mb-6">{post.date}</p>
          {affiliateCTA && (
            <div className="mb-8">
              <CTABox {...affiliateCTA} />
            </div>
          )}
          <div className="prose max-w-none">{post.content}</div>
          {affiliateCTA && (
            <div className="mt-12">
              <CTABox
                {...affiliateCTA}
                className="bg-gradient-to-r from-blue-700 to-sky-600"
              />
            </div>
          )}
        </article>
        <Sidebar />
      </div>
    </>
  );
};

export default BlogPost;
