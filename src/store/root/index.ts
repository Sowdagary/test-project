import {
  addRecipeSlice,
  authSlice,
  commonsSlice,
  notificationsSlice,
  addToCart,
} from "../slices";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authSlice,
  commons: commonsSlice,
  notifications: notificationsSlice,
  addRecipe: addRecipeSlice,
  cart: addToCart,
});

export default rootReducer;
