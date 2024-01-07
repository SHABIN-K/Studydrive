import Image from "next/image";
import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";
const Contribution = () => {
  const contributeText = {
    title: "Paschub is an open source project built with 💖",
    desc: "Open-source, passion-fueled project. Revolutionizing education with an intuitive platform for seamless student-teacher interaction.",
    subDesc:
      "We highly appreciate any feedback or contribution that could help us improve.",
  };
  return (
    <section className="w-full mt-3 ">
      <div className="flex justify-center items-center flex-col-reverse md:flex-row">
        <div>
          <Image
            src="/img/contriubute.svg"
            alt="github contribution svg"
            width={350}
            height={350}
          />
        </div>
        <div className="items-center text-center font-normal sm:font-medium w-full md:w-[60%] text-[#808191]">
          <p className="text-gray-500 text-lg text-center font-normal pb-3">
            Contribute.
          </p>
          <h3 className="text-3xl font-bold text-white mb-2">
            {contributeText.title}
          </h3>
          <p>{contributeText.desc}</p>
          <p className="mt-2">{contributeText.subDesc}</p>
          <Link
            href="https://github.com/SHABIN-K/Studydrive"
            target="_blank"
            className="flex hover:text-white items-center justify-center mt-3 text-2xl gap-1 text-gray-400"
          >
            <IconBrandGithub size={30} />
            <p>Github</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contribution;
