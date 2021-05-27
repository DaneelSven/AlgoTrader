const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const TokenPairPriceSchema = new Schema({
    token0: String,
    token1: String,
    price: Number,
    price_type: String,
    exchange: String,
    timestamp: Date
});

module.exports = model("TokenPairPrice", TokenPairPriceSchema);