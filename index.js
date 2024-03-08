const { Web3 } = require("web3");
const web3 = new Web3(`https://rpc-mumbai.maticvigil.com/`);

const PRIVATE_KEY = "PRIVATE_KEY";
const SENDER_ADDRESS = "0xDF36A0102dE33707E6B317122387100dC2BDA245";
const RECEIVER_ADDRESS = "0xC9d59a78FE51D0A084B9C1F3Ca29Ec0Afa2fadc6";

const sendTransaction = async () => {
  console.log(`Send transaction from ${SENDER_ADDRESS} to ${RECEIVER_ADDRESS}`);
  const gasPrice = await web3.eth.getGasPrice();
  const nonce = await web3.eth.getTransactionCount(SENDER_ADDRESS);

  const signedTransaction = await web3.eth.accounts.signTransaction(
    {
      from: SENDER_ADDRESS,
      to: RECEIVER_ADDRESS,
      value: web3.utils.toWei("0.01", "ether"),
      data: web3.utils.asciiToHex("Oleksandr Igumnov"),
      gas: 25000,
      gasPrice,
      nonce,
    },
    web3.utils.hexToBytes(PRIVATE_KEY)
  );

  const receipt = await web3.eth.sendSignedTransaction(
    signedTransaction.rawTransaction
  );
  console.log(`Transaction successful with hash: ${receipt.transactionHash}`);
};

sendTransaction()
  .then(() => console.log("The transaction has been successfully sent!"))
  .catch(() => console.log("An error occurred while sending a transaction!"));
