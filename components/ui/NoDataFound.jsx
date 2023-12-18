import Image from "next/image";

import React from "react";

const NoDataFound = () => {
  return (
    <section>
      <div className="p-5 flex flex-col items-center justify-center">
        <div className="relative mb-3">
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
        <h1 className="text-muted-foreground text-2xl text-center text-white">
          {" "}
          No File Found !!!
        </h1>
        <p className="text-muted-foreground text-sm text-white text-center select-text">
          We apologize as the requested file cannot be found currently
        </p>
      </div>
    </section>
  );
};
export default NoDataFound;
