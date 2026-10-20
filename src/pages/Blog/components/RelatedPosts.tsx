import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../../../utils/blogPosts";

type Props = {
  currentSlug: string;
  limit?: number;
};

const RelatedPosts: React.FC<Props> = ({ currentSlug, limit = 6 }) => {
  const currentIndex = blogPosts.findIndex((p) => p.slug === currentSlug);
  const others = blogPosts.filter((p) => p.slug !== currentSlug);
  // Rotate the list from the current post so every post links to a different set
  const start = currentIndex < 0 ? 0 : currentIndex % Math.max(others.length, 1);
  const related = [...others.slice(start), ...others.slice(0, start)].slice(
    0,
    limit,
  );

  if (related.length === 0) return null;

  return (
    <section className="mt-12 border-t pt-8">
      <h2 className="text-2xl font-bold mb-4">Related Travel Guides</h2>
      <ul className="list-disc pl-6 space-y-2">
        {related.map((post) => (
          <li key={post.slug}>
            <Link
              to={`/blog/${post.slug}`}
              className="text-blue-700 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RelatedPosts;
