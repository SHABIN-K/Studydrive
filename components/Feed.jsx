import { courses } from "@/constants";
import DataCard from "./cards/DataCard";
const Feed = ({ label, styleHead, style }) => {
  return (
    <div>
      <h1 className={`select_header ${styleHead}`}>{label}</h1>
      <div className={`grid grid-cols-3 md:gap-[26px] ${style}`}>
        {courses.map((item, index) => {
          return (
            <DataCard
              key={index}
              hrefData={{
                pathname: `/category`,
                query: { name: item.link },
              }}
              data={item}
              altMsg={item.description}
              style="mt-2 md:mt-0"
              styleContent="flex flex-col"
              syleName="text-[#808191] tracking-tighter"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Feed;
