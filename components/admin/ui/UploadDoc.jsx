import { Cloud } from "@/public/assets";
import { DocumentTextIcon, TrashIcon } from "@heroicons/react/20/solid";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";

const UploadDoc = ({ files, setFiles, removeFile }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (files.length + acceptedFiles.length > 3) {
        toast.error("You can only upload up to three files.");
        return;
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
      setFiles([...files, ...validFiles]);
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
    onDrop: (acceptedFiles) => {
      if (validateFile(acceptedFiles[0])) {
        onDrop(acceptedFiles);
      }
    },
    accept: [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ],
  });

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <label
        htmlFor="dropzone-file"
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
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            {...getInputProps()}
          />
        </div>
      </label>
      {files.length > 0 &&
        files.map((file, index) => (
          <div
            key={index}
            className="mt-1 w-full hover:bg-gray-800 rounded-lg py-1"
          >
            <ul className="flex justify-between items-center mr-2 ml-2 text-white">
              <p className="flex items-center text-sm font-medium mt-1">
                <DocumentTextIcon className="text-gray-400 w-6 h-6" />
                <span>{file.name}</span>
              </p>
              <p className="text-gray-400 hover:text-white w-5">
                <TrashIcon onClick={() => removeFile(index)} />
              </p>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default UploadDoc;
