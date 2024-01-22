import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: true,
  like:false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setlike: (state, action) => {
      state.like = action.payload;
    },
  },
});

export const { loginUser, logoutUser, setLoading,setlike } = userSlice.actions;
export default userSlice.reducer