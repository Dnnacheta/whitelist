async function main() {
  // Grab the contract factory 
  const NFT = await ethers.getContractFactory("Web3Bridges"); // W3bNFT

  console.log("Deployment started🔹🔹🔹, returning a promise that resolves to a contract object 🤞"); 

  const root = '0x8890fdaaf3cdfcde0537857464fe9faac18a6d185dc1992ca2f2b809057def57';
  const wNFT = await NFT.deploy(root);  // 0xb04FF5C147405e883C47BE596dedA7682934c247
  console.log("🎉Contract deployed to address🎉", wNFT.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });
