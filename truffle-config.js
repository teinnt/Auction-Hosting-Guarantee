const HDWalletProvider = require('@truffle/hdwallet-provider')
require('dotenv').config()

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*',
    },
    // rinkeby: {
    //   provider: () => {
    //     return new HDWalletProvider(process.env.MNEMONIC, process.env.RINKEBY_RPC_URL)
    //   },
    //   network_id: '4',
    //   skipDryRun: true,
    // },
  },
  contracts_directory: './src/ethereum/contracts/',
  contracts_build_directory: './src/ethereum/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      version: '0.8.9',
    },
  },
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY,
  },
  plugins: ['truffle-plugin-verify'],
}
