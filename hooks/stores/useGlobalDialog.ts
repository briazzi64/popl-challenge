import { create } from 'zustand';

type DialogContent = {
  title: string;
  content: string;
};

type UseGlobalDialogState = {
  isVisible: boolean;
  dialogContent: DialogContent | null;
  openDialog: (data: DialogContent | null) => void;
  closeDialog: () => void;
};

export const useGlobalDialog = create<UseGlobalDialogState>((set) => {
  return {
    isVisible: false,
    dialogContent: null,
    openDialog: (dialogContent) => {
      set({ dialogContent, isVisible: true });
    },
    closeDialog: () => {
      set({ isVisible: false, dialogContent: null });
    },
  };
});
