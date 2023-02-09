import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { INotification } from "@/types/notification"

//initial state type
interface INotificationState {
  quantity: number
}

//initial state
const initialState: INotificationState = {
  quantity: 2
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<number>) {
      state.quantity = action.payload
    }
  }
})

export const { addToCart: actionSetAddToCart } = cartSlice.actions

export default cartSlice.reducer
