import Image from "next/image";

const NoDataFound = () => {
  return (
    <section>
      <div className="p-2 flex flex-col items-center justify-center">
        <div className="relative ">
          <Image
            src="/nodata.png"
            width={340}
            height={100}
            alt="No file found"
            className="mx-auto mb-auto my-auto w-[260px]"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h1 className="text-2xl text-center text-[#4acd8d] font-semibold">
          No File Found !!!
        </h1>
        <p className="text-sm pt-2 text-gray-400 text-center">
          Maybe go Back and try a diffrent keyword?
        </p>
      </div>
    </section>
  );
};
export default NoDataFound;
