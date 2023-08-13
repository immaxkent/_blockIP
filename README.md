# Blockchain Intellectual Property

This is an open source project enabling any authoritarian body to issue IP, from patents through trademarks, via the blockchain.

Specifically, this project allows you as the issuer to create NFT style 'receipts', upload client documentation indellably onto the IPFS filing system, and create indellable attestations recording indefinitely the issuance of the IP to a given user's Ethereum wallet. 

Via this application's interface, you are able to elect the chain of custody for the IP post evaluation of the IP's validity.

## The Why

Intellectual property resembles unique, singular packets of precise data, that are often subject to dispute. 

The requirement for continuity, trsansparency and immutability in the issuance of IP is therefore paramount. In this exact image, the blockchain therefore presents a perfect architectural structure for supporting the issuance and maintenance of IP and its records.

BlockIP presents just this solution and architecture.

Let's get up and running...

## How To

```bash
# first, we install the dependancies in the root directory.
npm install
# then, we install the dependancies is the client folder
cd client
npm install

# then, we need API keys and private keys to store in a .env file. 
# so, create a .env file in the root directory of the project, and fill out the values required (marked something like <--VALUES-->).
#You'll need an alchemy account, a web3.Storage account and private keys for the network(s) of your choice as obtained from MetaMask.

# then, we deploy the contracts by running the SCRIPT RUNNER.
# remember to choose your network here. This application has been configured to be deployed on all of the following networks:

``` bash

``` 
### OPTIMISM
### BASE
### ZORA 
``` bash

# ...networks. So, take your pick, copying the name of the network from the hardhat.config.js file, and run the script runner as follows:

npx hardhat run scripts/X_deploy.js --network <NETWORK CHOICE>

# then, we populate the client (front end) config.js file with the datas held in ./datas
cd client
cd utils
npm run populate.js

# now, with our contracts deployed, and the keys in place, we are ready to run the development server and get issuing IP!

cd ..
# make sure you're in the 'client' directory
npm run dev

```

## The Issuance Process

1. A **PDF file** of the completed and verified Intellectual Property is uploaded to **IPFS via web3.Storage**
2. The CID of this file is used in minting an **NFT** (as an indellable receipt) *in* your IP collection *to* the recipient of the IP
3. An **attestation** is produced recording the issuance of the IP to the recipient
4. These datas are stored locally, and are viewable under the **'Explore'** tab of the application

## NOTA BENE

- This architecture is configured to run on testnets. If you wish to run it on mainnet, you will need to change the network in the hardhat.config.js file, and update your private keys in .env

- This architecture uses a URL of an image sotred on the IPFS as the 'image' attribute of the NFT collection. This can be found in the deployment script *00_deploy_BlockIPNFT.js* and can be changed to any image you wish to use. I would imagine your company logo will serve well.


