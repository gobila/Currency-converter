/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import { UserProvider } from '../src/Context';
import store from '../src/services/redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </Provider>
  );
}

export default MyApp;
