import Table from "./Table";
import { tableData } from ".";
import { useMemo } from "react";

const AdminUser = () => {
  const data = useMemo(() => tableData, []);

  /** @type import('@tanstack/react-table').ColumnDef<any> */
  const columns = [
    {
      accessorKey: "NO",
      header: "NO",
      cell: (info) => `${info.row.index + 1}`,
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "phonenumber",
      header: "Phone Number",
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: () => (
        <div className="text-left">
          <p className="text-blue-500 hover:text-blue-700 cursor-pointer">
            Remove
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="">
      <div className="p-5 border-2 rounded-xl border-[#1dc071] bg-base-100 mb-5 ">
        <Table data={data} columns={columns} />
      </div>
    </div>
  );
};

export default AdminUser;
