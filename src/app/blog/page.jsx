import React from "react";
import PostCard from "../../components/postCard/postCard";
import { getPosts } from "../../lib/data";

export const metadata = {
  title: "Blog Page",
  description: "Next Blogs Blog Page",
};

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog");
  return res.json();
};
export default async function BlogPage() {
  const post = await getData();
  // const post = await getPosts();

  return (
    <div className="h-full bg-bgdark py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold  mb-8 text-center">Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {post.map((post) => (
            <PostCard post={post} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
