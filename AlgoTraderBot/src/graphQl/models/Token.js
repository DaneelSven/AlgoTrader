const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const TokenSchema = new Schema({
    name: String,
    symbol: String,
    address: String
});

module.exports = model("Token", TokenSchema);