const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const TradingPairSchema = new Schema({
  FocusedCoin: String,
  CoinPairInfo: [
    {
      BasePair: String,
      CounterPair: String,
      ExchangeRate: String,
      PriceUSD: Number,
      Volume_24H: Number,
      DateTime: String,
      averageGasFee24H: Number,
    },
  ],
});

module.exports = model("TradingPair", TradingPairSchema);
