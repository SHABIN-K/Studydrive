import useSWR from "swr";
import fetcher from "../fetcher";

const useUserPost = ({ userID }) => {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/post/${userID}`,
    fetcher
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export { useUserPost };
