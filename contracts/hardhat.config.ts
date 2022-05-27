import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy-ethers";
import "hardhat-deploy";
import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

console.log(process.env.PRIVATE_KEY1);
const privateKey1: string = process.env.PRIVATE_KEY1!;
const privateKey2: string = process.env.PRIVATE_KEY2!;
const privateKey3: string = process.env.PRIVATE_KEY3!;

const accounts: Array<string> = [privateKey1, privateKey2, privateKey3];

// RPC URLS
const GOERLI_URL: string = process.env.ALCHEMY_GOERLI_RPC_URL!;
const MUMBAI_URL: string = process.env.ALCHEMY_MUMBAI_RPC_URL!;
const ARBRINKEBY_URL: string = process.env.ALCHEMY_ARBRINKEBY_RPC_URL!;
const MOONBASE_URL: string = "https://rpc.api.moonbase.moonbeam.network";
const FUJI_URL: string = "https://api.avax-test.network/ext/bc/C/rpc";
const FANTOM_TESTNET_URL: string = "https://rpc.testnet.fantom.network/";
const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
      accounts: accounts.length !== 0 ? accounts : [],
    },
    goerli: {
      chainId: 5,
      accounts: accounts.length !== 0 ? accounts : [],
      url: GOERLI_URL !== undefined ? GOERLI_URL : "",
    },
    mumbai: {
      chainId: 80001,
      accounts: accounts.length !== 0 ? accounts : [],
      url: MUMBAI_URL !== undefined ? MUMBAI_URL : "",
    },
    arbRinkeby: {
      chainId: 421611,
      accounts: accounts.length !== 0 ? accounts : [],
      url: ARBRINKEBY_URL !== undefined ? ARBRINKEBY_URL : "",
      gas: 6000000,
      gasPrice: 200000000,
    },
    moonbase: {
      chainId: 1287,
      accounts: accounts.length !== 0 ? accounts : [],
      url: MOONBASE_URL,
    },
    fuji: {
      chainId: 43113,
      accounts: accounts.length !== 0 ? accounts : [],
      url: FUJI_URL,
    },
    ftmtestnet: {
      chainId: parseInt("0xfa2"),
      accounts: accounts.length !== 0 ? accounts : [],
      url: FANTOM_TESTNET_URL,
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0,
      1: 0,
    },
    secondary: {
      default: 2,
    },
  },
  mocha: {
    timeout: 200000, // 200 seconds max for running tests
  },
};

export default config;
