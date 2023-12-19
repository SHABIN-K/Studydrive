"use client";

import { Tab } from "@headlessui/react";

import { AdminPlayground, AdminUser } from "@/components/admin";
import AdminNavbar from "@/components/admin/components/AdminNavbar";
import { ProctectAdminlayout } from "@/components/layouts/ProctectAdminlayout";

const Tabs = ["Playground", "Show data"];

const AdminPanel = () => {
  return (
    <ProctectAdminlayout>
      <div className="flex h-screen font-normal">
        <div className="flex-1 flex flex-col overflow-hidden">
          <AdminNavbar label="Admin panel"/>
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#121216]">
            <Tab.Group>
              <Tab.List className="flex space-x-1 sm:w-2/5">
                {Tabs.map((tab, index) => (
                  <Tab
                    key={index}
                    className={({ selected }) =>
                      `w-full py-2.5 text-base font-semibold text-white outline-none ${
                        selected && "border-b-4 border-green-400 "
                      }`
                    }
                  >
                    {tab}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="mt-3 mx-2 sm:mx-8">
                <Tab.Panel>
                  <AdminPlayground />
                </Tab.Panel>
                <Tab.Panel>
                  <AdminUser />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </main>
        </div>
      </div>
    </ProctectAdminlayout>
  );
};

export default AdminPanel;
