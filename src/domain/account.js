const web3 = require('../provider');

class Account {
    _account;
    _privateKey;

    constructor(privateKey) {
        this._privateKey = privateKey;
    }

    async get() {
        if (!this._account) {
            this._account = web3.eth.accounts.privateKeyToAccount(this._privateKey);
        }
        return this._account;
    }

    get address() {
        if (!this._account) {
            throw new Error("Cannot obtain address without account!");
        }
        return this._account.address;
    }
}

module.exports = Account;