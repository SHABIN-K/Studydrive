"use client";
import dynamic from "next/dynamic";
import Upload from "@/components/admin/ui/Upload";
import AdminNavbar from "@/components/admin/ui/AdminNavbar";
import AdminSidebar from "@/components/admin/ui/AdminSidebar";

const Stepper = dynamic(() => import("@/components/admin/ui/Stepper"), {
  ssr: false,
});

import FormButtons from "@/components/ui/FormButtons";
import DocDetails from "@/components/admin/ui/DocDetails";
import { useState } from "react";
import UploadDone from "@/components/admin/ui/UploadDone";

const MyDash = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [{ label: "UPLOAD" }, { label: "DETAILS" }, { label: "DONE" }];

  const handleNextBtn = () => {
    setActiveStep(activeStep + 1);
  };

  const getSectionComponent = () => {
    switch (activeStep) {
      case 0:
        return <Upload />;
      case 1:
        return <DocDetails />;
      case 2:
        return <UploadDone />;
      default:
        return null;
    }
  };
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
              <Stepper steps={steps} activeStep={activeStep} />
              <div className="bg-[#1d232a] p-3 rounded-lg text-center mt-5 border border-green-400 w-full max-h-[440px] mb-5 overflow-hidden">
                {getSectionComponent()}
              </div>
              <div className="md:w-full md:flex md:justify-end">
                <button
                  onClick={() => setActiveStep(activeStep - 1)}
                  className="btn text-white w-[11rem] text-center border-green-400 border hover:border-green-400 right-0"
                >
                  Previous
                </button>

                {activeStep !== steps.length - 1 && (
                  <button
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="btn text-white w-[11rem] text-center border-green-400 border hover:border-green-400 right-0"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default MyDash;
