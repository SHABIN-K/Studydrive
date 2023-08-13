"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import img from "public/icons/test.png";

const DataCard = ({ data, route, style }) => {
  const router = useRouter();
  //https://daisyui.com/components/card/
  return (
    <div className={`rounded-lg ${style}`}>
      <div
        className="card cursor-pointer flex flex-col items-center"
        onClick={() => router.push(`/student/${route}` + data.link)}
      >
        <figure className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-full overflow-hidden">
          <Image src={img} alt={data.description}/>
        </figure>
        <div className=" items-center text-center">
          <h2 className="text-base font-medium md:font-semibold font-sans md:font-mono tracking-tighter mt-2 text-[#808191]">
            {data.name}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default DataCard;

//<div
//  className="cursor-pointer flex flex-col items-center"
//  onClick={() => router.push(`/student/${name}` + data.link)}
//>
//  <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-full overflow-hidden">
//    <Image src={img} objectFit="cover" alt={data.description} />
//  </div>
//  <h2 className="text-[#808191] text-base font-medium md:font-semibold font-sans md:font-mono tracking-tighter mt-1 text-center">
//    {data.name}
//  </h2>
//</div>
