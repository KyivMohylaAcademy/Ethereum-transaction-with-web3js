const {Web3} = require('web3');
const fs = require("fs");

const web3 = new Web3('https://rpc-mumbai.maticvigil.com');

const fromAddress = '0x8716f76901EF7bEDb47333e951f56cCa0a9AD7C1';
const toAddress = '0xC9d59a78FE51D0A084B9C1F3Ca29Ec0Afa2fadc6';


const txParams = {
    from: fromAddress,
    to: toAddress,
    gas: '21224',
    gasPrice: "20000000000",
    value: web3.utils.toWei('0.01', 'ether'),
    data: web3.utils.toHex("Bernatska Olha")
};

web3.eth.accounts.signTransaction(txParams, getKey())
    .then(signedTx => {
        web3.eth.sendSignedTransaction(signedTx.rawTransaction).then(res=> console.log(res.transactionHash)
        ).catch(error => {
            console.error(error);
        });})
    .catch(error => {
        console.error(error);
    });


function getKey() {
    try {
        return fs.readFileSync('key.txt', 'utf8');
    } catch (err) {
        return "";
    }
}