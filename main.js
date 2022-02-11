
const Web3 = require("web3");
const web3 = new Web3('https://ropsten.infura.io/v3/ce300724237f4babae10eb6fcf25c193');

const main = async () => {

    const value = 'Olenyn Sofiya'

    const transaction = await web3.eth.accounts.signTransaction({
        from: '0x7D82132a0d2eb578Ff3Ca56d604177ea25E98170',
        to: '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C',
        value: web3.utils.toWei('0.01', 'ether'),
        data: web3.utils.toHex(value),
        gas: '100000',
    }, '-private key-')

    await web3.eth.sendSignedTransaction(
        transaction.rawTransaction
    );
};

main();

// Link https://ropsten.etherscan.io/tx/0x50e0128f3507efd7924810d9f6ddd224d60f96a60381a13370a8743f1252a2eb
//Transaction Hash: 0x50e0128f3507efd7924810d9f6ddd224d60f96a60381a13370a8743f1252a2eb
