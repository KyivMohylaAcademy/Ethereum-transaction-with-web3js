const Web3 = require('web3');

const web3 = new Web3('https://rpc-mumbai.maticvigil.com/');

const privateKey = 'My_Private_Key';
const myAddress = '0xa47dfA7121d1ea45D22F397D3A5BB7c401B3aa7D';
const destinationAddress = '0x8e7F03D930F9001A2b1dd0156B465A7A16cAdf08';


async function sendTransactionWithData(){
    const transaction = {
    from: myAddress,
    to: destinationAddress,
    value: web3.utils.toWei('0.01','ether'),
    data: web3.utils.asciiToHex('Artem Levchenko'),
    gas:30000
    };

    web3.eth.accounts.signTransaction(transaction, privateKey).then(signedTx => {
    web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt', console.log);
    });
}

sendTransactionWithData();
