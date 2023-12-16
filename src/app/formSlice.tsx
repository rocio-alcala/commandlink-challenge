import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FormState {
  [key: string]: string | undefined;
}
const initialState: FormState = {};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    submitForm: (_, action: PayloadAction<FormState>) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { submitForm } = formSlice.actions;
export default formSlice.reducer;
