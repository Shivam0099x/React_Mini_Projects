import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    
    delUser: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { addUser, delUser } = authSlice.actions;
export default authSlice.reducer;
