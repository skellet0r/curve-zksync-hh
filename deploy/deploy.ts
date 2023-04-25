import { Wallet, utils } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the Factory contract`);

  // Initialize the wallet.
  const wallet = new Wallet("<WALLET_PK>");

  // Create deployer object and load the artifact of the contract you want to deploy.
  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact("Factory");

  // Estimate contract deployment fee
  const deploymentFee = await deployer.estimateDeployFee(artifact, [wallet.address]);

  // Deploy this contract. The returned object will be of a `Contract` type, similarly to ones in `ethers`.
  // `greeting` is an argument for contract constructor.
  const parsedFee = ethers.utils.formatEther(deploymentFee.toString());
  console.log(`The deployment is estimated to cost ${parsedFee} ETH`);

  const factoryContract = await deployer.deploy(artifact, [wallet.address]);

  //obtain the Constructor Arguments
  console.log("constructor args:" + factoryContract.interface.encodeDeploy([wallet.address]));

  // Show the contract info.
  const contractAddress = factoryContract.address;
  console.log(`${artifact.contractName} was deployed to ${contractAddress}`);
}
