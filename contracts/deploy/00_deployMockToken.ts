import { HardhatRuntimeEnvironment } from "hardhat/types";
import {
  DeployFunction,
  DeployOptions,
  DeployResult,
} from "hardhat-deploy/types";

import { getNamedAccounts, deployments, network } from "hardhat";
const deployMockToken: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId: number | undefined = network.config.chainId;

  const mockTokenDeployOptions: DeployOptions = {
    contract: "MockToken",
    from: deployer,
    log: true,
    args: [],
  };
  const deploymentHeader = (
    chainId: number | undefined,
    deployer: string,
    contractName: string
  ) => {
    log(`\n##################################################\n\nDEPLOYMENT\n`);
    log(
      `Current Network: Localhost\nChainId: ${chainId}\nDeployer: ${deployer}`
    );
    log(`Preparing for deployment of ${contractName}.sol...\n`);
  };
  const deploySuccessPrint = (
    deployment: DeployResult,
    contractName: string
  ) => {
    log(`\n${contractName}.sol has been deployed!\n`);
    log(`Tx Hash: ${deployment.transactionHash}`);
    log(`MockToken.sol Contract Address: ${deployment.address}\n\n`);
  };
  switch (chainId) {
    case 31337:
      deploymentHeader(chainId, deployer, "MockToken");
      try {
        const MockTokenDeployment = await deploy(
          "MockToken",
          mockTokenDeployOptions
        );

        deploySuccessPrint(MockTokenDeployment, "MockToken");
        log(`####################################################\n`);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.log(err.message);
          log(`\n####################################################\n`);
        }
      }
      break;

    default:
      break;
  }
};

export default deployMockToken;
