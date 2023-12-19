import CreateUser from "./components/CreateUser";

const AdminPlayground = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-full md:p-4 gap-4">
      <CreateUser />
    </div>
  );
};

export default AdminPlayground;
