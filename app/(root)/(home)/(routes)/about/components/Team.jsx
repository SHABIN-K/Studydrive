import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Mohammed shabin k",
      role: "Team lead | software Engineer",
      img: "/team/member-1.jpeg",
      githubUrl: "SHABIN-K",
      xUrl: "shabink9",
      linkedinUrl: "-shabink/",
    },
    {
      name: "Muzammil",
      role: "Frontend developer",
      img: "/team/member-2.jpeg",
      githubUrl: "SHABIN-K",
      instagramUrl: "_shabink/",
    },
    {
      name: "Mohammed Nisham nk",
      role: "Visual designer",
      img: "/team/member-5.jpg",
      linkedinUrl: "-shabink/",
      instagramUrl: "_shabink/",
    },
    {
      name: "Mufasil",
      role: "Visual designer",
      img: "/team/member-3.jpeg",
      instagramUrl: "_shabink/",
    },
    {
      name: "Shefna N",
      role: "QA Tester",
      img: "/team/member-4.jpg",
      instagramUrl: "_shabink",
    },
  ];

  return (
    <div className="px-4 py-1 mx-auto">
      <div className="mx-auto mb-10 lg:max-w-xl text-center">
        <p class="text-gray-500 text-lg text-center font-normal pb-3">
          Meet the team
        </p>
        <h1 class="mx-auto text-3xl text-center text-gray-200  font-extrabold ">
          The Talented People Behind the Scenes of the Organization
        </h1>
      </div>
      <div className="grid gap-5 md:gap-10 mx-auto sm:grid-cols-2 md:grid-cols-3 bg-blue-gradient">
        {teamMembers.map((member, index) => {
          return (
            <div key={index} className="flex space-x-4 justify-stretch">
              <Image
                className="object-cover w-20 h-20 mb-2 rounded-full shadow"
                width={500}
                height={500}
                src={member.img}
                alt="Person"
              />
              <div className="flex flex-col items-start justify-center text-center capitalize">
                <p className="text-base font-bold tracking-tighter">
                  {member.name}
                </p>
                <p className="text-sm text-[#808191] tracking-tighter">
                  {member.role}
                </p>
                <SocialLinks {...member} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;

const SocialLinks = ({ githubUrl, xUrl, linkedinUrl, instagramUrl }) => {
  return (
    <div className="flex justify-start space-x-1">
      {githubUrl && (
        <SocialLink
          icon={<IconBrandGithub className="w-6 md:w-4 hover:text-white" />}
          tooltip="Github"
          url={`https://github.com/${githubUrl}`}
        />
      )}
      {xUrl && (
        <SocialLink
          icon={<IconBrandX className="w-6 md:w-4 hover:text-white" />}
          tooltip="twitter"
          url={`https://twitter.com/${xUrl}`}
        />
      )}
      {linkedinUrl && (
        <SocialLink
          icon={<IconBrandLinkedin className="w-6 md:w-4 hover:text-white" />}
          tooltip="Linkedin"
          url={`https://www.linkedin.com/in/${linkedinUrl}`}
        />
      )}
      {instagramUrl && (
        <SocialLink
          icon={<IconBrandInstagram className="w-6 md:w-4 hover:text-white" />}
          tooltip="Instagram"
          url={`https://www.instagram.com/${instagramUrl}`}
        />
      )}
    </div>
  );
};

const SocialLink = ({ icon, tooltip, url }) => {
  return (
    <Link
      className="tooltip tooltip-bottom"
      data-tip={tooltip}
      href={url}
      target="_blank"
    >
      {icon}
    </Link>
  );
};
