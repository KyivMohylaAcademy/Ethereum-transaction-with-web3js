const Tx = require('ethereumjs-tx').Transaction;
const Web3 = require('web3');
var crypto = require("crypto");

const web3 = new Web3("https://ropsten.infura.io/v3/0540a3bb34b543b3a21cacb4d3077fc9");
const sender = '0x9259Bf4928734aA10550Ed59ed06A439c67fdCb3';
const receiver = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C';

const privateKey = Buffer.from('oh****iforgottoremoveaREALprivetekeyfromHERE!!!', 'hex');

web3.eth.getTransactionCount(sender).then((count) => {
  var transactionData = {
    nonce: web3.utils.toHex(count),
    from: sender,
    to: receiver,
    value: web3.utils.toHex(web3.utils.toWei('0.01', 'ether')),
    gasLimit: web3.utils.toHex(69228),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
    data: web3.utils.toHex('Maksym Diachenko')
  }

  signAndSend(transactionData, privateKey);
});

async function signAndSend(tData, pKey) {
  var TX = new Tx(tData, { 'chain': 'ropsten' });
  TX.sign(pKey);
  var serializedTx = TX.serialize();
  console.log('Serialized transaction:');
  console.log(serializedTx.toString('hex'));
  console.log("<------------------------->");
  web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).then(console.log);
}

