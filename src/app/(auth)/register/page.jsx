import React from "react";
import RegisterForm from "../../../components/registerForm/registerForm";
export default function RegisterPage() {
  return (
    <div className="mt-32 flex justify-center bg-bgdark">
      <div className=" bg-bgsoft p-8 rounded-lg shadow-lg w-full max-w-md">
        <RegisterForm />
      </div>
    </div>
  );
}
