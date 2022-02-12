const Web3 = require('web3');
const aFrom ='0xa858B202468306FCFEa001144F47F18B11506864';
const aTo = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C';
const url_ropsten = 'https://ropsten.infura.io/v3/edfeedce11e44523bbc398d9268df991'

const web3 = new Web3(url_ropsten);



const main = async () => {
    const createTransaction = await web3.eth.accounts.signTransaction({
        from: aFrom,
        to: aTo,
        value: web3.utils.toWei('0.01', 'ether'),
        data: web3.utils.toHex('Vladyslav Belkovets'),
        gas: '27000',
    }, '_')

    const createReceipt = await web3.eth.sendSignedTransaction(
        createTransaction.rawTransaction
    );
};

main();