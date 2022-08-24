const main = async () => {

    const network = await ethers.provider.getNetwork();
    console.log("Network name=", network.name);
    console.log("Network chain id=", network.chainId);

    const domainContractFactory = await hre.ethers.getContractFactory('Domains');
    const domainContract = await domainContractFactory.deploy("org");
    await domainContract.deployed();
  
    console.log("Contract deployed to:", domainContract.address);
  
    let txn = await domainContract.register("mytestorganization",  {value: hre.ethers.utils.parseEther('0.1')});
    await txn.wait();
    console.log("Minted domain mytestorganization.org");
  
    txn = await domainContract.setRecord("mytestorganization", "0x57545467674");
    await txn.wait();
    console.log("Set record for mytestorganization.org");
  
    const address = await domainContract.getAddress("mytestorganization");
    console.log("Owner of domain mytestorganization:", address);
  
    const balance = await hre.ethers.provider.getBalance(domainContract.address);
    console.log("Contract balance:", hre.ethers.utils.formatEther(balance));
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