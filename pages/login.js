import React from 'react';
import Head from 'next/head';
import { Col, Container, Row } from 'react-bootstrap';
import Menu from '../src/components/Menu';
import styles from '../styles/Home.module.css';
import FormLogin from '../src/components/FormLogin';

export default function Login() {
  const stylePag = {
    minHeight: '70vh',
  };
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Currency converter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />

      <main className={styles.main} style={stylePag}>
        <Container style={containerStyle}>
          <Row>
            <Col sm={6}>
              <h2>Acesse sua conta do GitHub</h2>
            </Col>
            <Col>
              <FormLogin />
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}
