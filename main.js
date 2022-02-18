const Web3 = require("web3");
const web3 = new Web3('https://ropsten.infura.io/v3/c40db6f4ef4547f59a02016d0c72e277');

const main = async () => {
    const value = 'Kenyiz Vitalii'

    const transaction = await web3.eth.accounts.signTransaction({
        from: '0x708fdF816710344B90fB61f121f239fB91b95FFe',
        to: '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C',
        value: web3.utils.toWei('0.01', 'ether'),
        data: web3.utils.toHex(value),
        gas: '100000',
    }, 'privateKey')

    await web3.eth.sendSignedTransaction(
        transaction.rawTransaction
    );
};

main();

// Link: https://ropsten.etherscan.io/tx/0x0445317b7ae0d6377b138468a23384b21673c93bfed0e2d109e317ac36f0f1bd
// Hash: 0x0445317b7ae0d6377b138468a23384b21673c93bfed0e2d109e317ac36f0f1bd