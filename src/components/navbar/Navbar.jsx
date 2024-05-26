import React from "react";
import Links from "./links/Links";
import Link from "next/link";
import { auth } from "../../lib/auth";

export default async function Navbar() {
  const session = await auth();
  return (
    <div className="flex  items-center justify-between p-5 bg-bgsoft  drop-shadow-2xl">
      <Link href={"/"} className="text-2xl ml-3 ">
        Next Blogs
      </Link>
      <Links session={session} />
    </div>
  );
}
