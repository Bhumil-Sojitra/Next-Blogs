import ConnectDb from "./connectDb";
import { Post, User } from "./models";

export const getPosts = async () => {
  try {
    ConnectDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Fail to fetch posts!");
  }
};
export const getPost = async (slug) => {
  try {
    ConnectDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Fail to fetch post!");
  }
};
export const getUser = async (id) => {
  ConnectDb();
  const user = await User.findById(id);
  return user;
};
export const getUsers = async () => {
  try {
    ConnectDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Fail to fetch user!");
  }
};
