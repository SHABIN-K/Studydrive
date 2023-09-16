import { useMemo } from "react";
import Swal from "sweetalert2";

import Table from "./Table";
import { tableData } from ".";

const AdminUser = () => {
  const data = useMemo(() => tableData, []);



  const handleUpdateButton = async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Update Profile',
      html:
        '<input id="swal-input1" class="swal2-input">' +
        '<input id="swal-input2" class="swal2-input">'+
        '<input id="swal-input3" class="swal2-input">'+
        '<input id="swal-input4" class="swal2-input">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value,
          document.getElementById('swal-input3').value,
          document.getElementById('swal-input4').value,
        ]
      }
    })
    
    if (formValues) {
      Swal.fire(JSON.stringify(formValues))
    }
  };

  const handleDeleteButton = () => {
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
      showLoaderOnConfirm: true,
      customClass: {
        cancelButton: "bordered-alert",
        popup: "bordered-alert",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "deactivated!",
          text: "Your account has been permanently deactivated.",
          icon: "success",
          color: "#fff",
          background: "#13131a",
          showLoaderOnConfirm: true,
          customClass: {
            popup: "bordered-alert",
          },
        });
      }
    });
  };

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
        <div className="flex text-left space-x-3">
          <button
            onClick={handleUpdateButton}
            className="btn btn-xs sm:btn-sm text-blue-500 hover:text-blue-700 cursor-pointer border-blue-400"
          >
            Edit
          </button>
          <button
            onClick={handleDeleteButton}
            className="btn btn-xs sm:btn-sm text-red-500 hover:text-red-700 cursor-pointer border-red-400"
          >
            Remove
          </button>
        </div>
      ),
    },
  ];

  return <Table data={data} columns={columns} />;
};

export default AdminUser;
