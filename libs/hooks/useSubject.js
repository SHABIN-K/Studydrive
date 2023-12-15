import useSWR from "swr";
import fetcher from "../fetcher";

const useSubject = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/subject", fetcher);
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

const useSubjects = ({ userID }) => {
  console.log(userID);
  const { data, error, isLoading, mutate } = useSWR(
    `/api/subject/${userID}`,
    fetcher,
    {
      errorRetryCount: 3,
      errorRetryInterval: 3000,
    }
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export { useSubject, useSubjects };
