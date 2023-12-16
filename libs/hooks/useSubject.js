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

const useUserSubject = ({ userID }) => {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/subject/${userID}`,
    fetcher
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

const useFilterSubject = ({ course, semester }) => {
  const key = `/api/subject/filter/${course}/${semester}`;
  const { data, error, isLoading, mutate } = useSWR(key, fetcher);
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export { useSubject, useUserSubject, useFilterSubject };
