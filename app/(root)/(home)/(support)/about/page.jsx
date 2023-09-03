"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const About = () => {
  const { status, data } = useSession();
  const Router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/login");
  }, [Router, status]);
  if (status === "authenticated")
    return (
      <div className="text-lime-700">
        This page is Protected for special people. like{"\n"}
        {JSON.stringify(data.user, null, 2)}
      </div>
    );

  return <div className="text-lime-700">loading</div>;
};

export default About;
