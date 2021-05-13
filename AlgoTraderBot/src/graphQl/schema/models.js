const { gql } = require("apollo-server");

const typeDefs = gql`
  type Coin {
    name: String
    description: String
    amount: Int
  }

  type Contract {
    name: String
    description: String
    contract_address: String
    owner_address: String
    active: Boolean
  }
`;

module.exports = typeDefs;
