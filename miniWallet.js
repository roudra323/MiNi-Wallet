const ethers = require("ethers");
require("dotenv").config();

// Connect to an Ethereum provider (e.g., QUICKNODE)
const provider = new ethers.JsonRpcProvider(
  `https://lively-radial-putty.ethereum-sepolia.discover.quiknode.pro/${process.env.QUICKNODE_APIKEY}/}`
);

// Creates a wallet instance
const accountPRIV = new ethers.Wallet(process.env.PRIVATE_KEY);

const wallet = accountPRIV.connect(provider);
const address = wallet.address;

(async () => {
  try {
    console.log(wallet);

    const balance = await provider.getBalance(address);
    console.log(balance);
  } catch (error) {
    console.error("Error:", error);
  }
})();
// // Set the wallet's provider
// wallet.connect(provider);
