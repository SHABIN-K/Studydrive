import Swal from "sweetalert2";
import { signOut } from "next-auth/react";

export const handleSignOutButton = () => {
  Swal.fire({
    title: "Logout",
    text: "Are you sure you want to log out?",
    icon: "question",
    width: "20em",
    color: "#fff",
    background: "#13131a",
    showCancelButton: true,
    confirmButtonColor: "#4acd8d",
    cancelButtonColor: "#1c1c24",
    confirmButtonText: "Yes, log out",
    showLoaderOnConfirm: true,
    customClass: {
      cancelButton: "bordered-alert",
      popup: "bordered-alert",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      signOut({ callbackUrl: "/" });
    } else {
      console.log("cancelled");
    }
  });
};
