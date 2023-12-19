"use client";
import { useEffect, useState } from "react";
import Feed from "@/components/Feed";
import { filterUrl } from "@/libs/hooks/usefilter";
import { usePostStore } from "@/libs/state/useStore";
import PostViewDialogBox from "@/components/models/PostViewDialogBox";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const MyPost = ({ params }) => {
  const router = useRouter();
  const [isPostOpen, setIsPostOpen] = useState(true);
  const fetchedData = usePostStore((state) => state.posts);

  const post = filterUrl(params, fetchedData);
  const [data] = post.map((items) => items);
  console.log(data);
  //
  //useEffect(() => {
  //  if (data.length === 0) {
  //    console.log(data.length === 0);
  //    toast("No data found !");
  //    //router.push("/");
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
