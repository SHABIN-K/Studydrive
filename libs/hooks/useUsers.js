import useSWR from "swr";
import fetcher from "../fetcher";

const useUsers = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/user", fetcher);
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useUsers;
