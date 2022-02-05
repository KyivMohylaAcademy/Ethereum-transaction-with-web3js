var Tx = require("ethereumjs-tx").Transaction;

const Web3 = require('web3');
const ropstenTestnet = 'https://ropsten.infura.io/v3/e7bd360034f34a528694e7ff0d9968ae';

const web3 = new Web3(ropstenTestnet);

const senderAcc = '0x48146E8400DC9aA3eFAcD4ceb294Fead8cCE86c4';
const receiverAcc = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C';

const privateKey = Buffer.from('-', 'hex');

web3.eth.getTransactionCount(senderAcc, (error, txCount) => {
    const txDTO = {
        nonce: web3.utils.toHex(txCount),
        from: senderAcc,
        to: receiverAcc,
        value: web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
        gasLimit: web3.utils.toHex(100000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
        data: web3.utils.toHex('Oleksii Bereznikov')
    };
    const tx = new Tx(txDTO, { chain: 'ropsten' });
    tx.sign(privateKey);

    const serializedTransaction = tx.serialize();
    const txHEX = '0x' + serializedTransaction.toString('hex');

    web3.eth.sendSignedTransaction(txHEX, (error, txHash) => {
            console.log('txHash:', txHash);
    })
})
