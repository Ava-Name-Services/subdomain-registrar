const Web3 = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");

// const provider = new Web3.providers.HttpProvider(
//   'https://api.avax-test.network/ext/bc/C/rpc'
// );

// Account credentials from which our contract will be deployed
const mnemonic = "guard crowd mercy margin task slide clog salute hockey arrive giant tortoise glare arrest decide position bottom quantum shoulder indicate moment praise cry try";

// API key of your Datahub account for Avalanche Fuji test network
const APIKEY = "4444362f2179fee770454344ff158099";

module.exports = {
  networks: {
    fuji: {
      provider: function() {
            return new HDWalletProvider({mnemonic, providerOrUrl: "https://api.avax-test.network/ext/bc/C/rpc"})
      },
      network_id: "*",
      gas: 8000000,
      gasPrice: 260000000000,
      skipDryRun: true
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}