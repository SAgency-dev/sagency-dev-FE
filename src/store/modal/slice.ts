import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const MODAL_TYPE = {
  portfolio: "portfolio",
} as const;

export type ModalId = keyof typeof MODAL_TYPE;

export type ModalState = {
  [MODAL_TYPE.portfolio]: {
    isOpened: boolean;
    workId: string | null;
    workLink: string | null;
  };
};

const initialState: ModalState = {
  portfolio: {
    isOpened: false,
    workId: null,
    workLink: null,
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (
      state: ModalState,
      action: PayloadAction<{ id: ModalId; workId?: string; workLink?: string }>
    ) => {
      const { id, workId, workLink } = action.payload;

      console.log(`WorkString is ${workLink}`)
      state[id].isOpened = true;
      state[id].workId = workId || null;
      state[id].workLink = workLink || null;
    },
    closeModal: (
      state: ModalState,
      action: PayloadAction<{ id: ModalId; workId?: string | null }>
    ) => {
      const { id } = action.payload;

      state[id].isOpened = false;
      state[id].workId = null;
      state[id].workLink = null;
    },
  },
});

export default modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;
