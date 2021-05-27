// require("babel-register");
// require("babel-polyfill");
// require("dotenv").config();
// const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
// const privateKeys = process.env.PRIVATEKEYS || "";

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    kovan: {
      provider: function () {
        return new HDWalletProvider(
          privateKeys[0],
          `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`
        );
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 42, // kovan id
    },
  },

  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.0", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true, // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: false,
          runs: 200,
        },
      },
    },
  },
};
