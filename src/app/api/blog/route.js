import { NextResponse } from "next/server";
import ConnectDb from "../../../lib/connectDb";
import { Post } from "../../../lib/models";
export const GET = async (request) => {
  try {
    ConnectDb();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts!");
  }
};
