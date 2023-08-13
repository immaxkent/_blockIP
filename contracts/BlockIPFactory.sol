// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import './BlockIPNFT.sol';

contract BlockIPFactory is Ownable {
    BlockIPNFT public blockIPNFT;
    mapping(string => address) public cidToOwner; // mapping of web3Cid to owner

    constructor(address _deployedContract) {
    blockIPNFT = BlockIPNFT(address(_deployedContract));
    }

    function mintBlockIP(address _to, string memory _web3Cid) public onlyOwner {
        blockIPNFT.mint(_to, _web3Cid);
        cidToOwner[_web3Cid] = address(_to);
    }
}

 