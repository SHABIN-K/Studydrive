import useSWR from "swr";
import fetcher from "../fetcher";

const useSubject = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/subject", fetcher, {
    errorRetryCount: 3,
    errorRetryInterval: 3000,
  });
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

const useSubjects = ({ userEmail }) => {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/subject?userEmail=${userEmail}`,
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
