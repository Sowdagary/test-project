import { createSlice } from "@reduxjs/toolkit";

export interface ICardMode {
  mode: "vertical" | "horizontal";
}
const initialState: ICardMode = {
  mode: "vertical",
};

const cardMode = createSlice({
  name: "card-mode",
  initialState,
  reducers: {
    toggleCardMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { toggleCardMode } = cardMode.actions;
export default cardMode.reducer;
