import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import ConnectApi from '../services/connect';

const List = createContext([]);
const ListContext = createContext();

// eslint-disable-next-line react/prop-types
function CoinNamesProvider({ children }) {
  const [coinNames, setCoinNames] = useState([]);

  const api = ConnectApi;

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        // const apiResult = Object.keys(await api.getCoin('all'));

        const apiResult = await api.getCoin('all');
        setCoinNames(Object.entries(apiResult).map((i) => i[1]));
        // apiResult.map((i) => setCoinNames(i));
        console.log('coinNames', coinNames);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCoin();
  }, []);

  const contextValue = useMemo(() => ({
    coinNames,
  }), [coinNames]);

  return (
    <ListContext.Provider value={contextValue}>
      {children}
    </ListContext.Provider>
  );
}
export { ListContext, CoinNamesProvider };
export default List;
