import DataCard from "@/components/cards/DataCard";
import { category } from "@/constants";


const Mycourses = () => {
  return (
    <div>
      <h1 className="font-epilogue font-bold sm:font-semibold text-[20px] text-green-300 text-left">
        Select Category
      </h1>
      <div className="item-center">
        <div className="grid grid-cols-2 mt-[18px] gap-[26px]">
          {category.map((category, index) => {
            return <DataCard key={index} data={category} route="semester" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Mycourses;
