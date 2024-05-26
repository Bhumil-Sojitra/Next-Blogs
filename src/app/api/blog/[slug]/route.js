import { NextResponse } from "next/server";
import ConnectDb from "../../../../lib/connectDb";
import { Post } from "../../../../lib/models";

export const GET = async (request, { params }) => {
  const { slug } = params;

  try {
    ConnectDb();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post!");
  }
};
export const DELETE = async (request, { params }) => {
  const { slug } = params;

  try {
    ConnectDb();
    await Post.deleteOne({ slug });
    return NextResponse.json("Post deleted");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete post!");
  }
};
