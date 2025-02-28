import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const MODAL_TYPE = {
  portfolio: "portfolio",
} as const;

export type ModalId = keyof typeof MODAL_TYPE;

export type ModalState = {
  [MODAL_TYPE.portfolio]: {
    isOpened: boolean;
    workId: string | null;
  };
};

const initialState: ModalState = {
  portfolio: {
    isOpened: false,
    workId: null,
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (
      state: ModalState,
      action: PayloadAction<{ id: ModalId; workId?: string }>
    ) => {
      const { id, workId } = action.payload;

      state[id].isOpened = true;
      state[id].workId = workId || null;
    },
    closeModal: (
      state: ModalState,
      action: PayloadAction<{ id: ModalId; workId?: string }>
    ) => {
      const { id } = action.payload;

      state[id].isOpened = false;
      state[id].workId = null;
    },
  },
});

export default modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;
