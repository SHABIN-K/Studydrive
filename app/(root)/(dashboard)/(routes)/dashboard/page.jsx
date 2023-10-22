"use client";

import AdminNavbar from "@/components/admin/ui/AdminNavbar";
import AdminSidebar from "@/components/admin/ui/AdminSidebar";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const MyDash = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <section className="flex h-screen font-normal">
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminNavbar />
        <div className="flex flex-row">
          <AdminSidebar />
          <main className="">
           
          </main>
        </div>
      </div>
    </section>
  );
};

export default MyDash;
