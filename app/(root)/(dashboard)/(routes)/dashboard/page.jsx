"use client";

import Upload from "@/components/admin/Upload";
import AdminNavbar from "@/components/admin/ui/AdminNavbar";
import AdminSidebar from "@/components/admin/ui/AdminSidebar";

const MyDash = () => {
  return (
    <section className="flex h-screen font-normal">
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="">
          <AdminNavbar label="Dashboard" />
        </div>
        <div className="flex flex-row">
          <div className="md:flex hidden">
            <AdminSidebar />
          </div>
          <main className="p-5 md:p-4 overflow-auto items-start justify-center flex-grow">
            <div className="flex flex-col items-center justify-center">
              <div className="flex-col items-center">
                <h3 className="text-white text-3xl font-extrabold text-center">
                  Upload document
                </h3>
                <p className="text-gray-200 mt-2 text-sm font-medium text-center align-bottom mb-2">
                  Upload your summaries and other study documents to Pasc Hub
                </p>
              </div>
              <div className="bg-[#1d232a] p-3 rounded-lg text-center mt-5 border border-green-400 w-full max-h-[440px] mb-5 overflow-hidden">
                <Upload/>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default MyDash;
