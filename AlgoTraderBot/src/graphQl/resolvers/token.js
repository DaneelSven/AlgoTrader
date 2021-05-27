const Token = require("../models/Token");

const tokenResolver = {
    Query: {
        getToken: async (parent, args) => {
            const {tokenId} = args;
            return await Token.findById(tokenId);
        },
        getTokens: async (parent, args) => {
            return await Token.find();
        },
    },

    Mutation: {
        createToken: async (parent, args) => {
            const {tokenInput} = args;
            const tokenCreate = new Token({
                name: tokenInput.name,
                symbol: tokenInput.symbol,
                address: tokenInput.address
            });
            return await Token.create(tokenCreate);
        },
        updateToken: async (parent, args) => {
            const {tokenId, tokenInput} = args;
            return await Token.findByIdAndUpdate(tokenId, tokenInput, {
                new: true,
            });
        },
        deleteToken: async (parent, args) => {
            const {tokenId} = args;
            return await Token.findByIdAndDelete(tokenId);
        },
    },
};

module.exports = tokenResolver;
