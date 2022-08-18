const axios = require("axios");

const resolver = {
  getAllCoins: ({ offset }) => {
    return axios
      .get(`https://api.coincap.io/v2/assets?offset=${offset}&limit=10`)
      .then((res) => res.data.data);
  },
  getTop3Coins: () => {
    return axios
      .get(`https://api.coincap.io/v2/assets?limit=${3}`)
      .then((res) => res.data.data);
  },
  getCurrencyPriceNow: ({ coinsToFetch }) => {
    return axios
      .get(`https://api.coincap.io/v2/assets?ids=${coinsToFetch}`)
      .then((res) => res.data.data);
  },
  getCoinHistory: ({ id }) => {
    return axios
      .get(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`)
      .then((res) => res.data.data);
  },
};

module.exports = resolver;
