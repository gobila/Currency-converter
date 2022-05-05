import React, {
  createContext, useContext, useMemo,
} from 'react';
import { useRouter } from 'next/router';
import { ConnectGit } from '../services/connect';

const User = createContext([{
  login: '',
  id: 12902689,
  node_id: '',
  avatar_url: 'http://place-hold.it/200x200',
  gravatar_id: '',
  url: 'https://api.github.com/users/gobila',
  html_url: 'https://github.com/gobila',
  name: 'Moises',
  blog: 'moisescp.com',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  twitter_username: 'moisesgobila',
  public_repos: 25,
  followers: 22,
  following: 26,
}]);
const UserContext = createContext([{
  login: 'USER',
  id: 12902689,
  node_id: '',
  avatar_url: 'http://place-hold.it/200x200',
  gravatar_id: '',
  url: 'https://api.github.com/users/gobila',
  html_url: 'https://github.com/gobila',
  name: 'USER',
  blog: 'moisescp.com',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  twitter_username: 'User',
  public_repos: 25,
  followers: 22,
  following: 26,
}]);

// eslint-disable-next-line react/prop-types
function UserProvider({ children }) {
  const [user, setUser] = useContext(UserContext);

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
