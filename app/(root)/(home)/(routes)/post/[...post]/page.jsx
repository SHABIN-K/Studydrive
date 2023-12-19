"use client";
import { useState } from "react";
import Feed from "@/components/Feed";
import { filterUrl } from "@/libs/hooks/usefilter";
import { usePostStore } from "@/libs/state/useStore";
import PostViewDialogBox from "@/components/models/PostViewDialogBox";

const MyPost = ({ params }) => {
  const [isPostOpen, setIsPostOpen] = useState(true);
  const fetchedData = usePostStore((state) => state.posts);

  const post = filterUrl(params, fetchedData);
  const [data] = post.map((items) => items);

  //useEffect(() => {
  //  if (!data) {
  //    console.log(data.length === 0);
  //    toast("No data found !");
      //router.push("/");
  //  }
  //}, [data, router]);
  //

  return (
    <div className="md:flex">
      <div>
        <Feed
          label="Discover Courses"
          styleHead="mt-3"
          style="md:grid-cols-5  mt-4 gap-1.5 justify-between md:justify-start"
        />
      </div>
      {isPostOpen && data && (
        <PostViewDialogBox
          isOpen={isPostOpen}
          setIsOpen={setIsPostOpen}
          data={data}
        />
      )}
    </div>
  );
};

export default MyPost;
