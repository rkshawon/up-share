"use client";

import { sidebarItem } from "@/Constant";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(1);

  const route = useRouter();

  return (
    <div className=" space-y-1 h-[calc(100vh-64px)] border-r shadow-r">
      {sidebarItem.map((item) => {
        return (
          <div
            onClick={() => {
              route.push(item.path);
              setActiveIndex(item.id);
            }}
            key={item.id}
            className={`block px-4 py-2 text-sm font-medium cursor-pointer ${
              activeIndex === item.id && "bg-purple-100 text-purple-700"
            } text-gray-500 hover:bg-purple-100 hover:text-purple-700`}
          >
            <div className="flex items-center">
              <item.icon size={20} />
              <span className="ml-2 hidden sm:block pr-5">{item.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
