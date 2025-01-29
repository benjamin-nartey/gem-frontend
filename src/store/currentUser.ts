import { create } from "zustand";

interface CurrentUserStore {
  currentUser: UserProps | null;
  updateCurrentUser: (currentUser: UserProps) => void;
}

export const useCurrentUserStore = create<CurrentUserStore>((set) => ({
  currentUser: null,
  updateCurrentUser: (currentUser) => set({ currentUser }),
}));
