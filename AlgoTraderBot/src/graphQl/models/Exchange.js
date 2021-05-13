const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const TradingPairSchema = require("./TradingPair").schema;

const ExchangeSchema = new Schema({
  ID: String,
  ExchangeName: String,
  TradingPairs: [TradingPairSchema],
});

module.exports = model("Exchange", ExchangeSchema);
