import AdminHeader from "@/components/navigation/AdminHeader";
import AdminSidebar from "@/components/navigation/AdminSidebar";

const AdminPanel = () => {
  return (
    <div className="flex h-screen bg-gray-200 font-normal">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-primary">
          <div className="px-8 py-6"></div>
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
