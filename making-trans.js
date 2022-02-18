const Web3 = require('web3');

const web3 = new Web3('https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');

const privateKey = '';
const source = '0xeE87664bbD0e41b8cfdB33b65398d895f0c748C4';
const destination = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C';


const sendTestMoney = async() => {
  const transaction = await web3.eth.accounts.signTransaction({
    from: source,
    to: destination,
    value: web3.utils.toWei('0.01', 'ether'),
    data: web3.utils.toHex('Liza Zhyvitska'),
    gas:'100000'
  }, privateKey);
  
  const check = await web3.eth.sendSignedTransaction(
    transaction.rawTransaction
  );
};

sendTestMoney();