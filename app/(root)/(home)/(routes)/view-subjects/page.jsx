"use client";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import SubCard from "@/components/cards/SubCard";
import NoDataFound from "@/components/ui/NoDataFound";
import { useFilterSubject } from "@/libs/hooks/useSubject";
import CardSkeleton from "@/components/skeleton/CardSkeleton";

const ViewSubjects = () => {
  const searchParams = useSearchParams();
  const course = searchParams.get("name");
  const semester = searchParams.get("sem");

  const {
    data: fetchedData,
    error,
    isLoading: loading,
  } = useFilterSubject({ course, semester });

  useEffect(() => {
    if (fetchedData) {
      setUserSelectedData(fetchedData);
    }
    if (error) {
      console.error("Error fetching table data:", error);
      toast.error("Something went wrong in fetching Subjects");
    }
  }, [fetchedData, error]);

  const [userSelectedData, setUserSelectedData] = useState([]);
  const data = useMemo(() => userSelectedData, [userSelectedData]);

  const skeleton = [...Array(4).keys()].map((i) => {
    return <CardSkeleton key={i} />;
  });
  return (
    <div>
      <h1 className="select_header">Select Subjects</h1>
      <div className="items-center">
        {loading ? (
          <div className="grid md:grid-cols-2 mt-[18px] gap-[10px] grid-flow-col">
            <ul className="grid gap-6">{skeleton}</ul>
            <ul className="hidden sm:grid gap-6">{skeleton}</ul>
          </div>
        ) : (
          <>
            {data.length === 0 ? (
              <NoDataFound />
            ) : (
              <div className="grid md:grid-cols-2 mt-[18px] gap-[10px]">
                {data.map((item, index) => (
                  <SubCard key={index} data={item} isLoading={loading} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default ViewSubjects;
