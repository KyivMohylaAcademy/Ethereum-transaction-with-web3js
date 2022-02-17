const Web3 = require('web3');
require('dotenv').config();

const { API_URL, PRIVATE_KEY } = process.env;

const ADDRESS_FROM = '0x6bCfDae93541C25bd6BF06E6c77e8222EccFC115';
const ADDRESS_TO = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C';

const web3 = new Web3(API_URL);

const sendTransaction = async() => {
    const transaction = await web3.eth.accounts.signTransaction({
        from: ADDRESS_FROM,
        to: ADDRESS_TO,
        value:  web3.utils.toWei('0.01', 'ether'),
        data: web3.utils.toHex('Tsehelnyk Bohdan'),
        gas: 30000,
    }, PRIVATE_KEY);

    const check = await web3.eth.sendSignedTransaction(
        transaction.rawTransaction
    );
}

sendTransaction();