import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction, DeployOptions } from "hardhat-deploy/types";

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
  switch (chainId) {
    case 31337:
      log(
        `\n##################################################\n\nDEPLOYMENT\n`
      );
      log(
        `Current Network: Localhost\nChainId: ${chainId}\nDeployer: ${deployer}`
      );
      log(`Preparing for deployment of MockToken.sol...\n`);

      try {
        const MockTokenDeployment = await deploy(
          "MockToken",
          mockTokenDeployOptions
        );

        log("\nMockToken contract has been deployed!\n");
        log(`Tx Hash: ${MockTokenDeployment.transactionHash}`);
        log(
          `MockToken.sol Contract Address: ${MockTokenDeployment.address}\n\n`
        );
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
