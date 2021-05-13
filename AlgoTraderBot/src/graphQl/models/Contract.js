const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ContractSchema = new Schema({
    name: String,
    description: String,
    contract_address: String,
    owner_address: String,
    active: Boolean
});

module.exports = model("Contract", ContractSchema);