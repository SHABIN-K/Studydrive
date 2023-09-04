"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const metadata = {
  title: "Dashboard | pasc hub",
  description: "study material web app for students",
};

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const { status } = useSession();
  useEffect(() => {
    if (status === "unauthenticated") router.replace("/login");
  }, [router, status]);
  if (status === "authenticated") {
    return <section>{children}</section>;
  }
}
//
//export default function DashboardLayout({ children }) {
//  return <section>{children}</section>;
//}
//
