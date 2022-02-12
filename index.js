
const Web3 = require('web3');

const privatKey = '';
const fromAddres ='0xB22F3b40c87EA7365981FD863ebF7b67Cf939D76';
const toAddress = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C';

const web3 = new Web3('https://ropsten.infura.io/v3/c7137f68062e483c852384185be3113b');

const send = async () => {
    const myTransaction = await web3.eth.accounts.signTransaction({
        from: fromAddres,
        to: toAddress,
        value: web3.utils.toWei('0.01', 'ether'),
        data: web3.utils.toHex('Some data'),
        gas: '22000',
    }, privatKey)

    const createReceipt = await web3.eth.sendSignedTransaction(
        myTransaction.rawTransaction
    );
};

send();
