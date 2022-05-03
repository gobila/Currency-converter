import { configureStore } from '@reduxjs/toolkit';
import useReducer from '../slice/walletSlice';

const store = configureStore({
  reducer: {
    wallet: useReducer,
  },
});

export default store;
