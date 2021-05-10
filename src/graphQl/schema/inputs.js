const { gql } = require("apollo-server");

const typeDefs = gql`
  input CoinInput {
    name: String
    description: String
    amount: Int
  }
`;

module.exports = typeDefs;
