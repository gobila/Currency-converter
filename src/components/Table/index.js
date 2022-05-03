import React from 'react';
import { Container, Table } from 'react-bootstrap';

export default function DesTable() {
  const dumbData = [
    {
      id: 0,
      valor: 100,
      moedaBase: 'usd',
      moedaConversao: 'brl',
      valorFinal: 500,
    }, {
      id: 1,
      valor: 10,
      moedaBase: 'usd',
      moedaConversao: 'brl',
      valorFinal: 50,
    }, {
      id: 2,
      valor: 300,
      moedaBase: 'usd',
      moedaConversao: 'brl',
      valorFinal: 1500,
    },
  ];
  return (
    <Container>
      <Table responsive="sm" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Moeda Base</th>
            <th>Valor</th>
            <th>Moeda Conversão</th>
            <th>Valor Final</th>
          </tr>
        </thead>
        <tbody>
          {dumbData.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.moedaBase.toUpperCase()}</td>
              <td>{item.valor}</td>
              <td>{item.moedaConversao.toUpperCase()}</td>
              <td>{item.valorFinal}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
