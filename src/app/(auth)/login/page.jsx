import React from "react";
import LoginForm from "../../../components/loginForm/loginForm";
export default function LoginPage() {
  return (
    <div className="mt-44 flex justify-center bg-bgdark">
      <div className=" bg-bgsoft p-8 rounded-lg shadow-lg w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}
