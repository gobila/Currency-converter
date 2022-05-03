import React, { useEffect, useState } from 'react';
import {
  Form, Col, Row, Button,
} from 'react-bootstrap';

const centralize = {
  display: 'flex',
  margin: 'auto',
};

export default function FormWallet() {
  const [conta, setConta] = useState({
    moeda: '',
    valor: '',
    data: '',
    moedaBase: 'BRL',
    valorFinal: 0,
  });

  const onChangeValue = (e) => {
    const { value } = e.target;
    const { name } = e.target;

    setConta((currentValues) => (
      {
        ...currentValues,
        [name]: value,
      }
    ));
  };
  useEffect(() => {
    const taxa = conta.valor * 4;
    setConta((currentValues) => (
      {
        ...currentValues,
        valorFinal: taxa,
      }
    ));
  }, [conta.valor]);
  return (
    <Form className="col-10">
      <Row className="align-items-center">
        <Form.Group as={Col} sm={4} className="mb-3" controlId="formGridCoin">
          <Form.Label> Moeda </Form.Label>
          <Form.Control name="moeda" onChange={onChangeValue} />
        </Form.Group>

        <Form.Group as={Col} sm={4} className="mb-3" controlId="formGridValue">
          <Form.Label> Valor </Form.Label>
          <Form.Control type="number" name="valor" onChange={onChangeValue} />
        </Form.Group>

        <Form.Group as={Col} sm={4} className="mb-3" controlId="formGridDate">
          <Form.Label> Data </Form.Label>
          <Form.Control type="date" name="data" onChange={onChangeValue} />
        </Form.Group>
      </Row>

      <Row className="align-items-center">
        <Form.Group as={Col} sm={5} className="mb-3" controlId="formGridCoinBase">
          <Row>
            <Form.Label column sm={4}>
              Moeda Base
            </Form.Label>
            <Col sm={6}>
              <Form.Control placeholder="Moeda Base" value={conta.moedaBase} disabled />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group as={Col} sm={5} className="mb-3" controlId="formGridValueFinal">
          <Row>
            <Form.Label column sm={4}>
              Valor Final
            </Form.Label>
            <Col sm={6}>
              <Form.Control placeholder="Valor Final" value={conta.valorFinal} disabled />
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
