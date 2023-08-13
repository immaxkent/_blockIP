# Aims of the Contracts File

Here exists a set of contracts that allow functionality of our app. 

1. Deployment.sol
...whereby the owner of the contract can deploy the contract to the blockchain, and is recorded as the sole controller of the application therein.

2. BlockIPFactory.sol
...wherein the owner is capable of issuing an NFT to a given user, attaching the otherwise generated CID (used as the item's URI) to the NFT's metadata. 

3. Attestation.sol
...where, once the datas are uploaded to web3.Storage and the NFT is successfully minted, the owner attests to the successful issuance of this IP to the user's wallet address.