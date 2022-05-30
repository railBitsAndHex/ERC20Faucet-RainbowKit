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
} from "../utils/deployUtils";

const deployMockToken: DeployFunction = async () => {
  const { deploy } = deployments;
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
      deploymentHeader("Localhost", chainId, deployer, "MockToken");
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
    case 5:
      deploymentHeader("ETH Goerli Testnet", chainId, deployer, "MockToken");
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
    case 80001:
      deploymentHeader(
        "Polygon Mumbai Testnet",
        chainId,
        deployer,
        "MockToken"
      );
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
    case 421611:
      deploymentHeader("Arbitrum Rinkeby", chainId, deployer, "MockToken");
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
    case 1287:
      deploymentHeader(
        "Moonbase Testnet (Moonbeam Testnet)",
        chainId,
        deployer,
        "MockToken"
      );
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
    case 43113:
      deploymentHeader(
        "Avalanche Fuji Testnet",
        chainId,
        deployer,
        "MockToken"
      );
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
    case 4002:
      deploymentHeader("Fantom Testnet", chainId, deployer, "MockToken");
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
    case 338:
      deploymentHeader("Cronos Testnet", chainId, deployer, "MockToken");
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
    case 200101:
      deploymentHeader("Milkomeda C1 Testnet", chainId, deployer, "MockToken");
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
    case 97:
      deploymentHeader("BNBCHAIN Testnet", chainId, deployer, "MockToken");
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
