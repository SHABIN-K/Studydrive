import { courses } from "@/constants/courses";
import DataCard from "../DataCard";

const Feed = () => {
  return (
    <div>
      <h1 className="font-epilogue font-bold sm:font-semibold text-[20px] text-green-300 text-left mt-3">
        Courses
      </h1>
      <div className="grid grid-cols-4 md:grid-cols-5  mt-2 gap-1.5 md:gap-[26px] justify-between md:justify-start">
        {courses.map((course, index) => {
          return <DataCard key={index} data={course} route="courses" style="mt-2 md:mt-0" />;
        })}
      </div>
    </div>
  );
};

export default Feed;
