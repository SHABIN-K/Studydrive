"use client";
import { semester } from "@/constants";
import DataCard from "@/components/cards/DataCard";
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
              <DataCard
                key={index}
                hrefData={{
                  pathname: `/view-subjects`,
                  query: { name: course, category: category, sem: sem.link },
                }}
                data={sem}
                altMsg="select you semester"
                style="bg-[#1c1c24] hover:bg-[#2c2f32] py-2"
                sem="Semester"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserSemester;
