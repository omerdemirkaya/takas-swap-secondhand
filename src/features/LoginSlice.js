// loginSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logout } = loginSlice.actions;
export default loginSlice.reducer;
