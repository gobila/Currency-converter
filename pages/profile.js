import React, { useContext } from 'react';
import {
  Form, Row, Button,
} from 'react-bootstrap';
import { UserContext } from '../src/Context';

export default function FormLogin() {
  const user = useContext(UserContext);

  return (
    <div>
      <p>{user.login}</p>
    </div>
  );
}
