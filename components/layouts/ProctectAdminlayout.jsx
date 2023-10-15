"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loader from "../ui/Loading";

export const ProctectAdminlayout = ({ children }) => {
  const router = useRouter();
  const { data: session } = useSession();
  useEffect(() => {
    // if the user is not authorized, redirect to the login page
    if (session && session.user.role !== "ADMIN") router.replace("/dashboard");
  }, [session, router]);
  // if the user is authorized, render the page
  if (session && session.user.role === "ADMIN") return <div>{children}</div>;

  // if the user refreshed the page or somehow navigated to the protected page
  return <Loader />;
};
