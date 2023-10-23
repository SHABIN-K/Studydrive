"use client";

import Upload from "@/components/admin/ui/Upload";
import AdminNavbar from "@/components/admin/ui/AdminNavbar";
import AdminSidebar from "@/components/admin/ui/AdminSidebar";
import Stepper from "@/components/admin/ui/Stepper";
import FormButtons from "@/components/ui/FormButtons";

const MyDash = () => {
  const handleNextBtn = () => {};
  return (
    <section className="flex h-screen font-normal">
      <div className="flex-1 flex flex-col overflow-auto">
        <AdminNavbar label="Dashboard" />
        <div className="flex flex-row">
          <div className="md:flex hidden">
            <AdminSidebar />
          </div>
          <main className="p-5 md:p-4 items-start justify-center flex-grow">
            <div className="flex flex-col items-center justify-center">
              <div className="flex-col items-center mt-5">
                <h3 className="text-white text-3xl font-extrabold text-center">
                  Upload document
                </h3>
                <p className="text-gray-200 mt-2 text-sm font-medium text-center align-bottom mb-2">
                  Upload your summaries and other study documents to Pasc Hub
                </p>
              </div>
              <Stepper />
              <div className="bg-[#1d232a] p-3 rounded-lg text-center mt-5 border border-green-400 w-full max-h-[440px] mb-5 overflow-hidden">
                <Upload />
              </div>
              <div className="md:w-full md:flex md:justify-end">
                <FormButtons
                  primaryLabel="Next"
                  onPrimaryClick={handleNextBtn}
                  primaryClassName="btn text-white w-[11rem] text-center border-green-400 border hover:border-green-400 right-0"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default MyDash;
