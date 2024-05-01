import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setColor: state => {
      state.value = [...state.value, Math.random()];
    },
  },
});

export const {setColor} = colorSlice.actions;

export default colorSlice.reducer;
