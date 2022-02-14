const web3 = require('../provider');

class Transaction {
    _rawTransaction;

    constructor({ from, to, value, gas }, name, surname) {
        this._rawTransaction = {
            from,
            to,
            value: web3.utils.toHex(web3.utils.toWei(value, "ether")),
            gas,
            data: web3.utils.toHex(`${name} ${surname}`)
        };
    }

    async send(decryptedAccount) {
        try {
            const signedTransaction = await decryptedAccount.signTransaction(this._rawTransaction);
            const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);
            return receipt;
        } catch (err) {
            console.error("Send transaction failed with:", err);
        }
    }
}

module.exports = Transaction;