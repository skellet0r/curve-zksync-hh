import { Wallet } from "zksync-web3";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

export default async function (hre: HardhatRuntimeEnvironment) {
  const wallet = new Wallet("<insert pk here>");
  const deployer = new Deployer(hre, wallet);

  let artifact = await deployer.loadArtifact("ChildGaugeFactory");
  let factory = await deployer.deploy(artifact, ["0x0000000000000000000000000000000000000000", "0x5945932099f124194452a4c62d34bB37f16183B2", "0xc936fa42D98475243BD573c9d232dFe3a1E0A280"]);
  console.log(`Factory: ${factory.address}`);

  artifact = await deployer.loadArtifact("ChildGauge");
  let impl = await deployer.deploy(artifact, ["0x5945932099f124194452a4c62d34bB37f16183B2", factory.address]);
  console.log(`Implementation: ${impl.address}`);
  
}
