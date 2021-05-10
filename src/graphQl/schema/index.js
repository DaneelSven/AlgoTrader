const { mergeTypeDefs } = require("@graphql-tools/merge");
const models = require("./models");
const inputs = require("./inputs");
const queries = require("./queries");
const mutations = require("./mutations");

const types = [models, inputs, queries, mutations];

module.exports = mergeTypeDefs(types);
