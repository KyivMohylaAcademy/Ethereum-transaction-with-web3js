const Web3 = require('web3');

const privateKey = 'Here goes Dariia Kucheruk`s private key';
const source = '0xEe7E8B353b55b1987082117C6dD269b5676F8376';
const destination   = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C';
const web3 = new Web3('https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');

const sendTestMoney = async () => {
    const transaction = await web3.eth.accounts.signTransaction({
        from: source,
        to: destination,
        value: web3.utils.toWei('0.01', 'ether'),
        data: web3.utils.toHex('Kucheruk Dariia'),
        gas: '100000',
    }, privateKey)

    const check = await web3.eth.sendSignedTransaction(
        transaction.rawTransaction
    );
};


sendTestMoney();