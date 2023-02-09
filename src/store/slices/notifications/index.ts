import { INotification } from "@/types/notification";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//initial state type
interface INotificationState {
  items: INotification[];
}

//initial state
const initialState: INotificationState = {
  items: [],
};

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setNotifications(state, action: PayloadAction<INotification[]>) {
      state.items = action.payload;
    },
    deleteNotifications(state) {
      state.items = [];
    },
  },
});

export const {
  setNotifications: actionSetNotifications,
  deleteNotifications: actionDeleteNotification,
} = notificationsSlice.actions;

export default notificationsSlice.reducer;
