import { create } from "zustand";

interface TokenStore {
  token: string | undefined;
  updateToken: (token: string | undefined) => void;
}

export const useTokenStore = create<TokenStore>((set) => ({
  token: undefined,
  updateToken: (token) => set({ token }),
}));
