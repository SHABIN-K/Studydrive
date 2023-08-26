import {
  about,
  addUser,
  dashboard,
  upload,
} from "@/public/assets";

export const navlinks = [
  {
    name: "Home",
    imgUrl: dashboard,
    link: "/",
  },
  {
    name: "Upload",
    imgUrl: upload,
    link: "/dashboard",
  },
  {
    name: "About Us",
    imgUrl: about,
    link: "/about",
  },
  {
    name: "Share app",
    imgUrl: addUser,
    link: "/invite",
  },
];
