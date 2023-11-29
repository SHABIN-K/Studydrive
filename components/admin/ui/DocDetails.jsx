import { DocumentTextIcon, TrashIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { filesize } from "filesize";

import ComboBox from "./ComboBox";
import { courses, semester } from "@/constants";
import FormField from "@/components/ui/FormField";

const DocDetails = ({ files, removeFile }) => {
  const [userCourse, setUserCourses] = useState(courses[6]);
  const [userSemester, setUserSemester] = useState(semester[0]);

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-between mb-4 items-center space-y-1">
        <ComboBox
          value={userCourse}
          onChange={setUserCourses}
          data={courses}
          label="Enter the course name :"
          zIndex={5}
        />
        <ComboBox
          value={userSemester}
          onChange={setUserSemester}
          data={semester}
          label="Enter the Semester"
          zIndex={4}
        />
        <ComboBox
          value={userCourse}
          onChange={setUserCourses}
          data={courses}
          label="Enter the Subject Name or Code :"
          zIndex={3}
        />
      </div>
      <hr className="bg-gray-700 h-[2px] rounded mx-2 my-2 border-none" />
      {files.length > 0 && (
        <div className="w-full">
          {files.map((file, index) => {
            console.log(file);
            return (
              <div key={index}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <DocumentTextIcon className="text-gray-400 w-6" />
                    <p className="">
                      <span className="text-white font-medium text-xs">
                        {file.name}
                      </span>
                      <p className="text-xs">{filesize(file.size)}</p>
                    </p>
                  </div>
                  <p className="text-gray-400 hover:text-white w-5">
                    <TrashIcon onClick={() => removeFile(index)} />
                  </p>
                </div>
                <hr className="bg-gray-700 h-[2px] rounded mx-2 my-2 border-none" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DocDetails;
