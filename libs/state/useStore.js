import { create } from "zustand";

const usePostStore = create((set) => ({
  posts: [],
  setPosts: (newPosts) => set({ posts: newPosts }),
}));

export { usePostStore };
