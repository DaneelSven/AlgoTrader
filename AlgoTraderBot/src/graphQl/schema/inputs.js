const { gql } = require("apollo-server");

const typeDefs = gql`
  input CoinInput {
    name: String
    description: String
    amount: Int
  }
  
  input ContractInput {
    name: String
    description: String
    contract_address: String
    owner_address: String
    active: Boolean
  }
`;

module.exports = typeDefs;
