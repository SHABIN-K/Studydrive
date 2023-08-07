"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import img from "@/public/test.png";

const DataCard = ({ data, name }) => {
  const router = useRouter();
  return (
    <div
      className="cursor-pointer flex flex-col items-center"
      onClick={() => router.push(name + data.link)}
    >
      <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-full overflow-hidden">
        <Image src={img} objectFit="cover" alt={data.description} />
      </div>
      <p className="text-[#808191] text-base font-medium md:font-semibold font-sans md:font-mono tracking-tighter mt-1 text-center">
        {data.name}
      </p>
    </div>
  );
};

export default DataCard;
