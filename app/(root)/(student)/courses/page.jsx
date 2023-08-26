import DataCard from "@/components/DataCard";
import { category } from "@/constants/category";

const Mycourses = () => {
  return (
    <div>
      <h1 className="font-epilogue font-bold sm:font-semibold text-[20px] text-green-300 text-left">
        Select Category
      </h1>
      <div className="flex flex-col mt-[18px]">
        {category.map((category, index) => {
          return <DataCard key={index} data={category} route="category" />;
        })}
      </div>
    </div>
  );
};

export default Mycourses;
