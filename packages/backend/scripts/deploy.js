const { ethers } = require('hardhat'); 
const fs = require('fs');
const path = require('path');


const ADDRESSES = "../../frontend/constants/contractAddresses.json"
const ADDRESSES_PATH = path.join(__dirname, ADDRESSES);

const ABI = "../../frontend/constants/abi.json"
const ABI_PATH = path.resolve(__dirname, ABI);

const main = async () => {

    const contract = await ethers.getContractFactory("Domains");
    const network = await ethers.provider.getNetwork();
    console.log("Network name=", network.name);
    console.log("Network chain id=", network.chainId);

    // ABI
    fs.writeFileSync(ABI_PATH, contract.interface.format(ethers.utils.FormatTypes.json) )


    const domainNumber = 100;
    const deployedContract =  await contract.deploy(domainNumber);

   // 3. Waiting for the deployment to resolve
   await deployedContract.deployed();

   console.log("Deployed at", deployedContract.address);


  addresses = {}
  addresses[network.chainId] = [deployedContract.address];

  // polygon testnet chainid

  // 80001

   fs.writeFileSync(ADDRESSES_PATH, JSON.stringify(addresses));

  }
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();