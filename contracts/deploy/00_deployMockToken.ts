import { HardhatRuntimeEnvironment } from "hardhat/types";
import {
  DeployFunction,
  DeployOptions,
  DeployResult,
} from "hardhat-deploy/types";

import { getNamedAccounts, deployments, network } from "hardhat";
import {
  deploymentHeader,
  deploySuccessPrint,
  errDeployPrint,
} from "../helper/deployHelper";

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

  switch (chainId) {
    case 31337:
      deploymentHeader(chainId, deployer, "MockToken");
      try {
        const MockTokenDeployment = await deploy(
          "MockToken",
          mockTokenDeployOptions
        );
        deploySuccessPrint(MockTokenDeployment, "MockToken");
      } catch (err: unknown) {
        if (err instanceof Error) {
          errDeployPrint(err);
        }
      }
      break;

    default:
      break;
  }
};

export default deployMockToken;
