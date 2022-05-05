import React, { useContext } from 'react';
import { UserContext } from '../src/Context';

export default function FormLogin() {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <p>{user.login}</p>
    </div>
  );
}
