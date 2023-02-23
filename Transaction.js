const Web3 = require('web3');

const web3 = new Web3('https://rpc-mumbai.maticvigil.com/');

const privateKey = '8d2a965bda176c163a1abe23a9e8ee42ec1464d45c55969eb6c1aac9abe4f47d';

const myAddress = '0xbCcc51aa775555E5A21D42Ba6D7da2C11052E95D';

const toAddress = '0x8e7F03D930F9001A2b1dd0156B465A7A16cAdf08';

const hexData = web3.utils.asciiToHex('Kseniia Sukhovii');

async function sendTransaction(){
    const tx = {
    from: myAddress,
    to: toAddress,
    value: web3.utils.toWei('0.01', 'ether'),
    data: hexData,
    gas: 30000
    };

    web3.eth.accounts.signTransaction(tx, privateKey)
    .then(signedTx => {
    web3.eth.sendSignedTransaction(signedTx.rawTransaction)
    .on('receipt', console.log);
    });
}

sendTransaction();