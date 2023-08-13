//SPDX-License-Identifier: MIT 

pragma solidity ^0.8.9;
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

contract Deployment is Ownable {
    function evaluate() public view returns(bool) {
        if (address(msg.sender) == owner()) {
            return true;
        } else {
            return false;
        }
    }
}