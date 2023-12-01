"use client";

import { useState } from "react";
import { toast } from "sonner";
import dynamic from "next/dynamic";

// Import components dynamically
const Stepper = dynamic(() => import("@/components/admin/ui/Stepper"));
const DocDetails = dynamic(() => import("@/components/admin/ui/DocDetails"));
const UploadDone = dynamic(() => import("@/components/admin/ui/UploadDone"));

import UploadDoc from "@/components/admin/ui/UploadDoc";
import { courses, semester, category, subjects } from "@/constants";

const Upload = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [submitModalOpen, setSubmitModalOpen] = useState(false);

  const [files, setFiles] = useState([
    {
      name: "pdf-file-for-development.pdf",
      size: 132424,
    },
  ]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [userCourse, setUserCourses] = useState(courses[6]);
  const [userSubject, setUserSubject] = useState(subjects[0]);
  const [userSemester, setUserSemester] = useState(semester[2]);
  const [userCategory, setUserCategory] = useState(category[0].name);

  const [docData, setDocData] = useState(() => ({
    title,
    description,
    userCourse: {
      link: userCourse.link,
    },
    userSubject,
    userSemester: {
      link: userSemester.link,
    },
    userCategory,
    userFile: files,
  }));
  //console.log(files);
  //console.log(docData);
  console.log("Title:", title);
  console.log("Description:", description);

  // Array of ste
  const steps = ["UPLOAD", "DETAILS", "DONE"];

  // Function to get the appropriate section component based on the active step
  const getSectionComponent = () => {
    switch (activeStep) {
      case 0:
        return (
          <UploadDoc
            files={files}
            setFiles={setFiles}
            removeFile={removeFile}
          />
        );
      case 1:
        return (
          <DocDetails
            files={files}
            description={description}
            userCourse={userCourse}
            userSubject={userSubject}
            userSemester={userSemester}
            userCategory={userCategory}
            setTitle={setTitle}
            setDescription={setDescription}
            setUserCourses={setUserCourses}
            setUserSubject={setUserSubject}
            setUserSemester={setUserSemester}
            setUserCategory={setUserCategory}
            courses={courses}
            semester={semester}
            subjects={subjects}
            category={category}
            removeFile={removeFile}
          />
        );
      default:
        return null;
    }
  };

  // Function to handle the "Previous" button click
  const handlePreviousBtn = () => {
    setActiveStep(activeStep - 1);
  };

  // Function to handle the "Next" button click
  const handleNextBtn = () => {
    setIsLoading(true);

    // Validate that at least one file is selected
    if (files.length < 1) {
      toast.error("One document must be selected for the next step");
      setIsLoading(false);
      return;
    }

    // Proceed to the next step
    setActiveStep(activeStep + 1);
    setIsLoading(false);
  };

  // Function to handle the "Submit" button click
  const handleSubmitBtn = () => {
    setIsLoading(true);
    try {
      //setActiveStep(activeStep + 1);
      setInviteModalOpen(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  //Function to handle remove items from the list
  const removeFile = (fileIndex) => {
    const updatedFiles = [...files];
    updatedFiles.splice(fileIndex, 1);
    setFiles(updatedFiles);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Title and description */}
      <div className="flex-col items-center mt-5">
        <h3 className="text-white text-3xl font-extrabold text-center">
          Upload document
        </h3>
        <p className="text-gray-200 mt-2 text-sm font-medium text-center align-bottom mb-2">
          Upload your summaries and other study documents to Pasc Hub
        </p>
      </div>

      {/* Stepper component */}
      <Stepper steps={steps} activeStep={activeStep} />

      {/* Section component based on the active step*/}

      <div className="bg-[#1d232a] p-3 rounded-lg mt-5 border border-green-400 w-full max-h-[490px] mb-5 overflow-auto">
        {getSectionComponent()}
      </div>

      {/* Navigation buttons */}
      <div className="md:w-full md:flex md:justify-end">
        {/* Previous button */}
        {activeStep !== 0 && (
          <button
            onClick={handlePreviousBtn}
            className="btn bg-[#1d232a] text-white w-[11rem] text-center border-green-400 border hover:border-green-400 right-0"
          >
            Previous
          </button>
        )}
        {/* Next button */}
        {activeStep !== steps.length - 1 && (
          <div
            onClick={activeStep === 0 ? handleNextBtn : handleSubmitBtn}
            className="btn bg-[#1d232a] text-white w-[11rem] text-center border-green-400 border hover:border-green-400 right-0"
          >
            {activeStep === 0 ? "Upload" : "Submit"}
            {isLoading && "ing..."}
          </div>
        )}
      </div>

      {submitModalOpen && (
        <UploadDone isOpen={submitModalOpen} setIsOpen={setSubmitModalOpen} />
      )}
    </div>
  );
};

export default Upload;
