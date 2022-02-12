const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/895ac13c409e40d78cf1537a47331400')

const privateKey = '';
const publicKey = '0xb4dda22ef503770201ad79c213ab64b91756afc8';
const receiverPublicKey = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C';

const sendTransaction = async () => {
    const transaction = await web3.eth.accounts.signTransaction({
        from: publicKey,
        to: receiverPublicKey,
        value: web3.utils.toWei('0.01', 'ether'),
        data: web3.utils.toHex('Vlad Vakulenko'),
        gas: 100000,
    }, privateKey)

    await web3.eth.sendSignedTransaction(transaction.rawTransaction)
}

sendTransaction();