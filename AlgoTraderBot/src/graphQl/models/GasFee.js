const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// Write script for getting gas fees and store daily
const GasFee = new Schema({
  GasFeeUSD: String,
  GasFeeGwei: Number,
  DateRecorded: { type: Date, default: Date.now },
});

module.exports = model("GasFee", GasFee);
