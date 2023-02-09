import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLocalEndpoint, localApi } from "@/api";

import type { IUser } from "@/types/user";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ToastMessage } from "@/components/shared";
import { t } from "i18next";

//Initial state type
interface IAuthState {
  user: IUser | null;
  token: string;
}

//Initial state
const initialState: IAuthState = {
  user: null,
  token: "",
};

export const logoutUser = createAsyncThunk("auth/fetchByIdStatus", async () => {
  const response = await localApi.post(getLocalEndpoint("sign-out"));
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout(state) {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.user = null;
      state.token = null;

      //Toast an succesfull logout
      ToastMessage.show(t("you_logged_out_succesfuly"));
    });
  },
});

export const { setUser: actionSetUser, setLogout: actionSetLogout } =
  authSlice.actions;

export default authSlice.reducer;
