import Image from "next/image";
import img from "public/icons/doc.png";

const PostCard = ({ data }) => {
  return (
    <div className="card rounded-lg cursor-pointer bg-[#1c1c24] hover:bg-[#2c2f32] py-2">
      <div className="flex flex-row items-center ml-5">
        <div className="">
          <figure className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-full overflow-hidden">
            <Image src={img} alt="text doument" />
          </figure>
        </div>
        <div className="text-start ml-5">
          <p className="text-base font-semibold font-sans md:font-mono  mt-2 text-white">
            {data.title}
          </p>
          <p className="text-sm font-medium md:font-semibold font-sans md:font-mono tracking-tighter  text-[#808191]">
            {data.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
