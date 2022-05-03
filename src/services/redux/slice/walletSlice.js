import { createSlice } from '@reduxjs/toolkit';

const walletSlice = createSlice({
  name: 'wallet',
  initialState: [{
    id: 0,
    code: 'usd',
    moeda: 'Dólar Americano',
    valor: 100,
    taxa: 5.249,
    codeBase: 'BRL',
    moedaBase: 'Real Brasileiro',
    valorFinal: 524.9,
  }],
  reducers: {
    addWallet(state, { payload }) {
      state.push({
        ...payload,
      });
    },
  },
});

export const { addWallet } = walletSlice.actions;

export const selectConta = (state) => state.wallet;

export default walletSlice.reducer;
