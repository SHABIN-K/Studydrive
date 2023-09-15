import { create } from "zustand";

export const useLoadingStore = create((set) => ({
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading }),
}));
