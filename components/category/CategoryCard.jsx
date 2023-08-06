"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import img from "@/public/monkey.png";

const CategoryCard = ({ data }) => {
  const router = useRouter();
  return (
    <div
      className=""
      onClick={() => {
        router.push(data.link);
      }}
    >
      <Image src={img} alt={data.descrption}  className="rounded-full w-16 h-16"/>
      <p className="">{data.name}</p>
    </div>
  );
};

export default CategoryCard;
