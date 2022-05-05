import React, { useEffect, useState } from 'react';
import {
  Form, Col, Row, Container,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function FormConverter() {
  const [valor, setValor] = useState(0);
  const coinsStore = useSelector((state) => state.CoinReducer);
  const [coins, setCoins] = useState([]);
  const [moeda, setMoeda] = useState();
  const [taxa, setTaxa] = useState();
  const [resultado, setResultado] = useState(0);

  useEffect(() => {
    setCoins(coinsStore);
    const moedaNome = coinsStore.map((i) => i.name);
    setMoeda(moedaNome[0]);
  }, [coinsStore]);

  useEffect(() => {
    const coin = { ...coins[0] };
    const moedaNome = coin.name;
    setMoeda(moedaNome);
    setTaxa(coin.bid);
  }, [coins]);

  const getTaxa = (target) => {
    const moedaTaxa = coins.filter((i) => i.code === target && i.codein !== 'BRLT').map((i) => {
      const result = { bid: i.bid, name: i.name };
      return result;
    });
    const moedaturismo = coins.filter((i) => i.codein === target).map((i) => {
      const result = { bid: i.bid, name: i.name };
      return result;
    });
    const taxas = moedaTaxa.map((i) => i.bid);
    const moedaNome = moedaTaxa.map((i) => i.name);
    if (target === 'BRLT') {
      const taxaTurismo = moedaturismo.map((i) => i.bid);
      const moedaNomeTurismo = moedaturismo.map((i) => i.name);
      setMoeda(moedaNomeTurismo);
      return setTaxa(taxaTurismo);
    }
    setMoeda(moedaNome);
    return setTaxa(taxas);
  };

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

  return (
    <Container>
      <h2 className="mb-3 text-center">{moeda}</h2>
      <Form className="col-10 m-auto align-items-center">
        <Row className="justify-content-center mb-3">
          <Col sm={11} className="mb-3">
            <Form.Select
              id="moeda1"
              onClick={(e) => {
                const { value } = e.target;
                getTaxa(value);
              }}
            >
              {coins.map((coin) => {
                if (coin.codein === 'BRLT') {
                  return (
                    <option value="BRLT" key={coin.codein}>
                      BRLT - Dólar Americano Turismo
                    </option>
                  );
                }
                return (
                  <option value={coin.code} key={coin.code}>
                    {`
                      ${coin.code} - ${coin.name.split('/', 1)}
                    `}
                  </option>
                );
              })}
            </Form.Select>
          </Col>
        </Row>
        <Row className="justify-content-center mb-3">
          <Col sm={5}>
            <Form.Control type="number" value={valor} onChange={onChangeValue} />
          </Col>
          <Col xs="1">
            <h4>=</h4>
          </Col>
          <Col sm={5}>
            <Form.Control type="number" value={resultado} onChange={conversao} />
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
