import { useEffect, useMemo, useState } from "react";

import Table from "./Table";
import { useSubjects } from "@/libs/hooks/useSubject";

const ShowSubject = ({ userEmail }) => {
  const {
    data: fetchedData,
    error,
    isLoading: loading,
  } = useSubjects({ userEmail });

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (fetchedData) {
      setTableData(fetchedData);
    }

    if (error) {
      console.error("Error fetching table data:", error);
      toast.error("Something went wrong in fetching table data");
    }
  }, [fetchedData, error]);

  const data = useMemo(() => tableData, [tableData]);
  /** @type import('@tanstack/react-table').ColumnDef<any> */
  const columns = [
    {
      accessorKey: "NO",
      header: "#",
      cell: (info) => `${info.row.index + 1}`,
    },
    {
      accessorKey: "subject_name",
      header: "Name",
    },
    {
      accessorKey: "course_name",
      header: "Course name",
    },
    {
      accessorKey: "semester_code",
      header: "Semester",
    },
    {
      accessorKey: "subject_code",
      header: "Subject code",
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: (info) => (
        <div className="flex text-left space-x-3">
          <button
            onClick={() => handleUpdateButton(info.row.original)}
            className="btn btn-xs sm:btn-sm text-blue-500 hover:text-blue-700 cursor-pointer border-blue-400"
          >
            Edit
          </button>
          <button
            onClick={() => handleDeleteButton(info.row.original)}
            className="btn btn-xs sm:btn-sm text-red-500 hover:text-red-700 cursor-pointer border-red-400"
          >
            Remove
          </button>
        </div>
      ),
    },
  ];

  //Delete button form table
  const handleDeleteButton = () => {
    console.log("hello delete button");
  };

  //Update button form table
  const handleUpdateButton = () => {
    console.log("hello update button");
  };

  return (
    <>
      <Table data={data} columns={columns} isLoading={loading} />
    </>
  );
};

export default ShowSubject;
