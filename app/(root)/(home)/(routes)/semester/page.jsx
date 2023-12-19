"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { semester } from "@/constants";
import DataCard from "@/components/cards/DataCard";
import { usePostStore } from "@/libs/state/useStore";
import NoDataFound from "@/components/ui/NoDataFound";
import { filterSyllabus } from "@/libs/hooks/usefilter";
import PostViewDialogBox from "@/components/models/PostViewDialogBox";

const UserSemester = () => {
  const searchParams = useSearchParams();
  const course = searchParams.get("name");
  const category = searchParams.get("category");

  const [isPostOpen, setIsPostOpen] = useState(false);
  const [data, setData] = useState(null);

  if (category === "Videos") {
    return <NoDataFound />;
  }

  useEffect(() => {
    if (category === "Syllabus") {
      const fetchedData = usePostStore((state) => state.posts);
      const post = filterSyllabus([course, category], fetchedData);
      const [syllabusData] = post.map((items) => items);

      // Set the state to make the dialog box open and pass data
      if (syllabusData) {
        setIsPostOpen(true);
        setData(syllabusData);
      }
    }
  }, [category, course]);

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
                syleName="text-white"
                sem="Semester"
              />
            );
          })}
        </div>
      </div>
      {isPostOpen && data && (
        <PostViewDialogBox
          isOpen={isPostOpen}
          setIsOpen={setIsPostOpen}
          data={data}
        />
      )}
    </div>
  );
};

export default UserSemester;
