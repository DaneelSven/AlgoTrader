const Coin = require("../models/Coin");

const coinResolver = {
  Query: {
    getCoin: async (parent, args) => {
      try {
        const { coinId } = args;
        return await Coin.findById(coinId);
      } catch (error) {
        throw new Error(error);
      }
    },
    getCoins: async (parent, args) => {
      try {
        return await Coin.find();
      } catch (error) {
        throw new Error(error);
      }
    },
  },

  Mutation: {
    createCoin: async (parent, args) => {
      try {
        const { coinInput } = args;
        const coinCreate = new Coin({
          name: coinInput.name,
          description: coinInput.description,
          amount: coinInput.amount,
        });
        return await Coin.create(coinCreate);
      } catch (error) {
        throw new Error(error);
      }
    },

    updateCoin: async (parent, args) => {
      try {
        const { coinId, coinInput } = args;
        return await Coin.findByIdAndUpdate(coinId, coinInput, {
          new: true,
        });
      } catch (error) {
        throw new Error(error);
      }
    },
    deleteCoin: async (parent, args) => {
      try {
        const { coinId } = args;
        return await Coin.findByIdAndDelete(coinId);
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

module.exports = coinResolver;
