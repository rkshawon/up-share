import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full">{children}</div>
      </div>
    </>
  );
}
