import { useEffect, useMemo, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { toast } from "sonner";

import Table from "./ui/Table";
import AdminModel from "./ui/AdminModel";
import { UserValidation } from "@/libs/validations/user";
import useUsers from "@/libs/hooks/useUsers";

const AdminUser = () => {
  const { data: fetchedData, error, isLoading: loading } = useUsers();

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [userData, setUserData] = useState({});
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
      accessorKey: "userRole",
      header: "Role",
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

  //Submit button form dialog box
  const handleSubmitButton = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate user input using the schema
    const userInput = {
      name: userData.name,
      email: userData.email,
      phoneNumber: userData.phoneNumber,
    };

    try {
      // Validate the user input
      const validation = UserValidation.profileUpdate.safeParse(userInput);

      //if validation is failure, return error message
      if (validation.success === false) {
        const { issues } = validation.error;
        issues.forEach((err) => {
          toast.error(err.message);
        });
      } else {
        // If validation is successful, make the API request
        const response = await axios.patch("/api/user", {
          id: userData.id,
          name: userData.name,
          email: userData.email,
          phoneNumber: userData.phoneNumber,
          userRole: userData.userRole,
        });

        if (response.statusText === "FAILED") {
          toast.error(response.data);
        } else {
          const updatedUserData = response.data;
          const userIndex = tableData.findIndex(
            (user) => user.id === updatedUserData.id
          );
          if (userIndex !== -1) {
            setTableData((prevTableData) => {
              const updatedTableData = [...prevTableData];
              updatedTableData[userIndex] = updatedUserData;
              return updatedTableData;
            });
          }
          toast.success("Successfully updated");
        }
      }
    } catch (err) {
      console.error("NEXT_AUTH_ERROR: " + err);
      console.log(err.response);
      toast.error("something went wrong !!");
    } finally {
      setIsLoading(false);
      setIsOpen(false);
    }
  };

  return (
    <>
      <Table data={data} columns={columns} isLoading={loading} />
      <AdminModel
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        userData={userData}
        setUserData={setUserData}
        handleSubmitButton={handleSubmitButton}
        isLoading={isLoading}
      />
    </>
  );
};

export default AdminUser;
