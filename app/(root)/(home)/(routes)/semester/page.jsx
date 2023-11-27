"use client";

import SemCard from "@/components/cards/SemCard";
import { semester } from "@/constants";
import { useSearchParams } from "next/navigation";
const UserSemester = () => {
  const searchParams = useSearchParams();
  const course = searchParams.get("name");
  const category = searchParams.get("category");
  return (
    <div>
      <h1 className="select_header">Select Semester</h1>
      <div className="items-center">
        <div className="grid grid-cols-2 mt-[18px] gap-[18px]">
          {semester.map((sem, index) => {
            return (
              <SemCard
                key={index}
                data={sem}
                route="view-subjects"
                course={course}
                category={category}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserSemester;
