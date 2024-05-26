"use client";
import { useFormState } from "react-dom";
import { createPost } from "../../lib/action";

export default function AdminPostForm({ userId }) {
  const [state, formAction] = useFormState(createPost, undefined);
  return (
    <div className="bg-bgsoft shadow-lg rounded-lg p-3 ">
      <h2 className="flex justify-center text-xl font-semibold mb-2">
        Admin Posts
      </h2>
      <form className="flex flex-col justify-center" action={formAction}>
        <input type="hidden" name="userId" value={userId} />
        <input
          className="bg-bgdark px-3 py-2   rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="text"
          name="title"
          placeholder="title"
        />
        <textarea
          className="bg-bgdark my-3 px-3 py-2   rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows={6}
          type="text"
          name="body"
          placeholder="body"
        />
        <input
          className="bg-bgdark px-3 py-2   rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="text"
          name="slug"
          placeholder="slug"
        />
        <button className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add
        </button>
        {state && state.error}
      </form>
    </div>
  );
}
