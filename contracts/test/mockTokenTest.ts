import { expect } from "chai";
import { ethers, getNamedAccounts } from "hardhat";

describe("MockToken", () => {
  it("Should be able to mint tokens", async () => {
    // const { deployer, secondary } = await getNamedAccounts();
    const [deployer, secondary] = await ethers.getSigners();
    const MockToken = await ethers.getContractFactory("MockToken");
    const mockToken = await MockToken.deploy();
    await mockToken.deployed();

    try {
      const mintTxDeployer = await mockToken.mint();
      await mintTxDeployer.wait();
      try {
        const deployerBalance = await mockToken.balanceOf(deployer.address);
        expect(deployerBalance).to.equal("10000000000000000000000");
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.log("Balance of");
          console.log(err.message);
        }
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }

    const mintTxSecondary = await mockToken.connect(secondary).mint();
    await mintTxSecondary.wait();
    const secondaryBalance = await mockToken.balanceOf(secondary.address);

    expect(secondaryBalance).to.equal("10000000000000000000000");
  });
});
