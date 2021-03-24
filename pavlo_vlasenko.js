async function main() {
    const API_URL = "https://ropsten.infura.io/v3/41649ea82b434156a9b1b580199fd7f9";
    const PRIVATE_KEY = "<mykey>";
    const Web3 = require("web3");
    const web3 = new Web3(API_URL);
    const myAddress = '0x0676FE72B2bbE540cBD8e6cB019A7D92B9185007' //TODO: replace this address with your own public address
   
    const nonce = await web3.eth.getTransactionCount(myAddress, 'latest'); // nonce starts counting from 0

    const transaction = {
     'to': '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C', // faucet address to return eth
     'value': 1000000000000000000*0.1, // 1 ETH
     'gas': 30000, 
     'nonce': nonce,
     'data': web3.utils.toHex("Transaction from Pavlo Vlasenko"),
     // optional data field to send message or execute smart contract
    };
   
    const signedTx = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY);
    
    web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
    if (!error) {
      console.log("🎉 The hash of your transaction is: ", hash, "\n Check Alchemy's Mempool to view the status of your transaction!");
    } else {
      console.log("❗Something went wrong while submitting your transaction:", error)
    }
   });
}

main();
