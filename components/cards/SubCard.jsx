import Image from "next/image";

import img from "public/icons/test.png";

const SubCard = ({ data }) => {
  //https://daisyui.com/components/card/
  return (
    <div className="rounded-lg bg-[#1c1c24] hover:bg-[#2c2f32] py-2">
      <div className="flex flex-row card cursor-pointer items-start ml-5">
        <figure className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-full overflow-hidden">
          <Image src={img} alt={data.name} />
        </figure>
        <div className="items-center text-start ml-5">
          <p className="text-lg font-semibold font-sans md:font-mono  mt-2 text-white">
            {data.name}
          </p>
          <p className="text-base font-medium md:font-semibold font-sans md:font-mono tracking-tighter  text-[#808191]">
            code : <span className="uppercase">{data.link}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubCard;
