import { filesize } from "filesize";
import { useEffect, useState } from "react";
import { DocumentTextIcon, TrashIcon } from "@heroicons/react/20/solid";

import ComboBox from "./ComboBox";
import RoleSelect from "./ListBox";
import FormField from "@/components/ui/FormField";
import { courses, semester, category, subjects } from "@/constants";

const DocDetails = ({ files, removeFile, fileDetails, setFileDetails }) => {
  const [userCourse, setUserCourses] = useState(courses[6]);
  const [userSubject, setUserSubject] = useState(subjects[0]);
  const [userSemester, setUserSemester] = useState(semester[2]);

  // useEffect to update fileDetails when dependencies change
  useEffect(() => {
    setFileDetails(
      files.map((file) => ({
        title: file.name.replace(/\.[^/.]+$/, ""),
        description: "",
        category: category[0].name,
        course: userCourse.link,
        semester: userSemester.link,
        subject: userSubject.link,
      }))
    );
  }, [files, userCourse, userSubject, userSemester, setFileDetails]);

  console.log(fileDetails);

  const handleTitleChange = (index, value) => {
    const updatedDetails = [...fileDetails];
    updatedDetails[index].title = value;
    setFileDetails(updatedDetails);
  };

  const handleDescriptionChange = (index, value) => {
    const updatedDetails = [...fileDetails];
    updatedDetails[index].description = value;
    setFileDetails(updatedDetails);
  };

  const handleCategoryChange = (index, value) => {
    const updatedDetails = [...fileDetails];
    updatedDetails[index].category = value;
    setFileDetails(updatedDetails);
  };

  //Extract data
  const filteredCategory = category.map((data) => data.name);

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-between mb-4 items-center space-y-1">
        <ComboBox
          value={userCourse}
          onChange={setUserCourses}
          data={courses}
          label="Enter the Course Name"
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
          value={userSubject}
          onChange={setUserSubject}
          data={subjects}
          label="Enter the Subject Name or Code"
          zIndex={3}
          subTrue="subject"
        />
      </div>
      <hr className="bg-gray-700 h-[2px] rounded mx-2 my-2 border-none" />
      {files.length > 0 && (
        <div className="w-full">
          {files.map((file, index) => (
            <div key={index}>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <DocumentTextIcon className="text-gray-400 w-6" />
                  <p className="grid">
                    <span className="text-white font-medium text-sm">
                      {file.name}
                    </span>
                    <span className="text-xs">{filesize(file.size)}</span>
                  </p>
                </div>
                <p className="text-gray-400 hover:text-white w-5">
                  <TrashIcon onClick={() => removeFile(index)} />
                </p>
              </div>
              <hr className="bg-gray-700 h-[2px] rounded mx-2 my-2 border-none" />
              <div className="space-y-2">
                <div className="flex flex-wrap lg:flex-nowrap justify-between w-full items-center lg:space-x-2">
                  <div className="relative w-full lg:w-1/2">
                    <FormField
                      label="title"
                      type="text"
                      name={`text-${index}`}
                      placeholder="Enter your title here"
                      value={fileDetails[index]?.title || ""}
                      onChange={(e) => handleTitleChange(index, e.target.value)}
                      classLabel="label_loinForm capitalize"
                      classInput="input_loinForm"
                    />
                  </div>
                  <div className="relative w-full lg:w-1/2">
                    <label className="label_loinForm capitalize">
                      category
                    </label>
                    <RoleSelect
                      value={fileDetails[index]?.category || ""}
                      onChange={(value) => handleCategoryChange(index, value)}
                      data={filteredCategory}
                      style={{ bg: "bg-gray-300" }}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor={`description-${index}`}
                    className="label_loinForm capitalize"
                  >
                    description
                  </label>
                  <textarea
                    id={`description-${index}`}
                    name={`description-${index}`}
                    rows="3"
                    className="input_loinForm"
                    placeholder="Write document description here"
                    value={fileDetails[index]?.description || ""}
                    onChange={(e) =>
                      handleDescriptionChange(index, e.target.value)
                    }
                  ></textarea>
                </div>
              </div>
              <hr className="bg-gray-700 h-[2px] rounded mx-2 my-2 border-none" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DocDetails;
