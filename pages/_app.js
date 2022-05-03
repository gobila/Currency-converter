/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import { CoinNamesProvider } from '../src/Context';

function MyApp({ Component, pageProps }) {
  return (
    <CoinNamesProvider>
      <Component {...pageProps} />
    </CoinNamesProvider>
  );
}

export default MyApp;
