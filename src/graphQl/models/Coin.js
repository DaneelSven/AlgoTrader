const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const CoinSchema = new Schema({
  name: String,
  description: String,
  amount: Number,
});

module.exports = model("Coin", CoinSchema);
