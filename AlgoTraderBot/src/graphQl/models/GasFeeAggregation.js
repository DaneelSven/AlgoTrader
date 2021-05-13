const mongoose = require("mongoose");
const GasFee = require("./GasFee").schema;
const { Schema, model } = mongoose;

// Write script for getting gas fees and store daily
const GasFeeAggregation = new Schema({
  GasFees: [GasFee],
  estimate: {
    averageGasFee: Number,
    Aggregation: {
      Hour_1: Number,
      Hour_12: Number,
      Hour_24: Number,
    },
    asymmetry: [
      {
        Range: Number,
        DatetimeRange: {
          StartTime: { type: Date, default: Date.now },
          EndTime: { type: Date, default: Date.now },
        },
      },
    ],
  },
});

module.exports = model("GasFeeAggregation", GasFeeAggregation);
