import React from "react";
import PostUser from "../postUser/postUser";

export default function PostCard({ post }) {
  return (
    <div className="flex flex-col justify-between bg-bgsoft p-6 rounded-lg shadow-lg">
      <div>
        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
        <p className=" h-52 overflow-auto scrollbar-hide mb-4">{post.body}</p>
      </div>
      <div>
        <PostUser userId={post.userId} />
        <a
          href={`/blog/${post.slug}`}
          className="cursor-pointer text-blue-500 hover:text-blue-700 font-semibold"
        >
          Read more
        </a>
      </div>
    </div>
  );
}
