import { about, addUser, dashboard, upload } from "@/public/assets";
import {
  Psychology,
  bba,
  bca,
  bsw,
  ca,
  coop,
  economics,
  english,
  finance,
  five,
  four,
  history,
  maEnglish,
  maths,
  mcomfinance,
  msw,
  one,
  play,
  polictics,
  qp,
  six,
  study,
  syllabus,
  three,
  two,
} from "@/public/icons";

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
    name: "Study Materials",
    imgUrl: study,
    link: "notes",
    description: "Study Materials",
  },
  {
    id: 2,
    name: "Syllabus",
    imgUrl: syllabus,
    link: "syllabus",
    description: "Syllabus",
  },
  {
    id: 3,
    name: "Question Papers",
    imgUrl: qp,
    link: "questionpapers",
    description: "Question Papers",
  },
  {
    id: 4,
    name: "Videos",
    imgUrl: play,
    link: "videos",
    description: "videos lesson",
  },
];

//courses-items
export const courses = [
  {
    id: 1,
    name: "Ba English",
    imgUrl: english,
    link: "baenglish",
    description:
      "BA English is an academic program that explores the study of the English language, literature, and its cultural significance.",
  },
  {
    id: 2,
    name: "Ba History",
    imgUrl: history,
    link: "bahistory",
    description:
      "BA History is an academic program that delves into the study of past events, societies, and cultures, shaping a deep understanding of historical contexts.",
  },
  {
    id: 3,
    name: "Economics",
    imgUrl: economics,
    link: "baeconomics",
    description:
      "BA Economics is an academic program that focuses on the study of economic systems, theories, and policies, shaping insights into how societies allocate resources.",
  },
  {
    id: 4,
    name: "Bsw",
    imgUrl: bsw,
    link: "bsw",
    description:
      "BSW (Bachelor of Social Work) is an academic program that equips students with the skills and understanding to address social issues and contribute to community welfare.",
  },
  {
    id: 5,
    name: "Mathematics",
    imgUrl: maths,
    link: "bscmath",
    description:
      "BSc Mathematics is an academic program that explores various branches of mathematics, fostering analytical and problem-solving skills.",
  },
  {
    id: 6,
    name: "Psychology",
    imgUrl: Psychology,
    link: "bscpsychology",
    description:
      "BSc Psychology is an academic program that delves into the study of human behavior and mental processes, offering insights into understanding the mind.",
  },
  {
    id: 7,
    name: "Bca",
    imgUrl: bca,
    link: "bca",
    description:
      "BCA (Bachelor of Computer Applications) is a degree program that provides in-depth knowledge of computer science and its applications.",
  },
  {
    id: 8,
    name: "Bba",
    imgUrl: bba,
    link: "bba",
    description:
      "BBA (Bachelor of Business Administration) is an academic program that provides a foundational understanding of business management principles and practices.",
  },
  {
    id: 9,
    name: "Political Science",
    imgUrl: polictics,
    link: "politicalscience",
    description:
      "BA Political Science is an academic program that examines political systems, theories, and dynamics, fostering a comprehensive understanding of governance and public affairs.",
  },
  {
    id: 10,
    name: "Bcom Finance",
    imgUrl: finance,
    link: "bcomfinance",
    description:
      "BCom Finance is an academic program that focuses on financial management, investments, and economics, preparing students for roles in finance and accounting.",
  },
  {
    id: 11,
    name: "Bcom CA",
    imgUrl: ca,
    link: "bcomca",
    description:
      "BCom Computer Applications is an academic program that combines business studies with practical computer skills, preparing students for roles in IT-driven business environments.",
  },
  {
    id: 12,
    name: "Bcom Co-operation",
    imgUrl: coop,
    link: "bcomcooperation",
    description:
      "BCom Cooperation is an academic program that explores the principles of cooperative management and business strategies, fostering an understanding of collaborative enterprises.",
  },
  {
    id: 13,
    name: "Ma English",
    imgUrl: maEnglish,
    link: "maenglish",
    description:
      "MA English is a postgraduate program that offers in-depth exploration of the English language, literature, and critical analysis, enhancing your understanding of cultural narratives and communication.",
  },
  {
    id: 14,
    name: "Msw",
    imgUrl: msw,
    link: "msw",
    description:
      "MSW (Master of Social Work) is a postgraduate program that equips students with advanced skills in social work, empowering them to create positive change in communities and individuals' lives.",
  },
  {
    id: 15,
    name: "Mcom Finance",
    imgUrl: mcomfinance,
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
    imgUrl: one,
  },
  {
    id: 2,
    name: "Second",
    link: "two",
    imgUrl: two,
  },
  {
    id: 3,
    name: "Third",
    link: "three",
    imgUrl: three,
  },
  {
    id: 4,
    name: "Fourth",
    link: "four",
    imgUrl: four,
  },
  {
    id: 5,
    name: "Fifth",
    link: "five",
    imgUrl: five,
  },
  {
    id: 6,
    name: "Sixth",
    link: "six",
    imgUrl: six,
  },
];

export const posts = [
  {
    id: 1,
    course_name: "bca",
    semester_code: "three",
    subject_code: "a11",
    subject_name: "python ser",
    title: "leaving",
    description:
      "A description file is an ASCII text file that contains descriptions of file and key ... The sample description files shown in this section describe a data file.",
    category: "Study Materials",
    file_url:
      "https://files.edgestore.dev/f0rvulnqh3dxfpoz/publicFiles/_public/05a9d4ca-e0ba-4485-9fe6-b3f0d6e35afa.pdf",
    file_name: "leaving.pdf",
    createdAt: {
      $date: "2023-12-15T14:05:56.178Z",
    },
  },
  {
    id: 2,
    course_name: "bca",
    semester_code: "three",
    subject_code: "a11",
    subject_name: "python ser",
    title: "leaving",
    description:
      "A description file is an ASCII text file that contains descriptions of file and key ... The sample description files shown in this section describe a data file.",
    category: "Study Materials",
    file_url:
      "https://files.edgestore.dev/f0rvulnqh3dxfpoz/publicFiles/_public/05a9d4ca-e0ba-4485-9fe6-b3f0d6e35afa.pdf",
    file_name: "leaving.pdf",
    createdAt: {
      $date: "2023-12-15T14:05:56.178Z",
    },
  },
  {
    id: 3,
    course_name: "bca",
    semester_code: "three",
    subject_code: "a11",
    subject_name: "python ser",
    title: "leaving",
    description:
      "A description file is an ASCII text file that contains descriptions of file and key ... The sample description files shown in this section describe a data file.",
    category: "Study Materials",
    file_url:
      "https://files.edgestore.dev/f0rvulnqh3dxfpoz/publicFiles/_public/05a9d4ca-e0ba-4485-9fe6-b3f0d6e35afa.pdf",
    file_name: "leaving.pdf",
    createdAt: {
      $date: "2023-12-15T14:05:56.178Z",
    },
  },
  {
    id: 4,
    course_name: "bca",
    semester_code: "three",
    subject_code: "a11",
    subject_name: "python ser",
    title: "leaving",
    description:
      "A description file is an ASCII text file that contains descriptions of file and key ... The sample description files shown in this section describe a data file.",
    category: "Study Materials",
    file_url:
      "https://files.edgestore.dev/f0rvulnqh3dxfpoz/publicFiles/_public/05a9d4ca-e0ba-4485-9fe6-b3f0d6e35afa.pdf",
    file_name: "leaving.pdf",
    createdAt: {
      $date: "2023-12-15T14:05:56.178Z",
    },
  },
  {
    id: 5,
    course_name: "bca",
    semester_code: "three",
    subject_code: "a11",
    subject_name: "python ser",
    title: "leaving",
    description:
      "A description file is an ASCII text file that contains descriptions of file and key ... The sample description files shown in this section describe a data file.",
    category: "Study Materials",
    file_url:
      "https://files.edgestore.dev/f0rvulnqh3dxfpoz/publicFiles/_public/05a9d4ca-e0ba-4485-9fe6-b3f0d6e35afa.pdf",
    file_name: "leaving.pdf",
    createdAt: {
      $date: "2023-12-15T14:05:56.178Z",
    },
  },
];


//https://files.edgestore.dev/f0rvulnqh3dxfpoz/publicFiles/_public/d03b73e1-0491-4142-8b7a-dec1fd59bb0e.pdf