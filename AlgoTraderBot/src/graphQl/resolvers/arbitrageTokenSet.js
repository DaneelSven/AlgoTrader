const ArbitrageTokenSet = require("../models/ArbitrageSet");

const arbitrageTokenSetResolver = {
    Query: {
        getArbitrageTokenSet: async (parent, args) => {
            const {arbitrageTokenSetId} = args;
            return await ArbitrageTokenSet.findById(arbitrageTokenSetId);
        },
        getArbitrageTokenSets: async (parent, args) => {
            return await ArbitrageTokenSet.find();
        },
    },

    Mutation: {
        createArbitrageTokenSet: async (parent, args) => {
            const {arbitrageTokenSetInput} = args;
            const arbitrageTokenSetCreate = new ArbitrageTokenSet({
                tokenPairs: arbitrageTokenSetInput.tokenPairs,
                profit_percent: arbitrageTokenSetInput.profit_percent,
                timestamp: arbitrageTokenSetInput.timestamp
            });
            return await ArbitrageTokenSet.create(arbitrageTokenSetCreate);
        },
        updateArbitrageTokenSet: async (parent, args) => {
            const {arbitrageTokenSetId, arbitrageTokenSetInput} = args;
            return await ArbitrageTokenSet.findByIdAndUpdate(arbitrageTokenSetId, arbitrageTokenSetInput, {
                new: true,
            });
        },
        deleteArbitrageTokenSet: async (parent, args) => {
            const {arbitrageTokenSetId} = args;
            return await ArbitrageTokenSet.findByIdAndDelete(arbitrageTokenSetId);
        },
    },
};

module.exports = arbitrageTokenSetResolver;
