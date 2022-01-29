var Tx = require("ethereumjs-tx").Transaction
const Web3 = require('web3')
const url_ropsten = 'https://ropsten.infura.io/v3/9da4f824c3d24b44bb9c7245a64472de'

const web3 = new Web3(url_ropsten)

const account1 = '0xF8e2D0222c01668D7f7cfE38fcf0F41C30B4424c'
const account2 = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C'

web3.eth.getBalance(account1, (error, balance) => {
    console.log('Account1 ', balance)
})

web3.eth.getBalance(account2, (error, balance) => {
    console.log('Account2 ', balance)
})

const privateKey1 = Buffer.from('pK of address 1', 'hex')

web3.eth.getTransactionCount(account1, (error, txCount) => {
    // build a transaction object
    const transactionObject = {
        nonce: web3.utils.toHex(txCount),
        from: account1,
        to: account2,
        value: web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
        gasLimit: web3.utils.toHex(100000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
        data: web3.utils.toHex('Mariia Synelnyk')
    }

    console.log(transactionObject)

    //sign transaction with private key of sender
    const tx = new Tx(transactionObject, { chain: 'ropsten' })
    tx.sign(privateKey1)

    //serialize the transaction
    const serializedTransaction = tx.serialize()
    const raw = '0x' + serializedTransaction.toString('hex')

    console.log('raw', raw)

    //brodcast transaction to the network
    web3.eth.sendSignedTransaction(raw, (error, txHash) => {
        if (!error) {
            console.log('txHash:', txHash)
        }
        else {
            console.log(error)
        }
    })

})
