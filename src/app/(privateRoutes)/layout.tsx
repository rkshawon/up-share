import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

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
        <div className="w-full h-[calc(100vh-64px)] px-2 py-10  sm:p-20">
          {children}
        </div>
      </div>
    </>
  );
}
