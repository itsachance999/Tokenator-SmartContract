import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();
const config: HardhatUserConfig = {
  solidity: "0.8.25",
  networks: {
    "base-sepolia": {
      url: "https://sepolia.base.org",
      accounts: [process.env.BASE_PRIVATE_KEY || ""],
      gasPrice: 1000000000,
    },

    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.RPC_KEY}`,
      // gasPrice: 100000000000,
      accounts: [process.env.SEPOLIA_PRIVATE_KEY || ""],
   allowUnlimitedContractSize:true
    },
    "base-mainnet": {
      url: 'https://mainnet.base.org',
      accounts: [process.env.BASE_PRIVATE_KEY as string],
      gasPrice: 1000000000,
    },
  },
  etherscan: {
    apiKey: {
      "base-mainnet": process.env.BASE_SCAN_API_KEY,
      sepolia: process.env.ETHERSCAN_API_KEY,
    },
    customChains: [
      {
        network: "base-sepolia",
        chainId: 84532,
        urls: {
          apiURL: "https://api-sepolia.basescan.org/api",
          browserURL: "https://sepolia.basescan.org",
        },
      },
      {
        network: "base-mainnet",
        chainId: 8453,
        urls: {
          apiURL: "https://api.basescan.org/api", // Replace with the correct API URL for BaseScan
          browserURL: "https://basescan.org" // Replace with the correct Browser URL for BaseScan
        }
      }
    ],
  },
};

export default config;
