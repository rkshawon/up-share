"use client";

import { headerItem } from "@/Constant";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function Header() {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(pathname);
  const [active, setActive] = useState(false);
  const route = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutSideClick = (event: any) => {
      if (!ref.current?.contains(event.target)) {
        setActive(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

  return (
    <header className="bg-white border-b shadow h-16">
      <div className=" flex h-16 items-centergap-8 px-4 sm:px-6 lg:px-8 ">
        <div className="h-16 cursor-pointer flex items-center mr-10">
          <Image
            src="/logo.png"
            alt=""
            height={50}
            width={150}
            onClick={() => route.push("/")}
          />
        </div>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {headerItem.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      className="text-gray-500 transition  hover:text-purple-700 flex items-center gap-1"
                      href={item.path}
                    >
                      {" "}
                      <item.icon size={18} />
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className=" sm:gap-4 md:block hidden">
              <a
                className="block rounded-md bg-purple-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-purple-700"
                href="/upload"
              >
                Get Started
              </a>
            </div>
            <div
              className="relative md:hidden transition-all h-10 w-10"
              ref={ref}
            >
              <div
                onClick={() => setActive(!active)}
                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden cursor-pointer absolute"
              >
                {!active ? <Menu /> : <X />}
              </div>
              <div className="absolute top-12 right-0 bg-white shadow rounded ">
                {active &&
                  headerItem.map((item) => {
                    return (
                      <div
                        onClick={() => {
                          route.push(item.path);
                          setActiveIndex(item.path);
                        }}
                        key={item.id}
                        className={`block px-4 m-2 py-2 my-1 text-sm cursor-pointer rounded  text-gray-500 hover:bg-purple-100 hover:text-purple-700`}
                      >
                        <div className="flex items-center">
                          <item.icon size={20} />
                          <span className="ml-2">{item.name}</span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
