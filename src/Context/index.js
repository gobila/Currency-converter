import React, {
  createContext, useMemo, useState,
} from 'react';
import { useRouter } from 'next/router';
import { ConnectGit } from '../services/connect';

const User = createContext([]);
const UserContext = createContext();

// eslint-disable-next-line react/prop-types
function UserProvider({ children }) {
  const [user, setUser] = useState();

  const router = useRouter();
  const api = ConnectGit;

  const login = async (userName) => {
    await api.getUser(userName).then((res) => {
      setUser(res);
      router.push('/profile');
    });
  };

  const contextValue = useMemo(() => ({
    login,
    user,
  }), [user]);

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
}
export { UserContext, UserProvider };
export default User;
