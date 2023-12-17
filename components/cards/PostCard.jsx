import Image from "next/image";
import { useState } from "react";

import doc from "public/icons/doc.png";
import PostViewDialogBox from "../models/PostViewDialogBox";

const PostCard = ({ data }) => {
  const description = data.description.slice(0, 120);
  const shouldShowDots = data.description.length > 120;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="card rounded-lg cursor-pointer bg-[#1c1c24] hover:bg-[#2c2f32] p-3.5"
      title={data.description}
      onClick={() => setIsOpen(true)}
    >
      <div className="flex flex-row items-center">
        <div className="">
          <figure className="w-[70px] h-[70px] md:w-20 md:h-20 bg-gray-300 rounded-full overflow-hidden">
            <Image src={doc} alt={data.description} />
          </figure>
        </div>
        <div className="text-start ml-5">
          <p className="text-base font-semibold font-sans md:font-mono  mt-2 text-white">
            {data.title}
          </p>
          <p className="text-sm font-medium md:font-semibold font-sans md:font-mono tracking-tighter md:tracking-normal text-[#808191] normal-case break-all">
            {shouldShowDots ? `${description}...` : description}
          </p>
        </div>
      </div>
      {isOpen && (
        <PostViewDialogBox isOpen={isOpen} setIsOpen={setIsOpen} data={data} />
      )}
    </div>
  );
};

export default PostCard;
