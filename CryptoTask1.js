const Web3 = require("web3");

const web3 = new Web3('https://rpc-mumbai.maticvigil.com/');
const FROM = '0x29DF9A810d6A5B92F5ea1CaD1788b53216A24cED';
const TO = '0x8e7F03D930F9001A2b1dd0156B465A7A16cAdf08';
const VAL = '0.01';
const PRIVATE_KEY = 'PRIVATE_KEY';
const GAS = 22000;

async function sendTransaction(){
    const transaction = {
        from: FROM,
        to: TO,
        value: web3.utils.toWei(VAL,'ether'),
        data: web3.utils.asciiToHex('Dudka Taras'),
        gas: GAS
    };

    const signedTransaction = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY);

    await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction).on('receipt', console.log);
}

sendTransaction();