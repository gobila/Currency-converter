import React, { useContext, useEffect, useState } from 'react';
import {
  Form, Col, Row,
} from 'react-bootstrap';
import { ListContext } from '../../Context';
import ConnectApi from '../../services/connect';

export default function Converter() {
  const [valor, setValor] = useState(0);
  const [taxa, setTaxa] = useState(0);
  const [moeda, setMoeda] = useState({
    moeda1: 'USD',
    moeda2: 'BRL',
  });
  const [resultado, setResultado] = useState(0);

  const api = ConnectApi;

  const { coinNames } = useContext(ListContext);
  console.log(coinNames);

  async function getTaxa() {
    try {
      const bidin = await api.getCoin(`${moeda.moeda1}-${moeda.moeda2}`);
      setTaxa(bidin[0].bid);
    } catch (error) {
      throw console.error('Conversao nao disponivel');
    }
  }
  const onChangeValue = (e) => {
    const newValue = e.target.value;
    setValor(newValue);
    setResultado(newValue * taxa);
  };
  const conversao = (e) => {
    const result = e.target.value;
    setResultado(result);
    const desconveter = result / taxa;
    setValor(desconveter);
  };

  const moedas = (e) => {
    const m1 = e.target.value;
    setMoeda({
      moeda1: m1,
      moeda2: 'BRL',
    });
  };
  useEffect(() => {
    getTaxa();
  }, [moeda]);

  useEffect(() => {
    setResultado(valor * taxa);
  }, [taxa]);

  return (
    <Form>
      <Row>
        <Col>
          <Form.Select aria-label="moeda1" id="moeda1" onChange={moedas}>
            {coinNames.map((coin) => {
              if (coin.codein === 'BRLT') {
                return (<option value="USDT" key={coin.codein}>USDT</option>);
              }
              return (<option value={coin.code} key={coin.code}>{coin.code}</option>);
            })}
            {/* <option value="BRL">BRL</option> */}
          </Form.Select>
        </Col>
        <Col>
          <Form.Control type="number" value={valor} onChange={onChangeValue} />
        </Col>
        <Col xs="1">
          <h2>=</h2>
        </Col>
        <Col>
          <Form.Control type="number" value={resultado} onChange={conversao} />
        </Col>
      </Row>

    </Form>
  );
}
