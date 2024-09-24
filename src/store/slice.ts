import { createSlice } from "@reduxjs/toolkit";

interface IAuthSlice {
  isAuth: boolean;
  user: IUser | null;
}

const initialState: IAuthSlice = {
  isAuth: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setAuthData: (state, action) => {
      state.isAuth = true;
      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
    },
    setProfileData: (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
    },
  },
});

export const { setIsAuth, setAuthData, setProfileData } = authSlice.actions;

export default authSlice.reducer;
