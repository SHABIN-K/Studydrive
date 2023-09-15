"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loader from "../ui/Loading";

export const ProtectedLayout = ({ children }) => {
  const router = useRouter();
  const { status } = useSession();
  useEffect(() => {
    // if the user is not authorized, redirect to the login page
    if (status === "unauthenticated") router.replace("/login");
  }, [status, router]);
  // if the user is authorized, render the page
  if (status === "authenticated") return <div>{children}</div>;

  // if the user refreshed the page or somehow navigated to the protected page
  return <Loader/>;
};
