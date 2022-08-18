const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const schema = require("./schema");
const baseURL = "https://api.coincap.io/v2/";
const axios = require("axios");

const app = express();
app.use(cors());

const root = {
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

app.use("/graphql", graphqlHTTP({ graphiql: true, schema, rootValue: root }));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
