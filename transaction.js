const Web3 = require('web3');

const privateKey = 'myPK';
const source = '0xefB10Df637167534B656261A95919334237Ff08C';
const destination = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C';
const web3 = new Web3('https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');

const sendTestMoney = async () => {
    const transaction = await web3.eth.accounts.signTransaction({
        from: source,
        to: destination,
        value: web3.utils.toWei('0.01', 'ether'),
        data: web3.utils.toHex('Kharchenko Dmytro'),
        gas: '100000',
    }, privateKey)

    const check = await web3.eth.sendSignedTransaction(
        transaction.rawTransaction
    );
};

sendTestMoney();