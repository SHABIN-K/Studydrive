import { useState } from "react";
import { toast } from "sonner";
import { PlusIcon } from "@heroicons/react/20/solid";

import ComboBox from "../ui/ComboBox";
import { courses, semester } from "@/constants";
import FormField from "@/components/ui/FormField";
import FormButtons from "@/components/ui/FormButtons";

const AddSubject = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [userCourse, setUserCourses] = useState(courses[6]);
  const [userSemester, setUserSemester] = useState(semester[2]);
  const [subjectCode, setsubjectCode] = useState("");
  const [subjectName, setSubjectName] = useState("");

  const styleAddSubject = {
    classlabel: "block mb-2 text-sm font-medium text-gray-900",
    classInput:
      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log("hello world");
    } catch (error) {
      console.error("NEXT_AUTH Error: " + error);
      toast.error("something went wrong during login attempt");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full max-w-2xl h-full md:h-auto">
      <div className="relative p-4 bg-white rounded-lg sm:p-5">
        <div className="items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
          <h3 className="text-lg font-semibold text-gray-900">
            <a href="#addproduct">Add Subject</a>
          </h3>
        </div>

        <div>
          <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <ComboBox
                value={userCourse}
                onChange={setUserCourses}
                data={courses}
                label="Course Name"
                zIndex={5}
                classLabel={styleAddSubject.classlabel}
                classInput={styleAddSubject.classInput}
              />
            </div>
            <div>
              <ComboBox
                value={userSemester}
                onChange={setUserSemester}
                data={semester}
                label="Choose Semester"
                zIndex={4}
                classLabel={styleAddSubject.classlabel}
                classInput={styleAddSubject.classInput}
              />
            </div>
            <div>
              <FormField
                label="Course Code"
                type="text"
                name="coursecode"
                value={subjectCode}
                placeholder="Type course code"
                onChange={(e) => setsubjectCode(e.target.value)}
                classLabel={styleAddSubject.classlabel}
                classInput={styleAddSubject.classInput}
              />
            </div>
            <div>
              <FormField
                label="Subject name"
                type="text"
                name="subjectname"
                value={subjectName}
                placeholder="Type Subject name"
                onChange={(e) => setSubjectName(e.target.value)}
                classLabel={styleAddSubject.classlabel}
                classInput={styleAddSubject.classInput}
              />
            </div>
          </div>
          <FormButtons
            primaryLabel={
              <>
                <PlusIcon className="w-5" />
                <span>{isLoading ? "Please wait..." : "Add new product"}</span>
              </>
            }
            onPrimaryClick={handleSubmit}
            primaryClassName="text-white inline-flex items-center bg-green-400 hover:bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center gap-2"
          />
        </div>
      </div>
    </div>
  );
};

export default AddSubject;
