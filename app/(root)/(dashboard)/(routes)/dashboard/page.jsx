"use client";

import { Tab } from "@headlessui/react";
import { useSession } from "next-auth/react";

import AddSubject from "@/components/admin/components/AddSubject";
import ShowData from "@/components/admin/components/ShowData";
import ChangePassword from "@/components/admin/components/ChangePassword";

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
      <Tab.Panels className="mt-3">
        <Tab.Panel>
          <div className="space-y-3">
            <AddSubject userEmail={session.user.email} />
            <ChangePassword sessionData={session.user.email} />
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <ShowData userID={session.user.sub} />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default MyDash;
