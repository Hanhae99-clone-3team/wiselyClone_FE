import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    loading: false,
    error: null,
    success: false, // for monitoring the registration process.
  };

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      logout: (state) => {
        localStorage.removeItem("Authorization");
        localStorage.removeItem("RefreshToken");
        localStorage.removeItem("userInfo"); // deletes token from storage
        state.loading = false;
        state.userInfo = null;
        state.userToken = null;
        state.error = null;
      },
    },
    extraReducers: {
    }
  });


export default userSlice.reducer;