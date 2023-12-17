import { search } from "@/public/assets";
import Image from "next/image";

const Search = ({ results, searchText, onChangeValue, Isloading }) => {
  console.log(Isloading);
  return (
    <div className="md:flex-1 max-w-[658px] py-1.5 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]">
      <div className="flex flex-row ">
        <div className="flex w-full">
          <input
            type="text"
            value={searchText}
            onChange={onChangeValue}
            placeholder="Search for Study materials"
            className="font-epilogue font-normal text-[16px] placeholder:text-[#4b5264] text-white bg-transparent outline-none"
          />
        </div>
        <div className="w-[100px] h-[40px] rounded-[20px] search-colour flex justify-center items-center cursor-pointer">
          <Image
            src={search}
            alt="search icon"
            className="w-[18px] h-[18px] object-contain"
          />
        </div>
      </div>
      {results?.length > 0 && searchText ? (
        <SearchDropDown result={results} />
      ) : null}
    </div>
  );
};

export default Search;

const SearchDropDown = ({ result }) => {
  return (
    <div className="relative left-0 top-10 z-50 grid max-h-[500px] w-full  gap-4 rounded-3xl bg-white p-4 overflow-auto shadow-2xl shadow-gray-500">
      {result?.map((post, index) => {
        console.log(post);
        return (
          <div key={index} className="text-black">
            {post.title}
          </div>
        );
      })}
    </div>
  );
};
