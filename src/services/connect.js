const urlBase = 'https://economia.awesomeapi.com.br/json/';
const urlGit = 'https://api.github.com/users/';

const ConnectApi = {
  async getCoin(coin) {
    const response = await fetch(`${urlBase}${coin}`)
      .then((data) => data.json())
      .then((res) => res);
    return response;
  },
};

export const ConnectGit = {
  async getUser(coin) {
    const response = await fetch(`${urlGit}${coin}`)
      .then((data) => data.json())
      .then((res) => res);
    return response;
  },
};

export default ConnectApi;
