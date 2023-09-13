"use client";
import { AdminHeader } from "@/components/navigation";
import { Tab } from "@headlessui/react";

const Tabs = ["Dashboard", "Users"];

const AdminPanel = () => {
  return (
    <section>
      <div className="flex h-screen font-normal">
        <div className="flex-1 flex flex-col overflow-hidden">
          <AdminHeader />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#1c1c22] ">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl p-1   mt-2 gap-1 sm:w-2/5">
                {Tabs.map((tab, index) => (
                  <Tab
                    key={index}
                    className="w-full border-2 rounded-lg py-2.5 text-sm font-medium leading-5 text-white ring-white ring-opacity-60 ring-offset-2 "
                  >
                    {tab}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="mt-2">
                <Tab.Panel>Content 1</Tab.Panel>
                <Tab.Panel>Content 2</Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </main>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
