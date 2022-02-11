const Web3 = require('web3');

//connection to ropsten test network
const ropstenTestnetLink = 'https://ropsten.infura.io/v3/450b075ed2704d0a9cd002e1b5ef644a';
const web3 = new Web3(ropstenTestnetLink);

//transaction data
const senderAccount = '0x6Ad33d99C342B4682fcd16C8072C1bCfe0e56f81';
const receiverAccount = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C';
const etherAmount = '0.01';
const gasAmount = '100000';
const authorData = 'Victor Pinkevych';

const secretKey = 'This is a very secret key, which no one should see';

async function performTransaction() {
    const transactionObject = {
        from: senderAccount,
        to: receiverAccount,
        value: web3.utils.toHex(web3.utils.toWei(etherAmount, 'ether')),
        gas: web3.utils.toHex(gasAmount),
        data: web3.utils.toHex(authorData),
    };

    const signedTransaction = await web3.eth.accounts.signTransaction(transactionObject, secretKey);
    const transactionResult = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction, function(error, result) {
        if(!error) {
            console.log(result);
        }
        else {
            console.log(error);
        }
    });
};

performTransaction();