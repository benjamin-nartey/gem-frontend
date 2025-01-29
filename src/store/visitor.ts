import { create } from "zustand";

interface VisitorStore {
  visitor: VisitorProps | null;
  updatevisitor: (visitor: VisitorProps) => void;
}

export const useVisitorStore = create<VisitorStore>((set) => ({
  visitor: null,
  updatevisitor: (visitor) => set({ visitor }),
}));
