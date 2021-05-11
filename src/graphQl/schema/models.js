const { gql } = require("apollo-server");

const typeDefs = gql`
  type Coin {
    name: String
    description: String
    amount: Int
  }

  type Cat {
    id: ID!
    name: String
  }
`;

module.exports = typeDefs;
