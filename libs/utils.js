import Swal from "sweetalert2";
import { toast } from "sonner";
import { signOut } from "next-auth/react";

const handleSignOutButton = () => {
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

const handlesharebtn = (post) => {
  if (navigator.share) {
    navigator
      .share({
        title: post.title,
        text: post.content,
        url: post.url,
      })
      .then(() => {
        toast("Thanks for sharing!");
      })
      .catch(console.error);
  } else {
    // navigator.clipboard.writeText(`${post.title} \n\n ${post.content} \n ${post.url}`).then(() =>{
    //   toast("link copied")
    // })
    const el = document.createElement("textarea");
    el.value = `${post.title} \n\n ${post.content} \n ${post.url}`;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    toast("Copied to clipboard");
  }
};

export { handleSignOutButton, handlesharebtn };
