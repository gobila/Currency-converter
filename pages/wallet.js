import React, { useEffect } from 'react';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import Menu from '../src/components/Menu';
import styles from '../styles/Home.module.css';
import DesTable from '../src/components/Table';
import FormWallet from '../src/components/FormWallet';
import { sagaActions } from '../src/services/redux/sagas';

export default function Wallet() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: sagaActions.ADD_COINS });
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Currency converter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />

      <main className={styles.main}>
        <FormWallet />
        <DesTable />
      </main>
    </div>
  );
}
