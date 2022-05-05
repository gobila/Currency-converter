import { createSlice } from '@reduxjs/toolkit';

const walletSlice = createSlice({
  name: 'wallet',
  initialState: [],
  reducers: {
    getWallet() {},
    addWallet(state, { payload }) {
      state.push({
        ...payload,
      });
    },
  },
});

export const { addWallet, getWallet } = walletSlice.actions;

export const selectConta = (state) => state;

export default walletSlice.reducer;
