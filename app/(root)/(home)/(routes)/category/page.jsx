"use client";
import DataCard from "@/components/cards/DataCard";
import { category } from "@/constants";

import { useSearchParams } from "next/navigation";

const Mycategory = () => {
  const searchParams = useSearchParams();
  const course = searchParams.get("name");
  return (
    <div>
      <h1 className="select_header">Select Category</h1>
      <div className="item-center">
        <div className="grid grid-cols-2 mt-[18px] gap-[26px]">
          {category.map((category, index) => {
            return (
              <DataCard
                key={index}
                data={category}
                route="semester"
                course={course}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Mycategory;
