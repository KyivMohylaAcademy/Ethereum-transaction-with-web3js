var Tx = require("ethereumjs-tx").Transaction
const Web3 = require('web3')

const url_ropsten = 'https://ropsten.infura.io/v3/f1a5cad380434530aed8b5aa91fadb60'

const web3 = new Web3(url_ropsten)

const fromAcc = '0xB23F52e3e111c2Cedb83CfE7b2d75AaE88c0A480'
const toAcc = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C'

web3.eth.getBalance(fromAcc, (error, balance) => {
    console.log('FromAccount ', balance)
})

web3.eth.getBalance(toAcc, (error, balance) => {
    console.log('ToAccount ', balance)
})

const privateKey1 = Buffer.from('private key', 'hex')

web3.eth.getTransactionCount(fromAcc, (error, txCount) => {
    console.log(`The outgoing transaction count for your wallet address is: ${txCount}`)

    const transactionObject = {
        nonce: web3.utils.toHex(txCount + 1),
        from: fromAcc,
        to: toAcc,
        value: web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
        gasLimit: web3.utils.toHex(100000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
        data: web3.utils.toHex('Myronovych Oleksandr')
    }

    const tx = new Tx(transactionObject, { chain: 'ropsten' })
    tx.sign(privateKey1)

    const serializedTransaction = tx.serialize()
    const raw = '0x' + serializedTransaction.toString('hex')

    web3.eth.sendSignedTransaction(raw, (error, txHash) => {
        if (!error) {
            console.log('txHash:', txHash)
        }
        else {
            console.log(error)
        }
    })

})