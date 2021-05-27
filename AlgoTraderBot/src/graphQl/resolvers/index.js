const { mergeResolvers } = require("@graphql-tools/merge");
const coinResolver = require("./coin");

const resolvers = [coinResolver];

module.exports = mergeResolvers(resolvers);
