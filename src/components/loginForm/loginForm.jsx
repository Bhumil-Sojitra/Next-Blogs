"use client";

import { handleCredentialslogin, handleGithublogin } from "../../lib/action";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginForm() {
  const [state, formAction] = useFormState(handleCredentialslogin, undefined);
  const router = useRouter();
  useEffect(() => {
    state?.success && router.push("/");
  }, [state?.success, router]);
  return (
    <div>
      <form action={formAction}>
        <h1 className="flex justify-center text-2xl font-bold mb-6">
          Login With Credentials
        </h1>
        <div className="mb-4">
          <label htmlFor="name" className="block  font-medium mb-2">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="w-full px-4 py-2  text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block  font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="w-full px-4 py-2 border-0 text-black  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Submit
        </button>
      </form>
      <form
        className="flex justify-center mt-3 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        action={handleGithublogin}
      >
        <button>Login With Github</button>
      </form>
      <div className=" flex flex-col items-center text-red-500 mt-3">
        {state?.error}
        <Link className="text-white mt-3 underline" href="/register">
          Create a new account?
        </Link>
      </div>
    </div>
  );
}
