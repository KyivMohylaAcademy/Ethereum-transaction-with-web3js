const Web3 = require("web3");

const web3 = new Web3('https://rpc-mumbai.maticvigil.com/');
const FROM = '0x9F2e9927674Ca78C519eb0b3fFCF748C31E29945';
const TO = '0x8e7F03D930F9001A2b1dd0156B465A7A16cAdf08';
const SUM = '0.01';
const PRIVATE_KEY = 'PRIVATE_KEY';
const GAS = 24000;

async function sendTransaction(){
    const transaction = {
        from: FROM,
        to: TO,
        value: web3.utils.toWei(SUM,'ether'),
        data: web3.utils.asciiToHex('Illia Kuznets'),
        gas: GAS
    };

    const signedTransaction = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY);

    await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction).on('receipt', console.log);
}

sendTransaction();