import { createSlice } from "@reduxjs/toolkit";

const cardMode = createSlice({
    name: "card-mode",
    initialState: {
        mode: "vertical"
    },
    reducers: {
        toggleCardMode: (state, action) => {
            state.mode = action.payload;
        }
    }
})

export const { toggleCardMode } = cardMode.actions;
export default cardMode.reducer;