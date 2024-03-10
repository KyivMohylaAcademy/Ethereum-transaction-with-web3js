const Web3 = require('web3').Web3;

const providerUrl = 'https://polygon-mumbai-pokt.nodies.app';

const web3 = new Web3(providerUrl);

const accountAddress = '0x4A386558101320562317BD292867298838832af7';
const privateKey = 'very private key';

const account = web3.eth.accounts.privateKeyToAccount(privateKey);
const recipientAddress = '0xC9d59a78FE51D0A084B9C1F3Ca29Ec0Afa2fadc6';


async function sendTransaction() {
    // Define transaction object
    const txObject = {
        to: recipientAddress,
        value: web3.utils.toWei('0.1', 'ether'),
        data: web3.utils.asciiToHex("Oleksandr Prokhorov"),
        gas: 21304, // Gas limit
        gasPrice: await web3.eth.getGasPrice(),
        nonce: await web3.eth.getTransactionCount(account.address) // Nonce
    };

    // Sign the transaction
    const signedTx = await web3.eth.accounts.signTransaction(txObject, privateKey);

    // Send the signed transaction
    web3.eth.sendSignedTransaction(signedTx.rawTransaction)
        .on('transactionHash', function(hash){
            console.log("Transaction hash:", hash);
        })
        .on('receipt', function(receipt){
            console.log("Transaction receipt:", receipt);
        })
        .on('error', function(error){
            console.error("Transaction error:", error);
        });
}

sendTransaction().catch(error => {
    console.error("Error sending transaction:", error);
});