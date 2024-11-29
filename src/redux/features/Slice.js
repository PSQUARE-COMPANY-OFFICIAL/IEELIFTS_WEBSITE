//setup in future
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';




const initialState = {
  user: null,
};



export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },

});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
