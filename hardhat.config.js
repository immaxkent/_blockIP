require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

module.exports = {
  solidity: "0.8.19",
  networks: {
    "optimism-goerli": {
      url: `https://opt-goerli.g.alchemy.com/v2/${process.env.OP_API_KEY}`,
      accounts: [process.env.OP_PRIVATE_KEY],
      gasLimit: 30000000000,
      saveDeployments: true,
  },
  //   base_goerli: {
  //     url: "https://goerli.base.org",
  //     accounts: [process.env.BASE_PRIVATE_KEY],
  //     gasPrice: 1000000000,
  // },
  //   zora_testnet: {
  //     url: "'https://testnet.rpc.zora.energy/'",
  //     accounts: [process.env.ZORA_PRIVATE_KEY],
  // }
}
}
