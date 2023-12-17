"use client";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import PostCard from "@/components/cards/PostCard";
import { useFilterPost } from "@/libs/hooks/usePost";
import NoDataFound from "@/components/ui/NoDataFound";
import SkeletonLoading from "@/components/ui/SkeletonLoading";

const MyDoc = () => {
  const searchParams = useSearchParams();
  const subId = searchParams.get("subId");
  const course = searchParams.get("name");
  const semester = searchParams.get("sem");
  const category = searchParams.get("category");

  const {
    data: fetchedData,
    error,
    isLoading: loading,
  } = useFilterPost({ course, semester, category, subId });

  useEffect(() => {
    if (fetchedData) {
      setUserSelectedData(fetchedData);
    }
    if (error) {
      console.error("Error fetching table data:", error);
      toast.error("Something went wrong in fetching Posts");
    }
  }, [fetchedData, error]);

  const [userSelectedData, setUserSelectedData] = useState([]);
  const data = useMemo(() => userSelectedData, [userSelectedData]);

  return (
    <div>
      <h1 className="select_header">{category}</h1>
      <div className="items-center">
        {loading ? (
          <SkeletonLoading />
        ) : (
          <>
            {data.length === 0 ? (
              <NoDataFound />
            ) : (
              <div className="grid md:grid-cols-2 mt-[18px] gap-[10px]">
                {data.map((item, index) => (
                  <PostCard key={index} data={item} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MyDoc;
