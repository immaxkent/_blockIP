import fs from 'fs';
// import writeContractAddress from './config.js';

const deployedDatasPath = '../../datas/DeploymentDatas.json';

const writeContractAddress = (address) => {
    const read = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
    read[0].deployedContractAddress = address;
    console.log(read);
    fs.writeFileSync('./config.json', JSON.stringify(read));
    // fs.writeFileSync('./config.json', read);
}

function populate() {
    const deployedDatas = JSON.parse(fs.readFileSync(deployedDatasPath, 'utf8'));
    const contractAddress = deployedDatas.deployedBlockIPNFTContractAddress;
    writeContractAddress(contractAddress);
}

populate();