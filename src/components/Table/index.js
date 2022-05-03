import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectConta } from '../../services/redux/slice/walletSlice';

export default function DesTable() {
  const wallet = useSelector(selectConta);
  console.log('wallet', wallet);

  return (
    <Container>
      <Table className="mt-3" responsive="sm" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Moeda</th>
            <th>Valor</th>
            <th>Taxa/Cambio</th>
            <th>Moeda Base</th>
            <th>Valor Final</th>
          </tr>
        </thead>
        <tbody>
          {wallet.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>
                {`${item.code.toUpperCase()} - ${item.moeda.toUpperCase()}`}
              </td>
              <td>{item.valor}</td>
              <td>{item.taxa}</td>
              <td>
                {`${item.codeBase.toUpperCase()} - ${item.moedaBase.toUpperCase()}`}
              </td>
              <td>{item.valorFinal}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
