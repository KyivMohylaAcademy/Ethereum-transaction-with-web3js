const { Web3 } = require('web3');
require('dotenv').config();

const web3 = new Web3('https://rpc-mumbai.maticvigil.com');
const privateKey = process.env.PRIVATE_KEY;

const sendTransaction = async () => {
    const from = '0x409eb3d0E0453D132cB3D97Ef05cE9ab9dB137A3';
    const to = '0xC9d59a78FE51D0A084B9C1F3Ca29Ec0Afa2fadc6';
    const amountToSend = web3.utils.toWei('0.01', 'ether');
    const data = web3.utils.toHex('Illia Shevchyk');
    const createTransaction = await web3.eth.accounts.signTransaction({
        from,
        to,
        value: amountToSend,
        gas: '21224',
        gasPrice: await web3.eth.getGasPrice(),
        data,
    }, privateKey);

    const createReceipt = await web3.eth.sendSignedTransaction(createTransaction.rawTransaction);
    console.log(`Transaction hash: ${createReceipt.transactionHash}`);
};

sendTransaction().catch(err => console.log(err))