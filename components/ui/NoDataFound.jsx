import Image from "next/image";

import React from "react";

const NoDataFound = () => {
  return (
    <section>
      <div className="p-2 flex flex-col items-center justify-center">
        <div className="relative ">
          <Image
            src="/nodata.png"
            width={340}
            height={100}
            alt="N file found"
            className="mx-auto mb-auto my-auto"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h1 className=" text-2xl text-center text-[#4acd8d]">
          {" "}
          No File Found !!!
        </h1>
        <p className=" text-sm pt-2 text-gray-400 text-center select-text">
          Maybe go Back and try a diffrent keyword?
        </p>
      </div>
    </section>
  );
};
export default NoDataFound;
