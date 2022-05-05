import {
  call, takeLatest, put,
} from 'redux-saga/effects';
import ConnectApi from '../../connect';
import { addCoin } from '../slice/coinSlice';

export const sagaActions = {
  ADD_WALLET: 'ADD_WALLET',
  ADD_COINS: 'ADD_COINS',
};

const callAPI = ConnectApi;

export function* addCoins() {
  try {
    const result = yield call(() => callAPI.getCoin('all'));

    const arr = Object.values(result).map((i) => i);
    yield put(addCoin(arr));
  } catch (e) {
    yield put({ type: 'ADD_COINS' });
  }
}
export default function* saga() {
  yield takeLatest(sagaActions.ADD_COINS, addCoins);
}
