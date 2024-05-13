import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const OneDaySlice = createSlice({
  name: 'oneDay',
  initialState,
  reducers: {
    fetchDataStart(state) {
      console.log('Loading from OneDaySlice');

      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action) {
      console.log('Data from OneDaySlice');
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure(state, action) {
      console.log('EWrror from OneDaySlice');

      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {fetchDataStart, fetchDataSuccess, fetchDataFailure} =
  OneDaySlice.actions;
export const OneDayData = state => state.oneDay.data;
export const OneDayLoading = state => state.oneDay.loading;
export const OneDayError = state => state.oneDay.error;
export default OneDaySlice.reducer;
