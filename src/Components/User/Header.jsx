import React from "react";
import { Link } from "react-router-dom";
import { logo ,logoMain} from "../../assets";


const Header = () => {
  return (
    <div className="w-full bg-white flex justify-between items-center border-b h-[60px] sm:h-[80px] py-5 px-5">
      <Link to="/">
        <img src={logo} alt="logo" width="60" className="sm:hidden object-contain" />
        <img src={logoMain} alt="logo" width="200" className="hidden sm:block object-contain" />
      </Link>
      Header
    </div>
  );
};

export default Header;
