const { gql } = require("apollo-server");

const typeDefs = gql`
  type Coin {
    name: String
    description: String
    amount: Int
  }
`;

module.exports = typeDefs;
