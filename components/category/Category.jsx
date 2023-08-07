import { category } from "@/constants/category";
import DataCard from "../DataCard";

const Category = () => {
  return (
    <div>
      <h1 className="font-epilogue font-bold sm:font-semibold text-[20px] text-green-300 text-left">
        Discover cateogries
      </h1>
      <div className="grid grid-cols-4 mt-[18px] xs:gap-1.5 md:gap-[26px] justify-between md:justify-start ">
        {category.map((category) => {
          return <DataCard key={category.id} data={category} />;
        })}
      </div>
    </div>
  );
};

export default Category;
