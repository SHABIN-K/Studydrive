"use client";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import SubCard from "@/components/cards/SubCard";
import { useFilterSubject } from "@/libs/hooks/useSubject";

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

  return (
    <div>
      <h1 className="select_header">Select Subjects</h1>
      <div className="items-center">
        <div className="grid md:grid-cols-2 mt-[18px] gap-[10px]">
          {data.map((data, index) => {
            return <SubCard key={index} data={data} isLoading={loading} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ViewSubjects;
