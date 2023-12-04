"use client";
import { useSession } from "next-auth/react";
import AddSubject from "@/components/admin/components/AddSubject";

const MyDash = () => {
  const { data: session } = useSession();
  return (
    <>
      <AddSubject sessionData={session.user.email} />
    </>
  );
};

export default MyDash;
