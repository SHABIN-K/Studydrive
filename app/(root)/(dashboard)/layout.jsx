"use client";

import AdminNavbar from "@/components/admin/components/AdminNavbar";
import AdminSidebar from "@/components/admin/components/AdminSidebar";
import { ProtectedLayout } from "@/components/layouts/protectLayouts";

export default function DashboardLayout({ children }) {
  return (
    <ProtectedLayout>
      <section className="flex h-screen font-normal">
        <div className="flex-1 flex flex-col overflow-auto">
          <AdminNavbar label="Dashboard" />
          <div className="flex flex-row">
            <div className="md:block hidden">
              <AdminSidebar />
            </div>
            <main className="p-5 md:p-4 items-start justify-center flex-grow">
              {children}
            </main>
          </div>
        </div>
      </section>
    </ProtectedLayout>
  );
}
