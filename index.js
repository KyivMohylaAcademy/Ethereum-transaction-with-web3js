const Web3 = require("web3");
const web3 = new Web3('https://ropsten.infura.io/v3/628d452e2b7c49b2a72f5e4511947c84');

const main = async () => {
    const transaction = await web3.eth.accounts.signTransaction({
        from: '0x729f5D465da34c4794D11Cb886adBd70ECFAeE17',
        to: '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C',
        value: web3.utils.toWei('0.01', 'ether'),
        data: web3.utils.toHex('Churilova Anna'),
        gas: '100000',
    }, 'my secret key')

    await web3.eth.sendSignedTransaction(
        transaction.rawTransaction
    );
};

main(); 

// transaction link: https://ropsten.etherscan.io/tx/0x80bd1a3536bf358e39d2e94984ce9c1546958b734250653dcf943699a90cd4ff
// transaction hash 0x80bd1a3536bf358e39d2e94984ce9c1546958b734250653dcf943699a90cd4ff