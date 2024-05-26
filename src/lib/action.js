"use server";
import { revalidatePath } from "next/cache";
import ConnectDb from "./connectDb";
import { Post, User } from "./models";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";
export const createPost = async (prevState, formData) => {
  const { title, body, slug, userId } = Object.fromEntries(formData);
  try {
    ConnectDb();
    const newPost = new Post({
      title,
      body,
      slug,
      userId,
    });
    await newPost.save();
    console.log("saved to mongo");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};
export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    ConnectDb();
    await Post.findByIdAndDelete(id);
    console.log("deleted from mongo");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const addUser = async (prevState, formData) => {
  const { username, email, password } = Object.fromEntries(formData);
  try {
    ConnectDb();
    const newUser = new User({
      username,
      email,
      password,
    });
    await newUser.save();
    console.log("saved to mongo");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    ConnectDb();
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deleted from mongo");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const handleGithublogin = async () => {
  await signIn("github");
};
export const handleLogout = async () => {
  await signOut();
};

export const register = async (previousState, regData) => {
  const { username, email, password, repeatpassword } =
    Object.fromEntries(regData);

  if (!email || !password || !repeatpassword) {
    return { error: "Please enter all feilds" };
  }
  if (password !== repeatpassword) {
    return { error: "Password does not match" };
  }
  try {
    ConnectDb();
    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    console.log("Saved to mongo");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const handleCredentialslogin = async (previousState, loginData) => {
  const { username, password } = Object.fromEntries(loginData);
  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.type === "CredentialsSignin") {
      return { error: "Invalid Username and Password" };
    }
    throw err;
  }
};
