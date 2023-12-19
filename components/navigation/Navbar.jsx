/* eslint-disable @next/next/no-page-custom-font */
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import Search from "../Search";
import { navlinks } from "@/constants";
import { usePost } from "@/libs/hooks/usePost";
import { filterPosts } from "@/libs/hooks/usefilter";
import { close, logo, menu } from "@/public/assets";
import { usePostStore } from "@/libs/state/useStore";
import ShareDialogBox from "../models/ShareDialogBox";
import PostViewDialogBox from "../models/PostViewDialogBox";

const Navbar = () => {
  const { data: fetchedData, error } = usePost();
  const setData = usePostStore((state) => state.setPosts);

  const router = useRouter();
  const sidebarRef = useRef(null);
  const menuButtonRef = useRef(null);

  const [post, setPost] = useState("");
  const [isPostOpen, setIsPostOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("Home");
  const [toggleDrawer, setToggleDrawer] = useState(false);

  //for search function
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  //for controling fetched data
  const [posts, setPosts] = useState([]);
  const data = useMemo(() => posts, [posts]);

  useEffect(() => {
    setData(posts);
  }, [posts, setData]);

  useEffect(() => {
    if (fetchedData) {
      setPosts(fetchedData);
    }
    if (error) {
      console.error("Error fetching Search data:", error);
    }
  }, [fetchedData, error]);

  const handleSearchChange = (e) => {
    /*
    Debouncing is a technique used to filter out noise or rapid changes in a signal, typically in input devices like buttons or switches. The debounce method ensures that the event triggered by the input device is only registered after a stable state has been reached.
    Here's an example JavaScript debounce method:

    function debounce(func, delay) {
        let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
     };
    }

    This debounce function takes two parameters: func which is the function to be debounced, and delay which is the time in milliseconds to wait for the input device to settle before triggering the event.

    The returned function uses setTimeout to wait for the specified delay before calling the original function passed as func. If another input event is triggered during this waiting period, the timeoutId is cleared and the timer starts again.

     In this way, the debounce function ensures that the original function is only called once, after a certain period of stability.
     */
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPosts(e.target.value, data);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  //for navigation
  const handleToggleDrawer = () => {
    setToggleDrawer((prev) => !prev);
  };

  const handleCloseSidebar = () => {
    setToggleDrawer(false);
  };

  const handleCloseSearch = () => {
    setSearchText("");
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
        handleCloseSearch();
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <p className=" text-[#4acd8d] align-middle text-center subpixel-antialiased text-3xl font-bold hidden sm:block">
        Pasc Hub <span className="badge">alpha</span>
      </p>
      <Search
        results={searchedResults}
        searchText={searchText}
        setSearchText={setSearchText}
        onChangeValue={handleSearchChange}
        setIsPostOpen={setIsPostOpen}
        setPost={setPost}
      />
      {/*
      <div className="md:flex hidden flex-row justify-end gap-4">
        <button
          type="button"
          className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] bsg-[#1dc071] bg-[#8c6dfd]`}
        >
          Login
        </button>

        <Link href="/">
          <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <Image
              src={search}
              alt="user"
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        </Link>
      </div>
*/}
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

        <p className="text-[#4acd8d] align-middle text-center subpixel-antialiased text-3xl font-bold">
          Pasc Hub<span className="badge">alpha</span>
        </p>

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
          } fixed top-0 bottom-0 left-0 rounded-r-[10px] bg-[#1c1c24] z-10  py-5 w-[250px] transition-transform duration-1000 `}
          ref={sidebarRef}
        >
          <ul className="mb-4 p-3">
            {navlinks.map((data) => (
              <li
                key={data.name}
                className={`flex p-4 ${
                  isActive === data.name && "bg-[#3a3a43]"
                } hover:bg-[#2c2f32] rounded-full`}
                onClick={() => {
                  setIsActive(data.name);
                  setToggleDrawer(false);
                  data.btn ? setIsOpen(true) : router.push(data.link);
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
      {isOpen && <ShareDialogBox isOpen={isOpen} setIsOpen={setIsOpen} />}
      {isPostOpen && (
        <PostViewDialogBox
          isOpen={isPostOpen}
          setIsOpen={setIsPostOpen}
          data={post}
        />
      )}
    </nav>
  );
};

export default Navbar;
