const mongoose = require("mongoose");
const Exchange = require("./Exchange").schema;
const { Schema, model } = mongoose;

const Arbitrage = new Schema({
  FirstExchangeId: String,
  SecondExchangeId: String,
  TradingPair: String,
  ArbitrageCoin: [
    {
      FocusedPair: String,
      PriceUSD: Number,
      Volume1h: Number,
    },
  ],
  ProfitableOppertunities: {
    lowEnd: {
      FlashLoanRequired: Number,
      ReasonableGasFee: Number,
      LowestArbitrage: Number,
    },
    Average: {
      FlashLoanRequired: Number,
      ReasonableGasFee: Number,
      AverageArbitrage: Number,
    },
    higEnd: {
      FlashLoanRequired: Number,
      ReasonableGasFee: Number,
      HighestArbitrage: Number,
    },
  },
});

module.exports = model("Arbitrage", Arbitrage);
