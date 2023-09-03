/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export const Empty = ({ label }) => {
  return (
    <div className="p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image
          src="/empty.png"
          alt="Empty"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          layout="fill" // Add this if you want to use "fill" layout
        />
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};
