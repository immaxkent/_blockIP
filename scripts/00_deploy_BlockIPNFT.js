const hre = require("hardhat");
const fs = require("fs");

async function main() {

  const BlockIPNFTFactory = await hre.ethers.getContractFactory("BlockIPNFT");
  const blockIPNFT = await BlockIPNFTFactory.deploy("BlockIPNFT", "BIPNFT", "https://dweb.link/ipfs/bafybeigt7f34llkyc5p7k7jxz5q6qj3tionpukp4ozu2hrpbdggsjdk5ea");
  
  await blockIPNFT.waitForDeployment();

  const deployedAddress = blockIPNFT.target;

  const deploymentDatas = fs.readFileSync("datas/DeploymentDatas.json", "utf8");
  const deploymentDatasJson = JSON.parse(deploymentDatas);
  deploymentDatasJson.deployedBlockIPNFTContractAddress = deployedAddress;
  fs.writeFileSync("datas/DeploymentDatas.json", JSON.stringify(deploymentDatasJson, null, 2));

  console.log(
    `BlockIPNFT contract deployed to ${deployedAddress}`
  );

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
