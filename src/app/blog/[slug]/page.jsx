import React, { Suspense } from "react";
import PostUser from "../../../components/postUser/postUser";
import { getPost } from "../../../lib/data";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return { title: post.title, description: post.body };
};

const getData = async (slug) => {
  const res = await fetch(`http:/localhost:3000/api/blog/${slug}`);
  return res.json();
};

export default async function DisplayBlog({ params }) {
  const { slug } = params;
  console.log(slug);

  const post = await getData(slug);
  console.log(post.userId);
  // const post = await getPost(slug);
  return (
    <div className=" bg-bgdark">
      <div className=" container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold  mb-8">{post.title}</h1>
        <div className="bg-bgsoft p-6 rounded-lg shadow-lg">
          <p className=" mb-8">{post.body}</p>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <a
            href="/blog"
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            Back to all blogs
          </a>
        </div>
      </div>
    </div>
  );
}
