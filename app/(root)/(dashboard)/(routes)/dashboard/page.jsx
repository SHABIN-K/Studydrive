"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const Stepper = dynamic(() => import("@/components/admin/ui/Stepper"));
const DocDetails = dynamic(() => import("@/components/admin/ui/DocDetails"));
const UploadDone = dynamic(() => import("@/components/admin/ui/UploadDone"));

import Upload from "@/components/admin/ui/Upload";

const MyDash = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const steps = ["UPLOAD", "DETAILS", "DONE"];

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

  const handleUploadBtn = () => {
    setIsLoading(true);
    try {
      setActiveStep(activeStep + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitBtn = () => {
    setIsLoading(true);
    try {
      setActiveStep(activeStep + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
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
        {activeStep !== 0 && (
          <button
            onClick={() => setActiveStep(activeStep - 1)}
            className="btn text-white w-[11rem] text-center border-green-400 border hover:border-green-400 right-0"
          >
            Previous
          </button>
        )}

        {activeStep !== steps.length - 1 && (
          <button
            onClick={activeStep === 0 ? handleUploadBtn : handleSubmitBtn}
            className="btn text-white w-[11rem] text-center border-green-400 border hover:border-green-400 right-0"
          >
            {activeStep === 0 ? "Upload" : "Submit"}
            {isLoading && "ing..."}
          </button>
        )}
      </div>
    </div>
  );
};

export default MyDash;
