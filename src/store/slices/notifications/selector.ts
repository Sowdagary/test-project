import { StoreType } from "@/store/store";
import { createSelector } from "reselect";

const notificationStore = (state: StoreType) => state.notifications;
export const notificationsSelector = createSelector(
  notificationStore,
  (notifications) => notifications.items
);
