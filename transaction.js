const privKey = '<MyKey>';
const addressFrom = '0xe89207cF09F1bA3fdf34e057346ABa0bE1100c95';
const addressTo   = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C';
const web3 = new Web3('https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');

const transaction = async () => {
    const createTransaction = await web3.eth.accounts.signTransaction({
        from: addressFrom,
        to: addressTo,
        value: web3.utils.toWei('0.01', 'ether'),
        data: web3.utils.toHex('Kryvosheia Oleksandr'),
        gas: '100000',
    }, privKey)

    const createReceipt = await web3.eth.sendSignedTransaction(
        createTransaction.rawTransaction
    );
};


transaction();