const urlBase = 'https://economia.awesomeapi.com.br/json/';

const ConnectApi = {
  async getCoin(coin) {
    const response = await fetch(`${urlBase}${coin}`)
      .then((data) => data.json())
      .then((res) => res);
    return response;
  },
};

export default ConnectApi;
