import { DocumentTextIcon, TrashIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

import ComboBox from "./ComboBox";
import { courses } from "@/constants";

const DocDetails = ({ files, removeFile }) => {
  const [userCourse, setUserCourses] = useState(courses[5].name);
  console.log(userCourse);
  // Extract all course names
  //const allCourses = courses.map((course) => course.name);
  return (
    <div>
      <div className="">
        <h1 className="text-white font-bold">Select the course</h1>
        <ComboBox value={userCourse} onChange={setUserCourses} data={courses} />
      </div>
      <hr className="bg-gray-700 h-[2px] rounded mt-2 mr-2 ml-2 border-none mb-5" />
      {files.length > 0 && (
        <div className="w-full">
          {files.map((file, index) => (
            <div key={index}>
              <div className="flex justify-between items-center">
                <p className="flex items-center mt-1">
                  <DocumentTextIcon className="text-gray-400 w-6 h-6" />
                  <span className="text-white font-medium text-sm">
                    {file.name}
                  </span>
                </p>
                <p className="text-gray-400 hover:text-white w-5">
                  <TrashIcon onClick={() => removeFile(index)} />
                </p>
              </div>
              <hr className="bg-gray-700 h-[2px] rounded mt-5 mr-2 ml-2 border-none" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DocDetails;
