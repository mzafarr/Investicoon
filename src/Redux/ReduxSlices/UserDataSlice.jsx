import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

export const UserDataSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUserData: (state, action) => {
      console.log('Data from UserDataSlice', action.payload);
      state.data = action.payload;
    },
  },
});

export const {saveUserData} = UserDataSlice.actions;
export const OneDayData = state => state.userData.data;
export default UserDataSlice.reducer;
