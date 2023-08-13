const hre = require("hardhat");
require(dotenv).config();

async function main(input) {

    const returnContractForThisNetwork = (input) => {
        if (input == 1) {
            return process.env.OP_FACTORY_ADDRESS
        }
        if (input == 2) {
            return process.env.BASE_FACTORY_ADDRESS
        }
        if (input == 3) {
            return process.env.ZORA_FACTORY_ADDRESS
        }
    }

    const contractAddress = returnContractForThisNetwork(input)
    
    const BIPNFTFactory = await hre.ethers.getContractFactory("BIPNFTFactory");
    const bipNFTFactory = await BIPNFTFactory.deploy(contractAddress);
    
    await bipNFTFactory.waitForDeployment();
    
    console.log(
     `BIPNFTFactory contract deployed to ${bipNFTFactory.address}`
      );
    }

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
    });