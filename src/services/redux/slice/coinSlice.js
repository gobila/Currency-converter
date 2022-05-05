import { createSlice } from '@reduxjs/toolkit';

const CoinSlice = createSlice({
  name: 'Coin',
  initialState: [],
  reducers: {
    addCoin(state, { payload }) {
      state.push(...[
        ...payload,
      ]);
    },
  },
});

export const { getCoin, addCoin } = CoinSlice.actions;

export const selectCoin = (state) => state;

export default CoinSlice.reducer;
