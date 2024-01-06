/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

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
          Unable to find what you're looking for?
          <br />
          Explore other options or
          <Link
            href={`${process.env.NEXT_PUBLIC_APP_URL}/about`}
            className="text-blue-300 ml-1 underline"
          >
            meet our amazing team!
          </Link>
        </p>
      </div>
    </section>
  );
};
export default NoDataFound;
