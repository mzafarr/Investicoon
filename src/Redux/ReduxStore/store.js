import {configureStore} from '@reduxjs/toolkit';
import colorSlice from '../ReduxSlices/sampleSlice';
import OneDaySlice from '../ReduxSlices/OneDaySlice';
import UserDataSlice from '../ReduxSlices/UserDataSlice';

export const store = configureStore({
  reducer: {
    color: colorSlice,
    oneDay: OneDaySlice,
    userData: UserDataSlice,
  },
});
