"use client";

import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { navlinks } from "@/constants";
import { logo, sun } from "@/public/assets";
import Icon from "./Icon";

const Sidebar = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState("home");
  return (
    <aside className="flex justify-between items-center flex-col sticky top-5 h-[89vh]">
      <Link href="/">
        <Icon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={logo} />
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((data) => {
            return (
              <div key={data.name}>
                <Icon
                  {...data}
                  isActive={isActive}
                  handleClick={() => {
                    setIsActive(data.name);
                    router.push(data.link);
                  }}
                />
              </div>
            );
          })}
        </div>
        <Icon className="bg-[#1c1c24] shadow-secondary" imgUrl={sun} />
      </div>
    </aside>
  );
};

export default Sidebar;
