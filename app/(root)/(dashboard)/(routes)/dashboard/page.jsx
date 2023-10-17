"use client";

import AdminNavbar from "@/components/admin/ui/AdminNavbar";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const MyDash = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <section className="flex h-screen font-normal">
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminNavbar />
        <div className="grid place-items-center h-screen">
          <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6 bg-white">
            <div>
              Name: <span className="font-bold">{session?.user?.name}</span>
            </div>
            <div>
              Email: <span className="font-bold">{session?.user?.email}</span>
            </div>
            <button
              onClick={() => router.push("/")}
              className="bg-lime-500 text-white font-bold px-6 py-2 mt-3"
            >
              back
            </button>
            <button
              onClick={() => router.push("/admin")}
              className="bg-lime-500 text-white font-bold px-6 py-2 mt-3"
            >
              admin
            </button>
            <button
              onClick={() => {
                signOut({ callbackUrl: "/" });
              }}
              className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyDash;
