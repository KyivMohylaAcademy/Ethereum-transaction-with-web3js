const Web3 = require('web3');

const PRIVATE_KEY = 'MY_PRIVATE_KEY';
const SOURCE_ADDRESS = '0xf77134A15186610C2D187DA3e43b0CBa11263172';
const DESTINATION_ADDRESS   = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C';
const web3 = new Web3('https://ropsten.infura.io/v3/f9122d806778498d8967b079955bde3f');

const executeTransaction = async () => {
    const transaction = await web3.eth.accounts.signTransaction({
        from: SOURCE_ADDRESS,
        to: DESTINATION_ADDRESS,
        value: web3.utils.toWei('0.01', 'ether'),
        data: web3.utils.toHex('Daniil Korbut'),
        gas: '100000',
    }, PRIVATE_KEY)

    const receipt = await web3.eth.sendSignedTransaction(
        transaction.rawTransaction
    );
};

executeTransaction();
