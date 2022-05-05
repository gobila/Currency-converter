import React from 'react';
import Link from 'next/link';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Style from './style.module.css';

export default function Menu() {
  const mystyle = {
    color: 'white',
    backgroundColor: 'tomato',
    padding: '10px',
    fontFamily: 'Arial',
  };

  return (
    <div>
      <Navbar style={mystyle} expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="col-4">Currency Converter</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="col-8 justify-content-end" id="basic-navbar-nav">
            <Nav className="justify-content-end">
              <Link href="/">
                <span className={Style.menuHover}>
                  Cotação
                </span>
              </Link>
              <Link href="/wallet">
                <span className={Style.menuHover}>
                  Carteira
                </span>
              </Link>
              <Link href="/login">
                <span className={Style.menuHover}>
                  Login
                </span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
}
