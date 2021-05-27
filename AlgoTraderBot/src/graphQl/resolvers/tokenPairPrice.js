const TokenPairPrice = require("../models/TokenPairPrice");

const tokenPairPriceResolver = {
    Query: {
        getTokenPairPrice: async (parent, args) => {
            const {tokenPairPriceId} = args;
            return await TokenPairPrice.findById(tokenPairPriceId);
        },
        getTokenPairPrices: async (parent, args) => {
            return await TokenPairPrice.find();
        },
    },

    Mutation: {
        createTokenPairPrice: async (parent, args) => {
            const {tokenPairPriceInput} = args;
            const tokenPairPriceCreate = new TokenPairPrice({
                token0: tokenPairPriceInput.token0,
                token1: tokenPairPriceInput.token1,
                price: tokenPairPriceInput.price,
                price_type: tokenPairPriceInput.price_type,
                exchange: tokenPairPriceInput.exchange,
                timestamp: tokenPairPriceInput.timestamp
            });
            return await TokenPairPrice.create(tokenPairPriceCreate);
        },
        updateTokenPairPrice: async (parent, args) => {
            const {tokenPairPriceId, tokenPairPriceInput} = args;
            return await TokenPairPrice.findByIdAndUpdate(tokenPairPriceId, tokenPairPriceInput, {
                new: true,
            });
        },
        deleteTokenPairPrice: async (parent, args) => {
            const {tokenPairPriceId} = args;
            return await TokenPairPrice.findByIdAndDelete(tokenPairPriceId);
        },
    },
};

module.exports = tokenPairPriceResolver;
