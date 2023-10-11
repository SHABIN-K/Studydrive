import { useEffect, useMemo, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import toast from "react-hot-toast";

import Table from "./ui/Table";
import AdminModel from "./ui/AdminModel";

const AdminUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    if (!dataFetched) {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await axios.get("/api/user");
          console.log(response.data);
          setTableData(response.data);
          setDataFetched(true);
        } catch (error) {
          console.error("Error fetching table data:", error);
          toast.error("something went wrong in fetching table data");
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }
  }, [dataFetched]);

  const data = useMemo(() => tableData, [tableData]);
  /** @type import('@tanstack/react-table').ColumnDef<any> */
  const columns = [
    {
      accessorKey: "NO",
      header: "#",
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
      accessorKey: "phoneNumber",
      header: "Phone Number",
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
  const handleDeleteButton = (userDelete) => {
    Swal.fire({
      title: "Deactivate account",
      text: "This will permanently deactivate your account",
      icon: "warning",
      color: "#fff",
      background: "#13131a",
      showCancelButton: true,
      confirmButtonColor: "#4acd8d",
      cancelButtonColor: "#1c1c24",
      confirmButtonText: "Yes, delete it!",
      customClass: {
        cancelButton: "bordered-alert",
        popup: "bordered-alert",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.delete("/api/user", {
            data: {
              email: userDelete.email,
            },
          });
          console.log(res);
          if (res.status === 200) {
            Swal.fire({
              title: "Deactivated!",
              text: "Your account has been permanently deactivated.",
              icon: "success",
              color: "#fff",
              background: "#13131a",
              customClass: {
                popup: "bordered-alert",
              },
            });
            setTableData((prevTableData) =>
            prevTableData.filter((user) => user.email !== userDelete.email)
          );
          } else {
            Swal.fire({
              title: "Deactivation Failed",
              text: "User not found",
              icon: "error",
              color: "#fff",
              background: "#13131a",
              customClass: {
                popup: "bordered-alert",
              },
            });
          }
        } catch (error) {
          console.error("NEXT_AUTH_ERROR: " + error);
          console.log(error.response);
          toast.error("something went wrong !!");
        }
      }
    });
  };

  //Update button form table
  const handleUpdateButton = (userUpdate) => {
    setUserData(userUpdate);
    setIsOpen(true);
  };

  //submit button from admin dialogbox
  const handleSubmitModal = () => {
    console.log("hey submit Button");
    setIsOpen(false);
  };

  return (
    <>
      <Table data={data} columns={columns} isLoading={isLoading} />
      <AdminModel
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        userData={userData}
        setUserData={setUserData}
        handleSubmitModal={handleSubmitModal}
      />
    </>
  );
};

export default AdminUser;
