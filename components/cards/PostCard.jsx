import Image from "next/image";
import doc from "public/icons/doc.png";

const PostCard = ({ data }) => {
  const description = data.desc.slice(0, 120);
  const shouldShowDots = data.desc.length > 120;
  return (
    <div
      className="card rounded-lg cursor-pointer bg-[#1c1c24] hover:bg-[#2c2f32] py-2"
      title={data.desc}
    >
      <div className="flex flex-row items-center ml-5">
        <div className="">
          <figure className="w-[70px] h-[70px] md:w-20 md:h-20 bg-gray-300 rounded-full overflow-hidden">
            <Image src={doc} alt={data.desc} />
          </figure>
        </div>
        <div className="text-start ml-5">
          <p className="text-base font-semibold font-sans md:font-mono  mt-2 text-white">
            {data.title}
          </p>
          <p className="text-sm font-medium md:font-semibold font-sans md:font-mono tracking-tighter md:tracking-normal text-[#808191] normal-case">
            {shouldShowDots ? `${description}...` : description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;