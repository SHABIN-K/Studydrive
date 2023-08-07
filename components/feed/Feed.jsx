import { courses } from "@/constants/courses";
import DataCard from "../DataCard";

const Feed = () => {
  return (
    <div>
      <h1 className="font-epilogue font-bold sm:font-semibold text-[20px] text-green-300 text-left mt-3">
        Courses
      </h1>
      <div className="flex flex-wrap mt-[20px] gap-1.5 md:gap-[26px] justify-between md:justify-normal">
        {courses.map((course) => {
          return <DataCard key={course.id} data={course} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
