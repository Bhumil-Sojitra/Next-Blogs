"use client";
import { useFormState } from "react-dom";
import { register } from "../../lib/action";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterForm() {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();
  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);
  return (
    <form action={formAction}>
      <h1 className=" flex justify-center text-2xl font-bold mb-6">Register</h1>

      <div className="mb-4">
        <label htmlFor="name" className="block  font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          name="username"
          className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block  font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block  font-medium mb-2">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block  font-medium mb-2">
          Repeat Password
        </label>
        <input
          type="password"
          name="repeatpassword"
          className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Register
      </button>
      <div className=" flex flex-col items-center text-red-500 mt-3">
        {state?.error}
        <Link className="text-white mt-3 underline" href="/login">
          Already have an account?
        </Link>
      </div>
    </form>
  );
}
