"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const AdminHeader = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/admin">
          <p className="text-[#4acd8d] subpixel-antialiased text-2xl font-bold ml-5">
            Pasc Hub
            <span className="text-white text-sm ml-1">Admin Panel</span>
          </p>
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end md:mr-2">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-7">
              <Image
                src="/assets/dashboard.svg"
                width={12}
                height={12}
                alt="dashboard icon"
                className="bg-base-100"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <Link href="/dashboard">
              <li>
                <a className="justify-between">
                  Dashboard
                  <span className="badge">New</span>
                </a>
              </li>
            </Link>
            <Link href="/">
              <li>
                <a>Home</a>
              </li>
            </Link>
            <li
              onClick={() => {
                signOut({ callbackUrl: "/" });
              }}
            >
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
