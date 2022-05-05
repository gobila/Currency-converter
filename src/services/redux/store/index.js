import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import saga from '../sagas';
import WalletReducer from '../slice/walletSlice';
import CoinReducer from '../slice/coinSlice';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const combineReducer = combineReducers({ WalletReducer, CoinReducer });

const store = configureStore({
  reducer: combineReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(saga);
export default store;
