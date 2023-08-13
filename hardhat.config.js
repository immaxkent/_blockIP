require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    optimism_goerli: {
      url: "https://goerli.optimism.io",
      accounts: [process.env.OP_PRIVATE_KEY],
  },
    base_goerli: {
      url: "https://goerli.base.org",
      accounts: [process.env.BASE_PRIVATE_KEY],
      gasPrice: 1000000000,
  },
    zora_testnet: {
      url: "'https://testnet.rpc.zora.energy/'",
      accounts: [process.env.ZORA_PRIVATE_KEY],
  }
}
}
