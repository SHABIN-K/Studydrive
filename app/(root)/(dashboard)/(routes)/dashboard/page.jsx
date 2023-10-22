"use client";

import AdminNavbar from "@/components/admin/ui/AdminNavbar";
import AdminSidebar from "@/components/admin/ui/AdminSidebar";

const MyDash = () => {
  return (
    <section className="flex h-screen font-normal">
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminNavbar />
        <div className="flex flex-row">
          <div className="md:flex hidden ">
            <AdminSidebar />
          </div>
          <main className=""></main>
        </div>
      </div>
    </section>
  );
};

export default MyDash;
