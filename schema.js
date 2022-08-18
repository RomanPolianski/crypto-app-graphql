const { buildSchema } = require("graphql");

const schema = buildSchema(`
type Coin {
    id: String,
    rank: String,
    symbol: String,
    name: String,
    supply: String,
    maxSupply: String,
    marketCapUsd: String,
    volumeUsd24Hr: String,
    priceUsd: String,
    changePercent24Hr: String,
    vwap24Hr: String,
}
type CoinHist {
    priceUsd: String,
    time: Float
}
type Query {
    getAllCoins(offset: Int): [Coin],
    getTop3Coins: [Coin],
    getCurrencyPriceNow(coinsToFetch: String): [Coin],
    getCoinHistory(id: String): [CoinHist]
}
`);

module.exports = schema;
