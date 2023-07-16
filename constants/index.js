import {
  createCampaign,
  dashboard,
  payment,
  profile,
  withdraw,
} from "@/public/assets";

export const navlinks = [
  {
    name: "home",
    imgUrl: dashboard,
    link: "/",
  },
  {
    name: "campaign",
    imgUrl: createCampaign,
    link: "/",
  },
  {
    name: "Upload",
    imgUrl: payment,
    link: "/",
  },
  {
    name: "About Us",
    imgUrl: withdraw,
    link: "/",
  },
  {
    name: "Share App",
    imgUrl: profile,
    link: "/",
  },
];
