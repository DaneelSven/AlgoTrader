const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    getCoin(coinId: CoinInput): Coin
    getCoins: [Coin!]!
  }
`;

module.exports = typeDefs;
