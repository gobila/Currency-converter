import React, { useEffect, useState } from 'react';
import {
  Form, Col, Row, Button,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addWallet } from '../../services/redux/slice/walletSlice';

const centralize = {
  display: 'flex',
  margin: 'auto',
};

export default function FormWallet() {
  const [conta, setConta] = useState({
    id: 0,
    code: '',
    moeda: '',
    valor: 0,
    data: '',
    taxa: 0,
    codeBase: '',
    moedaBase: '',
    valorFinal: 524.9,
  });
  const dispatch = useDispatch();

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

  const addConta = () => {
    setConta((currentValues) => (
      {
        ...currentValues,
        id: currentValues.id + 1,
        moeda: 'moeda',
        moedaBase: 'Real Brasileiro',
        taxa: 5,
      }
    ));
    dispatch(addWallet(conta));
    console.log(conta);
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
          <Form.Control name="code" onChange={onChangeValue} />
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
        <Form.Group as={Col} sm={2} className="mb-3" controlId="formGridCoinTaxa">
          <Form.Label>
            Taxa
          </Form.Label>
          <Col>
            <Form.Control placeholder="Taxa" value={10} disabled />
          </Col>
        </Form.Group>
        <Form.Group as={Col} sm={4} className="mb-3" controlId="formGridCoinBase">
          <Form.Label>
            Moeda Base
          </Form.Label>
          <Col>
            <Form.Control placeholder="Moeda Base" value={conta.moedaBase} disabled />
          </Col>
        </Form.Group>

        <Form.Group as={Col} sm={4} className="mb-3" controlId="formGridValueFinal">
          <Form.Label>
            Valor Final
          </Form.Label>
          <Col>
            <Form.Control placeholder="Valor Final" value={conta.valorFinal} disabled />
          </Col>
        </Form.Group>

        <Col className="justify-content-center" style={centralize}>
          <Button type="button" className="m-auto" onClick={addConta}>
            Submit
          </Button>
        </Col>
      </Row>
    </Form>

  );
}
