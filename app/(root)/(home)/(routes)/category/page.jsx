"use client";
import { category } from "@/constants";
import { useSearchParams } from "next/navigation";
import DataCard from "@/components/cards/DataCard";

const Mycategory = () => {
  const searchParams = useSearchParams();
  const course = searchParams.get("name");
  return (
    <div>
      <h1 className="select_header">Select Category</h1>
      <div className="item-center">
        <div className="grid grid-cols-2 mt-[18px] gap-[18px]">
          {category.map((category, index) => {
            return (
              <DataCard
                key={index}
                hrefData={{
                  pathname: `/semester`,
                  query: { name: course, category: category.name },
                }}
                data={category}
                altMsg={category.description}
                style="bg-[#1c1c24] hover:bg-[#2c2f32] py-2"
                syleName="text-white"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Mycategory;
