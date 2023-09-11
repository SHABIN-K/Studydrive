import { AdminHeader } from "@/components/navigation";

const AdminPanel = () => {
  return (
    <section>
      <div className="flex h-screen font-normal">
        <div className="flex-1 flex flex-col overflow-hidden ml-[80px]">
          <AdminHeader />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-primary">
            <div className="px-8 py-6"></div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
/*
    <section>
      <div className="flex h-screen bg-gray-200 font-normal">
        <AdminSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <AdminHeader />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-primary">
            <div className="px-8 py-6"></div>
          </main>
        </div>
      </div>
    </section>
 */
