import { StoreType } from "@/store/store";
import { createSelector } from "reselect";

const authStore = (state: StoreType) => state.auth;

export const userSelector = createSelector(authStore, (auth) => auth.user);

export const tokenSelector = createSelector(authStore, (auth) => auth.token);
