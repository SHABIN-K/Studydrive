import { category } from "@/constants/category";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <div>
      <h1 className="font-epilogue font-bold sm:font-semibold text-[20px] text-white text-left">
        Discover cateogries
      </h1>
      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {category.map((data) => {
          return <CategoryCard key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Category;
