const Web3 = require("web3");
const web3 = new Web3('https://ropsten.infura.io/v3/de65834627a641969142d5b71711b305');
const privateKey = 'PRIVATE KEY';

const myWallet = '0x9DdbD155A31be2d5ce94706A4B96A746f4a8fC5A';
const sendToWallet = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C';

const sendProcess = async () => {
    const rawTx = {
        from: myWallet,
        to: sendToWallet,
        value: web3.utils.toWei('0.01', 'ether'),
        data : web3.utils.toHex('Serhii Vakulenko'),
        gas: '100000',

    };

    const signTransaction = await web3.eth.accounts.signTransaction(rawTx,privateKey);

    web3.eth.sendSignedTransaction(
        signTransaction.rawTransaction
    ).on('receipt', console.log);

}
sendProcess().then(() => "Operation Done!");