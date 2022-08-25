// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract Web3Bridges is ERC721, Ownable {
    using Counters for Counters.Counter;
    bytes32 public root;
    
    Counters.Counter private _tokenCount;
    
    constructor(bytes32 _root) ERC721("Web3Bridges", "W3B") {
        root = _root;
    }
    
    function safeMint(
        address to,
        bytes32[] memory proof
        // bytes32 leaf
    ) public onlyOwner {
        require(isValid(proof, keccak256(abi.encodePacked(msg.sender))), 
            "Sorry You're Not Whitelisted");
        uint tokenId = _tokenCount.current();
        _tokenCount.increment();
        _safeMint(to, tokenId);
    }
    
    function isValid(
        bytes32[] memory proof,
        bytes32 leaf
    ) public view returns (bool) {
        return MerkleProof.verify(proof, root, leaf);
    }
}