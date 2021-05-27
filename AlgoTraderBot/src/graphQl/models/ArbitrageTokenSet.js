const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ArbitrageTokenSetSchema = new Schema({
    tokenPairs: Array,
    profit_percent: Number,
    timestamp: Date
});

module.exports = model("ArbitrageTokenSet", ArbitrageTokenSetSchema);