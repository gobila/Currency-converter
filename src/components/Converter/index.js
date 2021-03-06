import React, { useEffect, useState } from 'react';
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
}
