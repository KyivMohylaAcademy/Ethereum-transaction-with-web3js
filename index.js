const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/5b5d173533954abbbf547281d099ebfa');

const sourceAddress = '0x1A14847385d08927cC0fe936A4afea32167C332e'
const destAddress = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C'

const makeTranstaction = async (fromW, toW, ethAmount, gasAmount) => {

    const transaction = await web3.eth.accounts.signTransaction({
        from: fromW,
        to: toW,
        value: web3.utils.toWei(ethAmount, 'ether'),
        data: web3.utils.toHex('Gaivoronskyi Roman'),
        gas: gasAmount,
    }, 'PRIVATE KEY')

    const receipt = await web3.eth.sendSignedTransaction(
        transaction.rawTransaction
    );

    console.log(receipt)
};


const main = async () => {
    // 60 000 gwei = 0.16 USD
    // 0x0bd67ca92fca1f8b0040df35a87773d250125fc75027d1f533ea7971effa25ee - HASH
    // https://ropsten.etherscan.io/tx/0x0bd67ca92fca1f8b0040df35a87773d250125fc75027d1f533ea7971effa25ee - LINK
    makeTranstaction(sourceAddress, destAddress, '0.01', '80000');
}

main();