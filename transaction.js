require('dotenv').config();
const Web3 = require('web3').default;
const Tx = require('ethereumjs-tx').Transaction;

const web3 = new Web3('https://rpc-mumbai.maticvigil.com/');

const privateKey = Buffer.from(process.env.PRIVATE_KEY, 'hex');
const fromAddress = process.env.WALLET_ADDRESS;
const toAddress = '0xC9d59a78FE51D0A084B9C1F3Ca29Ec0Afa2fadc6';
const amount = web3.utils.toWei('0.01', 'ether');
const name = 'AnnaKudiakova';
const hexData = web3.utils.asciiToHex(name);

const transaction = {
    from: fromAddress,
    to: toAddress,
    value: amount,
    data: hexData,
    gas: 21221,
    gasPrice: web3.utils.toWei('30', 'gwei')
};

web3.eth.accounts.signTransaction(transaction, privateKey)
    .then(signedTx => web3.eth.sendSignedTransaction(signedTx.rawTransaction))
    .then(receipt => console.log('Transaction receipt:', receipt))
    .catch(err => console.error(err));