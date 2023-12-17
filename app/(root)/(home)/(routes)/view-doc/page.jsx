"use client";
import { useSearchParams } from "next/navigation";

const MyDoc = () => {
  const searchParams = useSearchParams();
  const subId = searchParams.get("subId");
  const course = searchParams.get("name");
  const semester = searchParams.get("sem");
  const category = searchParams.get("category");
  return <div>MyDoc</div>;
};

export default MyDoc;
