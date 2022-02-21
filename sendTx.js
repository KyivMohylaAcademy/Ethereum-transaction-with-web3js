async function main() {
    require('dotenv').config();
    const { API_URL, PRIVATE_KEY } = process.env;
    const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
    const web3 = createAlchemyWeb3(API_URL);
    const myAddress = '0xEc4060E108152dCc1C9FC57B6e6E98986DD30F11' 
   
    const nonce = await web3.eth.getTransactionCount(myAddress, 'latest'); 

    const transaction = {
     'to': '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C', 
     'value':  web3.utils.toHex(web3.utils.toWei('0.01', 'ether')),
     'gas': 300000,
     'nonce': nonce,
     'data': web3.utils.toHex('Maxym Zadorozhnyi')
    };
   
    const signedTx = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY);
    
    web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
    if (!error) {
      console.log(" The hash of your transaction is: ", hash, "\n Check Alchemy's Mempool to view the status of your transaction!");
    } else {
      console.log("❗Something went wrong while submitting your transaction:", error)
    }
   });
}

main();