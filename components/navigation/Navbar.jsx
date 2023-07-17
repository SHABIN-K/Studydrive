"use client";

import { useState } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { navlinks } from "@/constants";
import { logo, menu, search, sun } from "@/public/assets";

const Navbar = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState("home");
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const handleToggleDrawer = () => {
    setToggleDrawer((prev) => !prev);
  };

  return (
    <nav className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]">
        <input
          type="text"
          placeholder="Search for Study materials"
          className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none"
        />
        <div className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer">
          <Image
            src={search}
            alt="search icon"
            className="w-[15px] h-[15px] object-contain"
          />
        </div>
      </div>

      {/* Small screen navigation */}

      <div className="sm:hidden flex justify-between items-center relative">
        <div
          className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src={logo}
            alt="user icon"
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
        <Image
          src={menu}
          alt="menu icon"
          className="w-[34px] h-[34px] object-contain cursor-pointer"
          onClick={handleToggleDrawer}
        />

        <div
          className={`${
            toggleDrawer ? "translate-x-0" : "-translate-x-full"
          } fixed top-0 bottom-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-5 w-[250px] transition-transform duration-1000`}
        >
          <ul className="mb-4 p-3">
            {navlinks.map((data) => (
              <li
                key={data.name}
                className={`flex p-4 ${
                  isActive === data.name && "bg-[#3a3a43]"
                }`}
                onClick={() => {
                  setIsActive(data.name);
                  setToggleDrawer(false);
                  router.push(data.link);
                }}
              >
                <Image
                  src={data.imgUrl}
                  alt={data.name}
                  className={`w-[24px] h-[24px] object-contain ${
                    isActive === data.name ? "grayscale-0" : "grayscale"
                  }`}
                />
                <p
                  className={`ml-[20px] font-epilogue font-semibold text-[14px] ${
                    isActive === data.name ? "text-[#1dc071]" : "text-[#808191]"
                  }`}
                >
                  {data.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
