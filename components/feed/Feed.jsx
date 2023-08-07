import { courses } from "@/constants/courses";
import DataCard from "../DataCard";

const Feed = () => {
  return (
    <div>
      <h1 className="font-epilogue font-bold sm:font-semibold text-[20px] text-green-300 text-left mt-3">
        Courses
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-6  mt-3 gap-1.5 md:gap-[26px] justify-between md:justify-start">
        {courses.map((course) => {
          return <DataCard key={course.id} data={course} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
