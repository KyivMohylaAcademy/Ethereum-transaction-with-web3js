const { Web3 } = require('web3');

const web3 = new Web3('https://rpc-mumbai.maticvigil.com');

const privateKey = '*******'
const senderWalletAddress = '0x5C7EFEb6508F13bF0C16954EE83E9fBf4055fde6';
const receiverWallletAddress = '0xC9d59a78FE51D0A084B9C1F3Ca29Ec0Afa2fadc6';

const transactionParams = {
    from: senderWalletAddress,
    to: receiverWallletAddress,
    value: web3.utils.toWei('0.01', 'ether'),
    data: web3.utils.toHex("Ivanichok Oleksii"),
    gas: '21272',
    gasPrice: '5000000000',
};

web3.eth.accounts.signTransaction(transactionParams, privateKey)
    .then(signedTransaction => {
        console.log(signedTransaction)
        web3.eth.sendSignedTransaction(signedTransaction.rawTransaction).then(res => {
            console.log(res)
        }
        ).catch(error => {
            console.log(error);
        });
    })
    .catch(error => {
        console.log(error);
    });
