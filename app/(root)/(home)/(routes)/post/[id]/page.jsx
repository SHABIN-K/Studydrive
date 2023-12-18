"use client";
import { useState } from "react";
import Feed from "@/components/Feed";
import { filterUrl } from "@/libs/usefilter";
import { usePostStore } from "@/libs/state/useStore";
import PostViewDialogBox from "@/components/models/PostViewDialogBox";

const MyPost = ({ params }) => {
  const [isPostOpen, setIsPostOpen] = useState(true);
  const fetchedData = usePostStore((state) => state.posts);

  const post = filterUrl(params.id, fetchedData);
  const data = post.map((items) => items);

  return (
    <div className="md:flex">
      <div>
        <Feed
          label="Discover Courses"
          styleHead="mt-3"
          style="md:grid-cols-5  mt-4 gap-1.5 justify-between md:justify-start"
        />
      </div>
      {isPostOpen && data.length > 0 && (
        <PostViewDialogBox
          isOpen={isPostOpen}
          setIsOpen={setIsPostOpen}
          data={data[0]}
        />
      )}
    </div>
  );
};

export default MyPost;
