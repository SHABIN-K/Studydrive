import Table from "./Table";
import { tableData, tableHeader } from ".";
import { useMemo } from "react";

const AdminUser = () => {
  const data = useMemo(() => tableData, []);
  const columns = [
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Email",
      accessorKey: "Email",
    },
    {
      header: "Phone Number",
      accessorKey: "Phone",
    },
  ];
  return (
    <div className="">
      <div className="p-5 border-2 rounded-lg border-[#1dc071] bg-base-100">
        <Table data={data} />
      </div>
    </div>
  );
};

export default AdminUser;
// colums={DataColums}
