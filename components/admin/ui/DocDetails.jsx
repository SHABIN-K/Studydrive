import { TrashIcon } from "@heroicons/react/20/solid";

const DocDetails = ({ files, removeFile }) => {
  return (
    <div>
      {files.length > 0 && (
        <div className="w-full">
          {files.map((file, index) => (
            <ul key={index} className="flex justify-between items-center">
              <li className="text-white text-sm font-bold mt-1">{file.name}</li>
              <li className="text-gray-400 hover:text-white w-5">
                <TrashIcon onClick={() => removeFile(index)} />
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default DocDetails;
