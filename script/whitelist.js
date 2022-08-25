// import { ethers } from "hardhat";
require('dotenv').config();
const ethers = require('ethers');

const GOERLI_API_KEY = process.env.GOERLI_API_KEY;
const provider = new ethers.providers.AlchemyProvider('goerli', GOERLI_API_KEY);

const privateKey = process.env.PRIVATE_KEY
const signer = new ethers.Wallet(privateKey, provider);

const contract = require("../artifacts/contracts/whitelist.sol/Web3Bridges.json");

const abi = contract.abi
const contractAddress = '0xb04FF5C147405e883C47BE596dedA7682934c247'
const wList = new ethers.Contract(contractAddress, abi, signer);
// console.log(JSON.stringify(contract.abi));


const proof = tree.getProof(buf2hex(keccak256(addresses[14])));
const leaf = tree.getProof(buf2hex(keccak256(addresses[14]))).map(x => buf2hex(x.data));


const isValid = async () => {
    let Txn = await wList.isValid(proof, leaf)
    await Txn.wait()
    console.log(`Here is your NFT ⏩ https://goerli.etherscan.io/tx/${Txn.hash}`) 
}

isValid()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});