const { gql } = require("apollo-server");

const typeDefs = gql`
  type Mutation {
    createCoin(coinInput: CoinInput): Coin
    updateCoin(coinId: ID!, coinInput: CoinInput): Coin
    deleteCoin(coinId: ID!): Coin
  }
`;

module.exports = typeDefs;
