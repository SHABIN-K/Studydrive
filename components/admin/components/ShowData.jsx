import { useEffect, useMemo, useState } from "react";

import Table from "./Table";
import { useUserPost } from "@/libs/hooks/usePost";
import { useUserSubject } from "@/libs/hooks/useSubject";

const ShowData = ({ userID }) => {
  const {
    data: fetchedSubjectData,
    error: subjectError,
    isLoading: subjectLoading,
  } = useUserSubject({ userID });

  const {
    data: fetchedPostData,
    error: postError,
    isLoading: postLoading,
  } = useUserPost({ userID });

  const [postData, setPostData] = useState([]);
  const [subjectData, setSubjectData] = useState([]);

  useEffect(() => {
    if (fetchedSubjectData) {
      setSubjectData(fetchedSubjectData);
    }

    if (subjectError) {
      console.error("Error fetching table data:", subjectError);
      toast.error("Something went wrong in fetching table data");
    }
  }, [fetchedSubjectData, subjectError]);

  useEffect(() => {
    if (fetchedPostData) {
      setPostData(fetchedPostData);
    }

    if (postError) {
      console.error("Error fetching table data:", postError);
      toast.error("Something went wrong in fetching Post data");
    }
  }, [fetchedPostData, postError]);

  const subjectDatas = useMemo(() => subjectData, [subjectData]);
  const postDatas = useMemo(() => postData, [postData]);

  /** @type import('@tanstack/react-table').ColumnDef<any> */
  const subjectColumns = [
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

  /** @type import('@tanstack/react-table').ColumnDef<any> */
  const postColumns = [
    {
      accessorKey: "NO",
      header: "#",
      cell: (info) => `${info.row.index + 1}`,
    },
    {
      accessorKey: "title",
      header: "File name",
    },
    {
      accessorKey: "course_name",
      header: "Course name",
    },
    {
      accessorKey: "category",
      header: "Category",
    },
    {
      accessorKey: "semester_code",
      header: "Semester",
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: (info) => (
        <div className="flex text-left space-x-3">
          <button
            onClick={() => handlePostUpdateButton(info.row.original)}
            className="btn btn-xs sm:btn-sm text-blue-500 hover:text-blue-700 cursor-pointer border-blue-400"
          >
            Edit
          </button>
          <button
            onClick={() => handlePostDeleteButton(info.row.original)}
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

  const handlePostDeleteButton = () => {
    console.log("hello delete button");
  };

  //Update button form table
  const handlePostUpdateButton = () => {
    console.log("hello update button");
  };

  return (
    <>
      <Table
        data={subjectDatas}
        columns={subjectColumns}
        isLoading={subjectLoading}
      />
      <Table data={postDatas} columns={postColumns} isLoading={postLoading} />
    </>
  );
};

export default ShowData;
