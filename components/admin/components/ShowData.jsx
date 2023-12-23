import axios from "axios";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { useEffect, useMemo, useState } from "react";

import Table from "./Table";
import { useEdgeStore } from "@/libs/edgestore";
import { useUserPost } from "@/libs/hooks/usePost";
import { useUserSubject } from "@/libs/hooks/useSubject";

const ShowData = ({ userID }) => {
  const { edgestore } = useEdgeStore();
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
    if (fetchedPostData) {
      setPostData(fetchedPostData);
    }

    if (postError) {
      console.error("Error fetching table data:", postError);
      toast.error("Something went wrong in fetching Post data");
    }
  }, [fetchedPostData, fetchedSubjectData, postError, subjectError]);

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
        <button
          onClick={() => handleSubjectDeleteButton(info.row.original)}
          className="btn btn-xs sm:btn-sm text-red-500 hover:text-red-700 cursor-pointer border-red-400"
        >
          Remove
        </button>
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
        <button
          onClick={() => handlePostDeleteButton(info.row.original)}
          className="btn btn-xs sm:btn-sm text-red-500 hover:text-red-700 cursor-pointer border-red-400"
        >
          Remove
        </button>
      ),
    },
  ];

  //functions for Post
  const handlePostDeleteButton = (data) => {
    Swal.fire({
      title: "Delete Document",
      text: "This will permanently Delete your Document",
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
          const res = await axios.delete("/api/post", {
            data: {
              id: data.id,
            },
          });
          await edgestore.publicFiles.delete({
            url: data.file_url,
          });
          if (res.status === 200) {
            Swal.fire({
              title: "Deleted!",
              text: "Your Document has been permanently Deleted.",
              icon: "success",
              color: "#fff",
              background: "#13131a",
              customClass: {
                popup: "bordered-alert",
              },
            });

            setPostData((prevTableData) =>
              prevTableData.filter((document) => document.id !== data.id)
            );
          } else {
            Swal.fire({
              title: "Failed",
              text: "Subject not found",
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
  //functions for Subject
  const handleSubjectDeleteButton = (data) => {
    Swal.fire({
      title: "Delete Subject",
      text: "This will permanently Delete your Subject",
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
          const res = await axios.delete("/api/subject", {
            data: {
              id: data.id,
            },
          });
          if (res.status === 200) {
            Swal.fire({
              title: "Deleted!",
              text: "Your Subject has been permanently Deleted.",
              icon: "success",
              color: "#fff",
              background: "#13131a",
              customClass: {
                popup: "bordered-alert",
              },
            });
            setSubjectData((prevTableData) =>
              prevTableData.filter((subject) => subject.id !== data.id)
            );
          } else {
            Swal.fire({
              title: "Failed",
              text: "Subject not found",
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

  return (
    <div className="max-w-sm sm:max-w-none pr-4 overflow-hidden">
      <h1 className="text-white text-lg font-medium">Your subject</h1>
      <Table
        data={subjectDatas}
        columns={subjectColumns}
        isLoading={subjectLoading}
      />
      <h1 className="text-white text-lg font-medium">Your Files</h1>
      <Table data={postDatas} columns={postColumns} isLoading={postLoading} />
    </div>
  );
};

export default ShowData;
