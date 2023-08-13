// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

contract BlockIPFactory is ERC721, Ownable {
    constructor() ERC721("BlockIPFactory", "BIPF") {}

    function mint(address to, uint256 tokenId) public onlyOwner returns(address) {
        _mint(to, tokenId);
        
    }
}

 