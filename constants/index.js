import { about, addUser, dashboard, upload } from "@/public/assets";
import { play, qp, study, syllabus } from "@/public/icons";

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
    btn: true,
  },
];

//category-items
export const category = [
  {
    id: 1,
    name: "Videos",
    imgUrl: play,
    link: "videos",
    description: "videos lesson",
  },
  {
    id: 2,
    name: "Study Materials",
    imgUrl: study,
    link: "notes",
    description: "videos lesson",
  },
  {
    id: 3,
    name: "Syllabus",
    imgUrl: syllabus,
    link: "syllabus",
    description: "videos lesson",
  },
  {
    id: 4,
    name: "Question Papers",
    imgUrl: qp,
    link: "questionpapers",
    description: "videos lesson",
  },
];

//courses-items
export const courses = [
  {
    id: 1,
    name: "Ba English",
    imgUrl: "monkey",
    link: "baenglish",
    description:
      "BA English is an academic program that explores the study of the English language, literature, and its cultural significance.",
  },
  {
    id: 2,
    name: "Ba History",
    imgUrl: "/imgUrl",
    link: "bahistory",
    description:
      "BA History is an academic program that delves into the study of past events, societies, and cultures, shaping a deep understanding of historical contexts.",
  },
  {
    id: 3,
    name: "Economics",
    imgUrl: "/imgUrl",
    link: "baeconomics",
    description:
      "BA Economics is an academic program that focuses on the study of economic systems, theories, and policies, shaping insights into how societies allocate resources.",
  },
  {
    id: 4,
    name: "Bsw",
    imgUrl: "monkey",
    link: "bsw",
    description:
      "BSW (Bachelor of Social Work) is an academic program that equips students with the skills and understanding to address social issues and contribute to community welfare.",
  },
  {
    id: 5,
    name: "Mathematics",
    imgUrl: "monkey",
    link: "bscmath",
    description:
      "BSc Mathematics is an academic program that explores various branches of mathematics, fostering analytical and problem-solving skills.",
  },
  {
    id: 6,
    name: "Psychology",
    imgUrl: "/imgUrl",
    link: "bscpsychology",
    description:
      "BSc Psychology is an academic program that delves into the study of human behavior and mental processes, offering insights into understanding the mind.",
  },
  {
    id: 7,
    name: "Bca",
    imgUrl: "/imgUrl",
    link: "bca",
    description:
      "BCA (Bachelor of Computer Applications) is a degree program that provides in-depth knowledge of computer science and its applications.",
  },
  {
    id: 8,
    name: "Bba",
    imgUrl: "/imgUrl",
    link: "bba",
    description:
      "BBA (Bachelor of Business Administration) is an academic program that provides a foundational understanding of business management principles and practices.",
  },
  {
    id: 9,
    name: "Political Science",
    imgUrl: "/imgUrl",
    link: "politicalscience",
    description:
      "BA Political Science is an academic program that examines political systems, theories, and dynamics, fostering a comprehensive understanding of governance and public affairs.",
  },
  {
    id: 10,
    name: "Bcom Finance",
    imgUrl: "/imgUrl",
    link: "bcomfinance",
    description:
      "BCom Finance is an academic program that focuses on financial management, investments, and economics, preparing students for roles in finance and accounting.",
  },
  {
    id: 11,
    name: "Bcom CA",
    imgUrl: "/imgUrl",
    link: "bcomca",
    description:
      "BCom Computer Applications is an academic program that combines business studies with practical computer skills, preparing students for roles in IT-driven business environments.",
  },
  {
    id: 12,
    name: "Bcom Co-operation",
    imgUrl: "/imgUrl",
    link: "bcomcooperation",
    description:
      "BCom Cooperation is an academic program that explores the principles of cooperative management and business strategies, fostering an understanding of collaborative enterprises.",
  },
  {
    id: 13,
    name: "Ma English",
    imgUrl: "/imgUrl",
    link: "maenglish",
    description:
      "MA English is a postgraduate program that offers in-depth exploration of the English language, literature, and critical analysis, enhancing your understanding of cultural narratives and communication.",
  },
  {
    id: 14,
    name: "Msw",
    imgUrl: "/imgUrl",
    link: "msw",
    description:
      "MSW (Master of Social Work) is a postgraduate program that equips students with advanced skills in social work, empowering them to create positive change in communities and individuals' lives.",
  },
  {
    id: 15,
    name: "Mcom Finance",
    imgUrl: "/imgUrl",
    link: "mcomfinance",
    description:
      "MCom Finance is a postgraduate program that offers specialized knowledge in financial management, preparing you for dynamic roles in the world of finance and business.",
  },
];

export const semester = [
  {
    id: 1,
    name: "First",
    link: "one",
  },
  {
    id: 2,
    name: "Second",
    link: "two",
  },
  {
    id: 3,
    name: "Third",
    link: "three",
  },
  {
    id: 4,
    name: "Fourth",
    link: "four",
  },
  {
    id: 5,
    name: "Fifth",
    link: "five",
  },
  {
    id: 6,
    name: "Sixth",
    link: "six",
  },
];

export const subjects = [
  {
    id: 1,
    name: "Python Programming",
    link: "a11",
  },
  {
    id: 2,
    name: "Sensors and Transducers",
    link: "a22",
  },
  {
    id: 3,
    name: "Data Structures using C",
    link: "bca3bo4",
  },
  {
    id: 4,
    name: "Computer Oriented Numberical and Staristical Methods",
    link: "bca3c05",
  },
  {
    id: 5,
    name: "Theory of Computation",
    link: "bca3bo6",
  },
];
