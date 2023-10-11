import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      return {
        ...state,
        user: user,
        token: token,
      };
    },
    logOut: (state) => ({
      ...state,
      user: null,
      token: null,
    }),
  },
});
