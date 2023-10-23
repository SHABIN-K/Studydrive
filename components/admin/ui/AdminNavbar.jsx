import Link from "next/link";
import Image from "next/image";
import { handleSignOutButton } from "@/libs/logout";
import { useEffect, useRef, useState } from "react";
import { close, menu } from "@/public/assets";
import AdminSidebar from "./AdminSidebar";

const AdminNavbar = ({ label }) => {
  const sidebarRef = useRef(null);
  const menuButtonRef = useRef(null);
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const handleToggleDrawer = () => {
    setToggleDrawer((prev) => !prev);
  };

  const handleCloseSidebar = () => {
    setToggleDrawer(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        handleCloseSidebar();
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <nav>
      <div className="navbar bg-[#1d232a] border-b border-green-400">
        <div className="flex-1">
          <Link href="/admin">
            <p className="text-[#4acd8d] subpixel-antialiased text-2xl font-bold ml-5">
              Pasc Hub
              <span className="text-white text-sm ml-1">{label}</span>
            </p>
          </Link>
        </div>

        <div className="flex-none gap-2 md:flex hidden">
          <div className="dropdown dropdown-end md:mr-2">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-7">
                <Image
                  src="/assets/dashboard.svg"
                  width={12}
                  height={12}
                  alt="dashboard icon"
                  className="bg-[#1d232a]"
                  title="switch to another pages"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <Link href="/dashboard">
                <li>
                  <div className="justify-between">
                    Dashboard
                    <span className="badge">New</span>
                  </div>
                </li>
              </Link>
              <Link href="/">
                <li>
                  <div>Home</div>
                </li>
              </Link>
              <li onClick={handleSignOutButton}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Small screen navigation */}
        <div className="md:hidden flex">
          <div
            className={`w-[34px] h-[34px] object-contain cursor-pointer transition-transform transform ${
              toggleDrawer ? "rotate-45" : "rotate-0"
            }`}
            onClick={handleToggleDrawer}
            ref={menuButtonRef}
          >
            <Image
              src={toggleDrawer ? close : menu}
              alt="menu icon"
              className="w-full h-full"
            />
          </div>
          <div
            className={`${
              toggleDrawer ? "translate-x-0" : "-translate-x-full"
            } fixed top-0 bottom-0 left-0 rounded-r-[10px] z-10 transition-transform duration-1000`}
            ref={sidebarRef}
          >
            <AdminSidebar />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
