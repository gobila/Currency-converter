import React, { useEffect, useState } from 'react';
import {
  Form, Col, Row, Button,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addWallet } from '../../services/redux/slice/walletSlice';

const centralize = {
  display: 'flex',
  margin: 'auto',
};

export default function FormWallet() {
  const coinsStore = useSelector((state) => state.CoinReducer);
  const [coins, setCoins] = useState([]);
  const [taxa, setTaxa] = useState();
  const [resultado, setResultado] = useState(0);
  const dispatch = useDispatch();
  const date = new Date();

  const [conta, setConta] = useState({
    id: 0,
    moeda: 'USD',
    valor: 0,
    data: date.toLocaleDateString(),
    taxa,
    moedaBase: '',
    valorFinal: resultado,
  });

  useEffect(() => {
    setCoins(coinsStore);
  }, [coinsStore]);

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
    if (target === 'BRLT') {
      const taxaTurismo = moedaturismo.map((i) => i.bid);
      return setTaxa(taxaTurismo);
    }
    return setTaxa(taxas);
  };
  const onChangeData = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setConta((currentValues) => (
      {
        ...currentValues,
        [name]: value
      }
    ));
  };
  const onChangeMoeda = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setConta((currentValues) => (
      {
        ...currentValues,
        [name]: value,
      }
    ));
  };

  const onChangeValue = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setResultado(value * taxa);

    setConta((currentValues) => (
      {
        ...currentValues,
        [name]: value,
        taxa,
        moedaBase: 'BRL',
        valorFinal: value * taxa,
      }
    ));
  };

  useEffect(() => {
    const coin = { ...coins[0] };
    setTaxa(coin.bid);
  }, [coins]);

  const addConta = () => {
    setConta((currentValues) => (
      {
        ...currentValues,
        id: currentValues.id + 1,
        moedaBase: 'BRL',
      }
    ));
    dispatch(addWallet(conta));
  };
  return (
    <div>
      <Form className="col-10">
        <Row className="align-items-center">
          <Form.Group as={Col} sm={4} className="mb-3" controlId="formGridCoin">
            <Form.Label> Moeda </Form.Label>
            <Form.Select
              id="moeda1"
              name="moeda"
              onClick={(e) => {
                const { value } = e.target;
                getTaxa(value);
              }}
              onChange={onChangeMoeda}
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
                  <option value={coin.code} name={`${coin.code} - ${coin.name.split('/', 1)}`} key={coin.code}>
                    {`
                      ${coin.code} - ${coin.name.split('/', 1)}
                    `}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} sm={4} className="mb-3" controlId="formGridValue">
            <Form.Label> Valor </Form.Label>
            <Form.Control type="number" name="valor" onChange={onChangeValue} />
          </Form.Group>

          <Form.Group as={Col} sm={4} className="mb-3" controlId="formGridDate">
            <Form.Label> Data </Form.Label>
            <Form.Control type="date" name="data" onChange={onChangeData} />
          </Form.Group>
        </Row>

        <Row className="align-items-center">
          <Form.Group as={Col} sm={2} className="mb-3" controlId="formGridCoinTaxa">
            <Form.Label>
              Taxa
            </Form.Label>
            <Col>
              <Form.Control placeholder="Taxa" value={taxa} disabled />
            </Col>
          </Form.Group>
          <Form.Group as={Col} sm={4} className="mb-3" controlId="formGridCoinBase">
            <Form.Label>
              Moeda Base
            </Form.Label>
            <Col>
              <Form.Control placeholder="Moeda Base" value="BRL - Real Brasileiro" disabled />
            </Col>
          </Form.Group>

          <Form.Group as={Col} sm={4} className="mb-3" controlId="formGridValueFinal">
            <Form.Label>
              Valor Final
            </Form.Label>
            <Col>
              <Form.Control placeholder="Valor Final" value={resultado} disabled />
            </Col>
          </Form.Group>

          <Col className="justify-content-center" style={centralize}>
            <Button type="button" className="m-auto" onClick={addConta}>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
