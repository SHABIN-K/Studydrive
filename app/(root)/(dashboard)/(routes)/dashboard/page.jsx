"use client";

import { Tab } from "@headlessui/react";
import { useSession } from "next-auth/react";

import AddSubject from "@/components/admin/components/AddSubject";
import ShowSubject from "@/components/admin/components/ShowSubject";

const Tabs = ["Playground", "Show Data"];

const MyDash = () => {
  const { data: session } = useSession();
  return (
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
          <AddSubject sessionData={session.user.email} />
        </Tab.Panel>
        <Tab.Panel>
          <ShowSubject />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default MyDash;
