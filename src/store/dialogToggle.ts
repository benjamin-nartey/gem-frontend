import { create } from "zustand";

interface UseDialogToggle {
  toggleDialog: {
    isOpenEditEmployee: boolean;
    setIsOpenEditEmployee: (isOpenEditVisitor: boolean) => void;
    isOpenEditVisitor: boolean;
    setIsOpenEditVisitor: (isOpenEditVisitor: boolean) => void;
    isOpenAddVisitor: boolean;
    setIsOpenAddVisitor: (isOpenAddVisitor: boolean) => void;
    isOpenAddEmployee: boolean;
    setIsOpenAddEmployee: (isOpenAddVisitor: boolean) => void;
  };
}

export const useDialogToggle = create<UseDialogToggle>((set) => ({
  toggleDialog: {
    isOpenEditEmployee: false,
    setIsOpenEditEmployee: (isOpenEditEmployee: boolean) =>
      set((state) => ({
        toggleDialog: {
          ...state.toggleDialog,
          isOpenEditEmployee,
        },
      })),
    isOpenEditVisitor: false,
    setIsOpenEditVisitor: (isOpenEditVisitor: boolean) =>
      set((state) => ({
        toggleDialog: {
          ...state.toggleDialog,
          isOpenEditVisitor,
        },
      })),
    isOpenAddVisitor: false,
    setIsOpenAddVisitor: (isOpenAddVisitor: boolean) =>
      set((state) => ({
        toggleDialog: {
          ...state.toggleDialog,
          isOpenAddVisitor,
        },
      })),
    isOpenAddEmployee: false,
    setIsOpenAddEmployee: (isOpenAddEmployee: boolean) =>
      set((state) => ({
        toggleDialog: {
          ...state.toggleDialog,
          isOpenAddEmployee,
        },
      })),
  },
}));
