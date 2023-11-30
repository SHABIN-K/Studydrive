import { DocumentTextIcon, TrashIcon } from "@heroicons/react/20/solid";
import { filesize } from "filesize";

import ComboBox from "./ComboBox";
import FormField from "@/components/ui/FormField";
import RoleSelect from "./ListBox";

const DocDetails = ({
  files,
  description,
  userCourse,
  userSubject,
  userSemester,
  userCategory,
  setTitle,
  setDescription,
  setUserCourses,
  setUserSubject,
  setUserSemester,
  setUserCategory,
  courses,
  semester,
  subjects,
  category,
  removeFile,
}) => {
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
                  <p className="">
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
                <div className="flex flex-wrap lg:flex-nowrap justify-between w-full items-center lg:px-2 lg:space-x-2">
                  <div className="relative w-full lg:w-1/2">
                    <FormField
                      label="title"
                      type="text"
                      name="text"
                      value={file.name.replace(/\.[^/.]+$/, "")}
                      onChange={(e) => setTitle(e.target.value)}
                      classLabel="label_loinForm capitalize"
                      classInput="input_loinForm"
                    />
                  </div>
                  <div className="relative w-full lg:w-1/2">
                    <label className="label_loinForm capitalize">
                      category
                    </label>
                    <RoleSelect
                      value={userCategory}
                      onChange={setUserCategory}
                      data={filteredCategory}
                      style={{ bg: "bg-gray-300" }}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="label_loinForm capitalize"
                  >
                    description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="3"
                    className="input_loinForm"
                    placeholder="Write document description here"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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
