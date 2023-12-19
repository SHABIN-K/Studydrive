import useSWR from "swr";
import fetcher from "../fetcher";

const usePost = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/post", fetcher);
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

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

const useFilterPost = ({ course, semester, category, subId }) => {
  const key = `/api/post/filter/${course}/${semester}/${category}/${subId}`;
  const { data, error, isLoading, mutate } = useSWR(key, fetcher);
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export { usePost, useUserPost, useFilterPost };
