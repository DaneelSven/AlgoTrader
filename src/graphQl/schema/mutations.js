const { gql } = require("apollo-server");

const typeDefs = gql`
  type Mutation {
    createCoin(coinInput: CoinInput): Coin
    updateCoin(coinId: ID!, coinInput: CoinInput): Coin
    deleteCoin(coinId: ID!): Coin
    
    createContract(contractInput: ContractInput): Contract
    deactivateContract(contractId: ID!): Contract
    activateContract(contractId: ID!): Contract
    updateContract(contractId: ID!, contractInput: ContractInput): Contract
    deleteContract(contractId: ID!): Contract
  }
`;

module.exports = typeDefs;
