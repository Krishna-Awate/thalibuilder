import { configureStore } from '@reduxjs/toolkit';
import thaliReducer from './reducer/thaliSlice';

export const store = configureStore({
  reducer: { thali: thaliReducer },
});
