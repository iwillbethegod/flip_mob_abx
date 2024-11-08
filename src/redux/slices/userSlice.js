import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    token: '',
    roles: {
      role_id: -1,
      name: null,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.roles = action.payload.roles;
    },
    resetUser: state => {
      state.username = null;
      state.token = null;
      state.roles = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUser, resetUser} = userSlice.actions;

export default userSlice.reducer;
