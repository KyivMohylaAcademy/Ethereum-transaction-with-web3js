const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');
const from = '0x2D16C4Ad3e13eB108e9fBaD172dF137dFb4b0833';
const to = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C';

const privateKey = 'my_private_key';


const createTransaction = web3.eth.accounts.signTransaction({
    from: from,
    to: to,
    value: web3.utils.toWei('0.01', 'ether'),
    data: web3.utils.toHex('Makarenko Bogdan'),
    gas: '100000',
}, privateKey);

createTransaction.then((value) => {
    const res = web3.eth.sendSignedTransaction(value.rawTransaction);
    res.then((result) =>{
        console.log(result);
    });
}).catch((e) => {
    console.log(e);
})




