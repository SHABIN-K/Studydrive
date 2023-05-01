import React from "react";
import { Link } from "react-router-dom";

import { logoMain } from "../../assets";

const Header = () => {
  return (
    <nav className="top-0 w-full bg-white border-b h-[60px] sm:h-[80px] ">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-start">
          <Link to="/">
            <img
              src={logoMain}
              alt="logo"
              width="200"
              className="object-contain"
            />
          </Link>
        </div>
        <ul className="text-[#443333]">
          <li className="">Sign up</li>
          <li className="">Login</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
