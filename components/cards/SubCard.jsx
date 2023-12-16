"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import img from "public/icons/doc.png";
import CardSkeleton from "../skeleton/CardSkeleton";

const SubCard = ({ data }) => {
  const router = useRouter();

  const loading = false;

  const handleClick = () => {
    router.push("/view-doc");
  };

  const skeleton = [...Array(1).keys()].map((i) => {
    return <CardSkeleton key={i} />;
  });

  return (
    <>
      {loading ? (
        <div
          className="card rounded-lg cursor-pointer bg-[#1c1c24] hover:bg-[#2c2f32] py-2"
          onClick={handleClick}
        >
          <div className="flex flex-row items-center ml-5">
            <div className="">
              <figure className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-full overflow-hidden">
                <Image src={img} alt={data.name} />
              </figure>
            </div>
            <div className="text-start ml-5">
              <p className="text-lg font-semibold font-sans md:font-mono  mt-2 text-white">
                {data.name}
              </p>
              <p className="text-base font-medium md:font-semibold font-sans md:font-mono tracking-tighter  text-[#808191]">
                code : <span className="uppercase">{data.link}</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <ul className="grid gap-6">{skeleton}</ul>
        </>
      )}
    </>
  );
};

export default SubCard;
