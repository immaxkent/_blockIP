const hre = require("hardhat");
require('dotenv').config();
const fs = require("fs");

async function main(input) {

    /////////////////////////////////////////////////////////////////////////////////
    //A load a gumf file to get the contract address for this network,
    //once we start deploying to multiple networks,
    //then pass it to the BIPNFTFactory contract constructor

    const readInput = input;

    // const returnContractForThisNetwork = (input) => {
    //     if (input == 1) {
    //         return process.env.OP_FACTORY_ADDRESS
    //     }
    //     if (input == 2) {
    //         return process.env.BASE_FACTORY_ADDRESS
    //     }
    //     if (input == 3) {
    //         return process.env.ZORA_FACTORY_ADDRESS
    //     }
    // }

    const deploymentDatas = fs.readFileSync("datas/DeploymentDatas.json", "utf8");
    const deploymentDatasJson = JSON.parse(deploymentDatas);
    deployedAddress = deploymentDatasJson.deployedBlockIPNFTContractAddress;

    // const contractAddress = returnContractForThisNetwork(input)

    /////////////////////////////////////////////////////////////////////////////////
    
    const BlockIPFactory = await hre.ethers.getContractFactory("BlockIPFactory");
    const bipNFTFactory = await BlockIPFactory.deploy(deployedAddress);
    
    await bipNFTFactory.waitForDeployment();
    
    console.log(
     `BIPNFTFactory contract deployed to ${bipNFTFactory.target}`
      );
    }

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
    });