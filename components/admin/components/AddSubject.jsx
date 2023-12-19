import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";
import { PlusIcon } from "@heroicons/react/20/solid";

import ComboBox from "../ui/ComboBox";
import { SmallLoading } from "@/public/assets";
import { courses, semester } from "@/constants";
import FormField from "@/components/ui/FormField";
import FormButtons from "@/components/ui/FormButtons";
import { SubjectValidation } from "@/libs/validations/subject";

const AddSubject = ({ userEmail }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [subjectCode, setsubjectCode] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [courseName, setCourseName] = useState(courses[6]);
  const [userSemester, setUserSemester] = useState(semester[2]);

  const styleAddSubject = {
    classlabel: "block mb-2 text-sm font-medium text-gray-900",
    classInput:
      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate user input using the schema
    const userInput = {
      courseName: courseName.link,
      userSemester: userSemester.link,
      subjectCode,
      subjectName,
    };

    try {
      // Validate the user input
      const validation = SubjectValidation.addSubject.safeParse(userInput);

      //if validation is failure, return error message
      if (validation.success === false) {
        const { issues } = validation.error;
        issues.forEach((err) => {
          toast.error(err.message);
        });
      } else {
        // If validation is successful, make the API request
        const response = await axios.post("/api/subject", {
          courseName: courseName.link,
          userSemester: userSemester.link,
          subjectCode,
          subjectName,
          userEmail,
        });
        if (response.statusText === "FAILED") {
          toast.error(response.data);
        } else {
          toast.success("Successfully created");
          handleReset();
        }
      }
    } catch (error) {
      console.error("NEXT_AUTH Error: " + error);
      toast.error("something went wrong ");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setsubjectCode("");
    setSubjectName("");
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
          <div className="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <ComboBox
                value={courseName}
                onChange={setCourseName}
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
                label="Subject Code"
                type="text"
                name="coursecode"
                value={subjectCode}
                placeholder="Type Subject code"
                onChange={(e) => setsubjectCode(e.target.value)}
                classLabel={styleAddSubject.classlabel}
                classInput={`${styleAddSubject.classInput} uppercase`}
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
                classInput={`${styleAddSubject.classInput} capitalize`}
              />
            </div>
          </div>
          <FormButtons
            primaryLabel={
              <>
                {isLoading ? <SmallLoading /> : <PlusIcon className="w-5" />}
                <span>{isLoading ? "Please wait..." : "Add new  Subject"}</span>
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
