import { category } from "@/constants/category";
import MenuCard from "../MenuCard";

const Category = () => {
  return (
    <div>
      <h1 className="font-epilogue font-bold sm:font-semibold text-[20px] text-green-300 text-left">
        Discover categories
      </h1>
      <div className="grid grid-cols-4 md:flex md:flex-wrap mt-[18px] xs:gap-1.5 md:gap-[26px]">
        {category.map((category, index) => {
          return <MenuCard key={index} data={category} route="category" />;
        })}
      </div>
    </div>
  );
};

export default Category;
