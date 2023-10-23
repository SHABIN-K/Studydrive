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
          <main className="p-5 md:p-4 overflow-auto">
            <div className="flex flex-col items-center justify-center">
              <div className="flex-col items-center">
                <h3 className="text-white text-3xl font-extrabold text-center">
                  Upload document
                </h3>
                <p className="text-gray-300 mt-1 text-sm font-extrabold text-center align-bottom mb-2 tracking-tight sm:tracking-normal">
                  Upload your summaries and other study documents to Pasc Hub
                </p>
              </div>
              <div className="bg-[#1d232a] p-5 rounded-2xl text-center md:min-w-[840px]">
                Content goes here
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default MyDash;
