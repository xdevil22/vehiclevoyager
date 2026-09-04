import React from "react";
import { resourcePosts } from "../../utils/resourcePosts";
import ResourceCard from "./components/ResourceCard";
import Sidebar from "../Blog/components/Sidebar";

import { HeadProvider, Title, Meta } from "react-head";

const Resources: React.FC = () => {
  const posts = resourcePosts;

  return (
    <>
      <HeadProvider>
        <Title>Vechura Resources</Title>
        <Meta name="description" content="Resource guides by Vechura" />
        <Meta name="robots" content="index,follow" />
      </HeadProvider>

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-2 ">
        <div className="md:col-span-2 space-y-6">
          <div>
            {posts.length > 0 ? (
              posts.map((post) => <ResourceCard key={post.slug} {...post} />)
            ) : (
              <p className="text-gray-500 italic text-sm">
                No resources found.
              </p>
            )}
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default Resources;
