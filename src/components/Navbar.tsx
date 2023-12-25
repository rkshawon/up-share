import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="border-b w-full p-3 flex items-center justify-between shadow-b">
      <Image src="./logo.svg" alt="" height={100} width={150} />
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default Navbar;
