const ethers = require("ethers");
require("dotenv").config();

// Connect to an Ethereum provider (e.g., QUICKNODE)
const provider = new ethers.providers.JsonRpcProvider(
  `https://lively-radial-putty.ethereum-sepolia.discover.quiknode.pro/${process.env.QUICKNODE_APIKEY}/`
);

// Creates a wallet instance
const accountPRIV = new ethers.Wallet(process.env.PRIVATE_KEY);

const wallet = accountPRIV.connect(provider);

(async () => {
  try {
    console.log(wallet);

    // gets the balance of the wallet
    const balance = await wallet.getBalance();
    const formattedBalance = ethers.utils.formatEther(balance);

    // Prints the readable balance
    console.log(formattedBalance);
  } catch (error) {
    console.error("Error:", error);
  }
})();
// // Set the wallet's provider
// wallet.connect(provider);
