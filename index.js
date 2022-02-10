const Web3 = require("web3");
const web3 = new Web3('https://ropsten.infura.io/v3/92a742bbd8c04bbcab8e1418a146440a');

const main = async () => {
    const createTransaction = await web3.eth.accounts.signTransaction({
        from: '0x609b0ba7d6DcD1CF8cd1a13a8A7820002AD6aB1D',
        to: '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C',
        value: web3.utils.toWei('0.01', 'ether'),
        data: web3.utils.toHex('Maksym Pidlisnyi'),
        gas: '100000',
    }, 'super-duper secret')

    const createReceipt = await web3.eth.sendSignedTransaction(
        createTransaction.rawTransaction
    );
};

main();