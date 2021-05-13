const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    getCoin(coinId: CoinInput): Coin
    getCoins: [Coin!]!
    
    getContract(contractId: ID!): Contract
    getContracts: [Contract!]!
  }
`;

module.exports = typeDefs;
