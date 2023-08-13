const hre = require("hardhat");

async function main() {

  const BlockIPNFT = await hre.ethers.getContractFactory("BlockIPNFT");
  const blockIPNFT = await BlockIPNFT.deploy("BlockIPNFT", "BIPNFT", "https://dweb.link/ipfs/bafybeigt7f34llkyc5p7k7jxz5q6qj3tionpukp4ozu2hrpbdggsjdk5ea");

  await blockIPNFT.waitForDeployment();

  console.log(
    `BlockIPNFT contract deployed to ${blockIPNFT.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
