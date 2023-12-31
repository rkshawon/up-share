"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function Navbar() {
  const route = useRouter();
  return (
    <div className="border-b w-full p-3 flex items-center justify-between shadow-b h-16 cursor-pointer">
      <Image
        src="/logo.png"
        alt=""
        height={100}
        width={150}
        onClick={() => route.push("/")}
      />
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default Navbar;
