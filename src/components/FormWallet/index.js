import React from 'react';
import {
  Form, Col, Row, Button,
} from 'react-bootstrap';

export default function FormWallet() {
  const centralize = {
    display: 'flex',
    margin: 'auto',
  };
  return (
    <Form className="col-10">
      <Row className="align-items-center">
        <Form.Group as={Col} sm={4} className="mb-3" controlId="formGridCoin">
          <Form.Label>
            Moeda
          </Form.Label>
          <Form.Control placeholder="moeda" />
        </Form.Group>
        <Form.Group as={Col} sm={4} className="mb-3" controlId="formGridValue">
          <Form.Label>
            Valor
          </Form.Label>
          <Form.Control type="number" placeholder="Valor" />
        </Form.Group>
        <Form.Group as={Col} sm={4} className="mb-3" controlId="formGridDate">
          <Form.Label>
            Data
          </Form.Label>
          <Form.Control type="date" placeholder="data" />
        </Form.Group>
      </Row>

      <Row className="align-items-center">
        <Form.Group as={Col} sm={5} className="mb-3" controlId="formGridCoinBase">
          <Row>
            <Form.Label column sm={4}>
              Moeda Base
            </Form.Label>
            <Col sm={6}>
              <Form.Control placeholder="Moeda Base" disabled />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group as={Col} sm={5} className="mb-3" controlId="formGridValueFinal">
          <Row>
            <Form.Label column sm={4}>
              Valor Final
            </Form.Label>
            <Col sm={6}>
              <Form.Control placeholder="Valor Final" disabled />
            </Col>
          </Row>
        </Form.Group>

        <Col className="justify-content-center" style={centralize}>
          <Button type="submit" className="m-auto mb-3">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
