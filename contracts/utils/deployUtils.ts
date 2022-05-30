import { DeployResult } from "hardhat-deploy/types";

const deploymentHeader = (
  networkName: string,
  chainId: number | undefined,
  deployer: string,
  contractName: string
) => {
  console.log(
    `\n##################################################\n\nDEPLOYMENT\n`
  );
  console.log(
    `Current Network: ${networkName}\nChainId: ${chainId}\nDeployer: ${deployer}`
  );
  console.log(`Preparing for deployment of ${contractName}.sol...\n`);
};
const deploySuccessPrint = (deployment: DeployResult, contractName: string) => {
  console.log(`\n${contractName}.sol has been deployed!\n`);
  console.log(`Tx Hash: ${deployment.transactionHash}`);
  console.log(`MockToken.sol Contract Address: ${deployment.address}\n\n`);
  console.log(`####################################################\n`);
};
const errDeployPrint = (err: Error) => {
  console.log(err.message);
  console.log(`\n####################################################\n`);
};

export { deploymentHeader, deploySuccessPrint, errDeployPrint };
