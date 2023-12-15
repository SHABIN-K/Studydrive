import { toast } from "sonner";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { formatFileSize } from "@edgestore/react/utils";
import {
  DocumentCheckIcon,
  DocumentTextIcon,
  ExclamationCircleIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";

import { Cloud } from "@/public/assets";

const UploadDoc = ({
  files,
  setFiles,
  removeFile,
  value,
  onChange,
  onFilesAdded,
}) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (files.length + acceptedFiles.length > 3) {
        toast.error("You can only upload up to three files.");
        return [];
      }
      const validFiles = acceptedFiles.filter((file) => {
        if (files.some((existingFile) => existingFile.name === file.name)) {
          toast.error(`File '${file.name}' is already uploaded.`);
          return false;
        }
        if (!validateFile(file)) {
          return false;
        }
        return true;
      });

      setFiles((prevFiles) => [...prevFiles, ...validFiles]);
      return validFiles;
    },
    [files, setFiles]
  );

  const validateFile = (file) => {
    if (
      ![
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      ].includes(file.type)
    ) {
      toast.error("Invalid file type. Supported types are PDF, DOC, and DOCX.");
      return false;
    }
    return true;
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: async (acceptedFiles) => {
      const validFiles = onDrop(acceptedFiles);

      if (validFiles && validFiles.length > 0) {
        const addedFiles = validFiles.map((file) => ({
          file,
          key: Math.random().toString(36).slice(2),
          progress: "PENDING",
        }));
        void onFilesAdded?.(addedFiles);
        void onChange?.([...(value ?? []), ...addedFiles]);
      }
    },
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
      "application/vnd.openxmlformats-officedocument.presentationml.presentation":
        [".pptx"],
    },
  });
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer hover:bg-bray-800 bg-gray-700 border-gray-600 hover:border-gray-500 hover:bg-gray-600"
        {...getRootProps()}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Cloud />
          <p className="mb-2 text-sm text-gray-400 hidden md:flex">
            <span className="font-semibold">Click to upload</span>&nbsp;or&nbsp;
            <span className="font-semibold">Drag & Drop files</span>
          </p>
          <a className="btn bg-black md:hidden flex mb-2 text-white">
            Browse my files
          </a>
          <p className="text-sm md:text-xs text-gray-400">
            Supported file : pdf, doc, docx, pptx
          </p>
          <p className="text-sm md:text-xs text-gray-400">
            Please note that you are allowed to upload a maximum of 3 files.
          </p>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            {...getInputProps()}
          />
        </div>
      </div>
      {value?.map((file, index) => (
        <div
          key={index}
          className="flex h-16 w-full max-w-[100vw] flex-col justify-center rounded border border-gray-300 px-4 py-2 mt-2"
        >
          <div className="flex items-center gap-2 text-white">
            <DocumentTextIcon className="text-gray-400 w-6 h-6 shrink" />
            <div className="min-w-0 text-sm">
              <div className="overflow-hidden overflow-ellipsis whitespace-nowrap">
                {file.file.name}
              </div>
              <div className="text-xs text-gray-400">
                {formatFileSize(file.file.size)}
              </div>
            </div>
            <div className="grow" />
            <div className="flex w-12 justify-end text-xs cursor-pointer">
              {file.progress === "PENDING" ? (
                <button
                  className="rounded-md p-1 transition-colors duration-200 text-gray-400 hover:text-white w-5"
                  onClick={() => removeFile(index)}
                >
                  <TrashIcon className="shrink-0 w-5" />
                </button>
              ) : file.progress === "ERROR" ? (
                <ExclamationCircleIcon className="shrink-0 text-red-400 w-6" />
              ) : file.progress !== "COMPLETE" ? (
                <div className="cursor-wait">{Math.round(file.progress)}%</div>
              ) : (
                <DocumentCheckIcon className="shrink-0 text-gray-400 w-6" />
              )}
            </div>
          </div>
          {typeof file.progress === "number" && (
            <div className="relative h-0">
              <div className="absolute top-1 h-1 w-full overflow-clip rounded-full bg-gray-700 ">
                <div
                  className="h-full transition-all duration-300 ease-in-out bg-white"
                  style={{
                    width: file.progress ? `${file.progress}%` : "0%",
                  }}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default UploadDoc;
