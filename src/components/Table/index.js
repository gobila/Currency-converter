import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function DesTable() {
  const wallet = useSelector((state) => state.WalletReducer);
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
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {wallet.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {item.moeda}
              </td>
              <td>{item.valor}</td>
              <td>{item.taxa}</td>
              <td>
                {item.moedaBase}
              </td>
              <td>{item.valorFinal}</td>
              <td>{item.data}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
