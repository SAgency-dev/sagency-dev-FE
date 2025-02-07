import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const DIALOG_TYPE = {
  feedback: "feedback",
} as const;

export type DialogId = keyof typeof DIALOG_TYPE;

// type BaseData = NonNullable<unknown>;
// type FeedbackData = BaseData & {
//   name: string;
//   email: string;
//   messenger: string | null;
// };

export type DialogState = {
  [DIALOG_TYPE.feedback]: {
    open: boolean;
  };
};

const initialState: DialogState = {
  feedback: {
    open: false,
  },
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    openDialog: (
      state: DialogState,
      action: PayloadAction<{ id: DialogId }>
    ) => {
      const { id } = action.payload;
      window.alert("Dialog is opened!");

      state[id].open = true;
    },
    closeDialog: (
      state: DialogState,
      action: PayloadAction<{ id: DialogId }>
    ) => {
      const { id } = action.payload;

      state[id].open = false;
    },
  },
});

export default dialogSlice.reducer;
export const { closeDialog, openDialog } = dialogSlice.actions;
