require("@nomiclabs/hardhat-waffle");

require("dotenv").config();
module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: process.env.ALCHEMY_MUMBAI_URL,
      accounts: [process.env.WALLET_PRIVATE_KEY],
    }, 
    hardhat: {
      // // If you want to do some forking, uncomment this
      // forking: {
      //   url: MAINNET_RPC_URL
      // }
      chainId: 31337,
      },
      localhost: {
          chainId: 31337,
      },
      }
};
