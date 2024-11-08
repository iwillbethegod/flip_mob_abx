import {createSlice} from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    setLogin: state => {
      state.isLoggedIn = true;
    },
    setLogout: state => {
      state.isLoggedIn = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setLogin, setLogout} = loginSlice.actions;

export default loginSlice.reducer;
