import React from 'react';
import Head from 'next/head';
import Menu from '../src/components/Menu';
import styles from '../styles/Home.module.css';
import Converter from '../src/components/Converter';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Currency converter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />

      <main className={styles.main}>
        <Converter />
      </main>

      <footer className={styles.footer}>
        Powered by Moises
      </footer>
    </div>
  );
}
