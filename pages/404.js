/* eslint-disable react/no-unescaped-entities */
import "@/styles/globals.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Custom404 = () => {
  const router = useRouter();
  return (
    <section className="bg-[#13131a] ">
      <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="w-full lg:w-1/2">
          <p className="text-xl font-medium text-[#4acd8d]">
            404 Error
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-[#808191]">
            Sorry, the page you are looking for doesn't exist.Here are some
            helpful links:
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <button
              type="button"
              onClick={() => {
                router.back();
              }}
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-white transition-colors duration-200 bg-[#1c1c24] border rounded-lg gap-x-2 sm:w-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>

              <span>Go back</span>
            </button>

            <button
              type="button"
              onClick={() => {
                router.push("/");
              }}
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-[#4acd8d] rounded-lg shrink-0 sm:w-auto hover:bg-green-500"
            >
              Take me home
            </button>
          </div>
        </div>
        <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
          <Image
            className="w-full max-w-lg lg:mx-auto"
            src="/illustration.svg"
            priority={true} // {false} | {true}
            width={500}
            height={150}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Custom404;
