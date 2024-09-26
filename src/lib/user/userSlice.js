import { createSlice } from "@reduxjs/toolkit";
const loadUserFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const savedUser = localStorage.getItem("userInfo");
    return savedUser
      ? JSON.parse(savedUser)
      : { userInfo: null, isAuthenticated: false };
  }
  return { userInfo: null, isAuthenticated: false };
};
const initialState = loadUserFromLocalStorage();
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      (state.userInfo = action.payload), (state.isAuthenticated = true);
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
    logout: (state) => {
      (state.userInfo = null), (state.isAuthenticated = false);
      localStorage.removeItem("userInfo");
    },
    updateUser: (state, action) => {
      if (state.userInfo) {
        state.userInfo = { ...state.userInfo, ...action.payload };
        localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
      }
    },
  },
});

export const { login, logout, updateUser } = userSlice.actions;
export default userSlice.reducer;
