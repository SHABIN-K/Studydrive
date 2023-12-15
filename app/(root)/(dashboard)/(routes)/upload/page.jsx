"use client";

import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";

import { useEdgeStore } from "@/libs/edgestore";
import { PostValidation } from "@/libs/validations/post";
import UploadDoc from "@/components/admin/components/UploadDoc";
import DocDetails from "@/components/admin/components/DocDetails";
import UploadDoneModel from "@/components/admin/ui/UploadDoneModel";

const Stepper = dynamic(() => import("@/components/admin/ui/Stepper"));

const Upload = () => {
  const { edgestore } = useEdgeStore();
  const { data: session } = useSession();

  const [activeStep, setActiveStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [submitModalOpen, setSubmitModalOpen] = useState(false);

  //for edgeStore
  const [fileStates, setFileStates] = useState([]);
  const [uploadRes, setUploadRes] = useState([]);

  //for loaclStore
  const [files, setFiles] = useState([]);
  const [fileDetails, setFileDetails] = useState([]);

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
            value={fileStates}
            onChange={setFileStates}
            onFilesAdded={async (addedFiles) => {
              setFileStates([...fileStates, ...addedFiles]);
            }}
          />
        );
      case 1:
        return (
          <DocDetails
            files={files}
            removeFile={removeFile}
            setFileDetails={setFileDetails}
            fileDetails={fileDetails}
            handlePreviousBtn={handlePreviousBtn}
          />
        );
      default:
        return null;
    }
  };

  const updateFileProgress = (key, progress) => {
    setFileStates((fileStates) => {
      const newFileStates = [...fileStates];
      const fileState = newFileStates.find(
        (fileState) => fileState.key === key
      );
      if (fileState) {
        fileState.progress = progress;
      }
      return newFileStates;
    });
  };

  //Function to handle remove items from the list
  const removeFile = (fileIndex) => {
    const updatedFiles = [...files];
    updatedFiles.splice(fileIndex, 1);
    setFiles(updatedFiles);
    const updatedFile = [...fileStates];
    updatedFile.splice(fileIndex, 1);
    setFileStates(updatedFile);
  };

  // Function to handle the "Previous" button click
  const handlePreviousBtn = () => {
    setActiveStep(activeStep - 1);
  };

  // Function to handle the "Next" button click
  const handleNextBtn = async () => {
    setIsLoading(true);

    // Validate that at least one file is selected
    if (fileStates.length < 1) {
      toast.error("One document must be selected for the next step");
      setIsLoading(false);
      return;
    }

    try {
      await Promise.all(
        fileStates.map(async (fileState) => {
          try {
            if (fileState.progress !== "PENDING") return;
            const res = await edgestore.publicFiles.upload({
              file: fileState.file,
              options: {
                temporary: true,
              },
              onProgressChange: async (progress) => {
                updateFileProgress(fileState.key, progress);
                if (progress === 100) {
                  await new Promise((resolve) => setTimeout(resolve, 1000));
                  updateFileProgress(fileState.key, "COMPLETE");
                }
              },
            });
            setUploadRes((uploadRes) => [
              ...uploadRes,
              {
                url: res.url,
                filename: fileState.file.name,
              },
            ]);
          } catch (err) {
            updateFileProgress(fileState.key, "ERROR");
          }
        })
      );
      setActiveStep(activeStep + 1);
    } catch (error) {
      console.error("An error occurred during file upload:", error);
      toast.error("An error occurred during file upload");
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle the "Submit" button click
  const handleSubmitBtn = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate each fileDetail in the array
    const validationResults = fileDetails.map((fileDetail, index) => {
      const userInput = {
        postTitle: fileDetail.title,
        postDesc: fileDetail.description,
      };

      return PostValidation.addPost.safeParse(userInput);
    });

    try {
      // Check if any validation failed
      const hasValidationErrors = validationResults.some(
        (validation) => validation.success === false
      );

      //if validation is failure, return error message
      if (hasValidationErrors) {
        // Display error messages for each failed validation
        validationResults.forEach((validation, index) => {
          if (validation.success === false) {
            const { issues } = validation.error;
            issues.forEach((err) => {
              toast.error(
                `Validation error for ${fileDetails[index].title}: ${err.message}`
              );
            });
          }
        });
      } else {
        // If validation is successful, make the API request
        const response = await axios.post("/api/post", {
          fileDetails,
          uploadRes,
          userEmail: session.user.email,
        });
        if (response.statusText === "FAILED") {
          toast.error(response.data);
        } else {
          toast.success("Successfully created");
         // setSubmitModalOpen(true);
        }
      }
    } catch (error) {
      console.error("An error occurred during file upload:", error);
      toast.error("An error occurred during file upload");
    } finally {
      setIsLoading(false);
    }
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
        <UploadDoneModel
          isOpen={submitModalOpen}
          setIsOpen={setSubmitModalOpen}
        />
      )}
    </div>
  );
};

export default Upload;
