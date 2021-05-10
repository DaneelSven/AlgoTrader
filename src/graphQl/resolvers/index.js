const {
    mergeResolvers
} = require("@graphql-tools/merge");
const coinResolver = require('./coin')

export const resolvers = [coinResolver];

module.exports = mergeResolvers(resolvers)