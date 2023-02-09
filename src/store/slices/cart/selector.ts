import { StoreType } from "@/store/store";
import { createSelector } from "reselect";

const addToCartStore = (state: StoreType) => state.cart;
export const cartSelector = createSelector(addToCartStore, (store) => store);
