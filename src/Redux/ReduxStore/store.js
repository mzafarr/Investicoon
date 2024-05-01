import {configureStore} from '@reduxjs/toolkit';
import colorSlice from '../ReduxSlices/sampleSlice';

export const store = configureStore({
  reducer: {
    color: colorSlice,
  },
});
