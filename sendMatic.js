const { Web3 } = require("web3");
require("dotenv").config();

const web3 = new Web3("https://rpc-mumbai.maticvigil.com");

const myAddress = "0x1E86092cF12988Dd271cD3dB2291EbE59a31dECc";
const recipientAddress = "0xC9d59a78FE51D0A084B9C1F3Ca29Ec0Afa2fadc6";

const privateKey = process.env.PRIVATE_KEY;
const data = web3.utils.asciiToHex("Iryna Kriachko");

async function send() {
  const tx = {
    from: myAddress,
    to: recipientAddress,
    value: web3.utils.toWei("0.01", "ether"),
    gas: 30000,
    gasPrice: await web3.eth.getGasPrice(),
    data,
  };

  const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);

  const sentTx = web3.eth.sendSignedTransaction(
    signedTx.raw || signedTx.rawTransaction
  );
  sentTx
    .on("transactionHash", function (hash) {
      console.log("Transaction Hash:", hash);
    })
    .on("receipt", function (receipt) {
      console.log("Transaction Receipt:", receipt);
    })
    .on("error", function (error) {
      console.error("Transaction Error:", error);
    });
}

send().catch((error) => {
  console.error("Couldn't send:", error);
});
