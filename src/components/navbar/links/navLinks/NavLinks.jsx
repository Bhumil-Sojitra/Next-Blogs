"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLinks({ link }) {
  const pathName = usePathname();

  return (
    <Link
      href={link.path}
      className={`${"p-2 hover:bg-white hover:text-black rounded-lg "} ${
        pathName === link.path && "bg-white text-black rounded-lg"
      }`}
    >
      {link.title}
    </Link>
  );
}
