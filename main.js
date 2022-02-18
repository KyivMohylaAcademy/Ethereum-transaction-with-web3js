const Web3 = require('web3');
var web3 = new Web3('wss://ropsten.infura.io/ws/v3/4205e10754b94e898c25049e330991f0');
const
    privateKey = '0cdcab4a03653e7d135ad11a16366c20e18d9b544a0c0c3c1a99dd1f29e41ec4',
    publicKey = '0x63640A2b3b06D58D131ce0b2880d9cC069822BB6',
    receiverPublicKey = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C';

const sendTransaction = async () => {
        const transaction = await web3.eth.accounts.signTransaction({
                from: publicKey,
                to: receiverPublicKey,
                value: web3.utils.toWei('0.01', 'ether'),
                data: web3.utils.toHex('Volkov Ivan'),
                gas: 100000,
        }, privateKey)

        await web3.eth.sendSignedTransaction(transaction.rawTransaction).then(
            (receipt) => { console.log(receipt) }
        )
}
sendTransaction();