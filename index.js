const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/45260ee476cd4141b9625391727e37ab')

const privateKey = '';

const receiverPublicKey = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C';

const publicKey = '0x746D7D852fE6a4A26f4657FB086A545a1B67ffF0';

const sendTrans = async () => {
    const transaction = await web3.eth.accounts.signTransaction({
        from: publicKey,
        to: receiverPublicKey,
        gas: 100000,
        value: web3.utils.toWei('0.01', 'ether'),
        data: web3.utils.toHex('Nadia Khodakivska'),
    }, privateKey)

    await web3.eth.sendSignedTransaction(transaction.rawTransaction)
}

sendTrans(); 