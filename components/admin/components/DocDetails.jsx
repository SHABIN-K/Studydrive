import { toast } from "sonner";
import { formatFileSize } from "@edgestore/react/utils";
import { useEffect, useState } from "react";
import { DocumentTextIcon, TrashIcon } from "@heroicons/react/20/solid";

import ComboBox from "../ui/ComboBox";
import RoleSelect from "../ui/ListBox";
import FormField from "@/components/ui/FormField";
import { useFilterSubject } from "@/libs/hooks/useSubject";
import { courses, semester, category } from "@/constants";

const DocDetails = ({
  files,
  removeFile,
  fileDetails,
  setFileDetails,
  handlePreviousBtn,
}) => {
  const [subjectData, setSubjectData] = useState([]);
  const [userCourse, setUserCourses] = useState(courses[6]);
  const [userSemester, setUserSemester] = useState(semester[2]);
  const [userSubject, setUserSubject] = useState("");
  const [tempData, setTempData] = useState([]);

  const {
    data: fetchedData,
    error,
    isLoading: loading,
  } = useFilterSubject({
    course: userCourse.link,
    semester: userSemester.link,
  });

  useEffect(() => {
    if (fetchedData) {
      const subjects = fetchedData.map((data) => ({
        id: data.id,
        name: data.subject_name,
        link: data.subject_code,
      }));

      setSubjectData(subjects);
      // Set default value if userSubject is not already set
      if (!userSubject && subjects.length > 0) {
        setUserSubject(subjects[0]);
      }
    }

    if (error) {
      console.error("Error fetching subject data:", error);
      toast.error("Something went wrong in fetching subjects");
    }
  }, [fetchedData, error, userSubject]);

  // useEffect to update fileDetails when dependencies change
  useEffect(() => {
    setFileDetails(
      files.map((file, index) => ({
        title: tempData[index]?.title || file.name.replace(/\.[^/.]+$/, ""),
        description: tempData[index]?.description || "",
        category: tempData[index]?.category || category[0].name,
        course: userCourse.link,
        semester: userSemester.link,
        subject: userSubject,
      }))
    );
  }, [files, userCourse, userSubject, userSemester, setFileDetails, tempData]);

  useEffect(() => {
    setTempData(
      files.map(() => ({
        title: "",
        description: "",
        category: category[0].name,
      }))
    );
  }, [files]);

  const handleTitleChange = (index, value) => {
    const updatedTempData = [...tempData];
    updatedTempData[index].title = value;
    setTempData(updatedTempData);
  };

  const handleDescriptionChange = (index, value) => {
    const updatedTempData = [...tempData];
    updatedTempData[index].description = value;
    setTempData(updatedTempData);
  };

  const handleCategoryChange = (index, value) => {
    const updatedTempData = [...tempData];
    updatedTempData[index].category = value;
    setTempData(updatedTempData);
  };

  //Extract data
  const filteredCategory = category.map((data) => data.name);

  const styleDocDetails = {
    classlabel: "text-white font-medium md:font-semibold",
    classInput:
      "w-full bg-gray-300 py-2 pl-3 pr-10 text-sm text-black font-medium",
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-between mb-4 items-center space-y-1">
        <ComboBox
          value={userCourse}
          onChange={setUserCourses}
          data={courses}
          label="Enter the Course Name"
          zIndex={5}
          classLabel={styleDocDetails.classlabel}
          classInput={styleDocDetails.classInput}
        />
        <ComboBox
          value={userSemester}
          onChange={setUserSemester}
          data={semester}
          label="Enter the Semester"
          zIndex={4}
          classLabel={styleDocDetails.classlabel}
          classInput={styleDocDetails.classInput}
        />
        <ComboBox
          value={userSubject}
          onChange={setUserSubject}
          data={subjectData}
          label="Enter the Subject Name"
          zIndex={3}
          classLabel={styleDocDetails.classlabel}
          classInput={styleDocDetails.classInput}
          subTrue="subject"
          isloading={loading}
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
                    <span className="text-xs">{formatFileSize(file.size)}</span>
                  </p>
                </div>
                {files.length === 1 ? (
                  // If there are no files
                  <p className="text-gray-400 hover:text-white w-5">
                    <TrashIcon
                      onClick={() => {
                        removeFile(index);
                        handlePreviousBtn();
                      }}
                    />
                  </p>
                ) : (
                  // If there are files
                  <p className="text-gray-400 hover:text-white w-5">
                    <TrashIcon onClick={() => removeFile(index)} />
                  </p>
                )}
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
