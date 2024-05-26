import React from "react";
import { getPosts, getUsers } from "../../lib/data";
import { deletePost, deleteUser } from "../../lib/action";
export default async function AdminForm() {
  const posts = await getPosts();
  const users = await getUsers();

  return (
    <>
      <div className=" bg-bgsoft shadow-lg rounded-lg p-3 h-[41vh] overflow-hidden">
        {/* POSTS */}
        <h2 className="flex  justify-center text-xl font-semibold mb-2">
          Posts
        </h2>
        <div className="h-[35vh] scrollbar-hide overflow-y-scroll">
          {posts.map((post) => (
            <div
              className="flex  justify-between items-center bg-bgdark mb-2 p-3 w-auto rounded-md"
              key={post.id}
            >
              <div className="flex flex-col">
                <div>
                  <span className="text-blue-500">Title </span> : {post.title}
                </div>
                <div>
                  <span className="text-blue-500"> Desc </span> : {post.body}
                </div>
              </div>
              <form action={deletePost}>
                <input type="hidden" name="id" value={post.id} />
                <button className=" bg-red-500 hover:bg-red-600 rounded-md p-1">
                  Delete
                </button>
              </form>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[41vh] p-2 bg-bgsoft shadow-lg rounded-lg  overflow-hidden">
        <h2 className=" flex  justify-center text-xl font-semibold mb-2">
          Users
        </h2>
        <div className="h-[35vh] scrollbar-hide overflow-y-scroll">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex justify-between bg-bgdark mb-2 p-3 w-auto rounded-md"
            >
              <div>
                <span className="text-blue-500">Username </span>:{" "}
                {user.username}
              </div>
              <form action={deleteUser}>
                <input type="hidden" name="id" value={user.id} />
                <button className="bg-red-500 hover:bg-red-600 rounded-md px-1">
                  Delete
                </button>
              </form>
            </div>
          ))}{" "}
        </div>
      </div>
    </>
  );
}
