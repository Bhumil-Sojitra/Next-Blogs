"use client";
import React, { useState } from "react";
import NavLinks from "./navLinks/NavLinks";
import Image from "next/image";
import { handleLogout } from "../../../lib/action";
const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Blogs",
    path: "/blog",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export default function Links({ session }) {
  const [open, setOpen] = useState(false);

  const isAdmin = true;

  return (
    <div>
      <div className="flex gap-x-10 last:mr-14 max-lg:hidden">
        {links.map((link) => (
          <NavLinks link={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLinks link={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className="p-2  hover:bg-red-700 rounded-lg">
                Logout
              </button>
            </form>
          </>
        ) : (
          <NavLinks link={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        width={30}
        height={30}
        src={"/menu.png"}
        alt="image"
        className="lg:hidden"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      />

      {open && (
        <div
          className="absolute right-0 h-[calc(100vh-75px)] w-2/4 top-full flex flex-col justify-center items-center bg-bgdark
          lg:hidden "
        >
          {links.map((link) => (
            <NavLinks link={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
}
