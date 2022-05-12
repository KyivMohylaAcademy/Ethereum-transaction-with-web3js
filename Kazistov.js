const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/139ff4aadbf34e68bd589f0d3b9a3233')

const 
    privateKey = '96e896bb72e59e580c8cc95ceb0b1169a61d2af00293747a4af1d897b4379df7',
    publicKey = '0x5289321A7A331Fb98dcc85C61302e9fAdb0e7708',
    receiverPublicKey = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C';

const sendTransaction = async () => {
    const transaction = await web3.eth.accounts.signTransaction({
        from: publicKey,
        to: receiverPublicKey,
        value: web3.utils.toWei('0.01', 'ether'),
        data: web3.utils.toHex('Vladislav Kazistov'),
        gas: 100000,
    }, privateKey)

    await web3.eth.sendSignedTransaction(transaction.rawTransaction).then(
        (receipt) => { console.log(receipt) }
    )
}

sendTransaction();