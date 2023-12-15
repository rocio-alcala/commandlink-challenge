import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import fields from "../../fields.json";
import { Field } from "../../types";

interface InitialState {
  [key: string]: number | string | undefined;
}
const initialState: InitialState = {};

fields.flat().forEach((field: Field) => {
  if (field.type === "number") {
    initialState[field.id] = undefined;
  } else {
    initialState[field.id] = "";
  }
});

export const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    submitForm: (state, action: PayloadAction<InitialState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { submitForm } = formSlice.actions;
export default formSlice.reducer;
