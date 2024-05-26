"use client";
import { useFormState } from "react-dom";
import { addUser } from "../../lib/action";
export default function AdminUserForm({ userId }) {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <div className="bg-bgsoft shadow-lg rounded-lg p-3 h-[41vh] scrollbar-hide overflow-y-scroll">
      <h2 className="flex justify-center text-xl font-semibold mb-2">
        Admin Users
      </h2>
      <form className="flex flex-col justify-center" action={formAction}>
        <input
          className=" mb-8 px-3 py-2 bg-bgdark  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="text"
          name="username"
          placeholder="username"
        />
        <input
          className=" px-3 py-2 bg-bgdark  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="email"
          name="email"
          placeholder="email"
        />

        <input
          className=" my-8 px-3 py-2  bg-bgdark rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="password"
          name="password"
          placeholder="password"
        />
        <select
          className="w-[11vh]  bg-bgdark rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          name="isAdmin"
        >
          <option value={false}>IsAdmin?</option>
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </select>
        <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add
        </button>
        {state && state.error}
      </form>
    </div>
  );
}
