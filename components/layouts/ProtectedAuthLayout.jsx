"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loader from "../ui/Loading";

export const ProtectedAuthLayout = ({ children }) => {
  const router = useRouter();
  const { status } = useSession();
  console.log(status);
  useEffect(() => {
    // if the user is authorized,redirect to router
    if (status === "authenticated") return router.back();
  }, [status, router]);
  // if the user is not authorized,render the  login page
  if (status === "unauthenticated") return <div>{children}</div>;

  // if the user refreshed the page or somehow navigated to the protected page
  return <Loader />;
};
