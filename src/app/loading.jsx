import React from "react";

export default function loading() {
  return (
    <div className="h-[847px] flex items-center justify-center bg-bgdark">
      <div className="text-center">
        <div
          className="spinner animate-spin inline-block w-12 h-12 border-4 rounded-full text-blue-500"
          role="status"
        >
          <span className="visually-hidden"></span>
        </div>
        <h2 className="text-2xl font-semibold  mt-4">Loading...</h2>
        <p className=" mt-2">Please wait while we load the content for you.</p>
      </div>
    </div>
  );
}
