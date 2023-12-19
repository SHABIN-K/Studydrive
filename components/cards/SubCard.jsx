import Link from "next/link";
import Image from "next/image";

import { subject } from "@/public/icons";

const SubCard = ({ hrefData, data }) => {
  return (
    <Link
      href={hrefData}
      className="card rounded-lg cursor-pointer bg-[#1c1c24] hover:bg-[#2c2f32] py-2"
    >
      <div className="flex flex-row items-center ml-5">
        <div>
          <figure className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-full overflow-hidden">
            <Image src={subject} alt={data.subject_name} />
          </figure>
        </div>
        <div className="text-start ml-5">
          <p className="text-lg font-semibold font-sans md:font-mono  mt-2 text-white">
            {data.subject_name}
          </p>
          <p className="text-base font-medium md:font-semibold font-sans md:font-mono tracking-tighter  text-[#808191]">
            code : <span className="uppercase">{data.subject_code}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SubCard;
