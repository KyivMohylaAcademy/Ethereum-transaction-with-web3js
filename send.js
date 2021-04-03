const Web3 = require('web3');

async function sendEther(){
    const web3 = new Web3('https://ropsten.infura.io/v3/8afd2eaac8744e249538b57f32a65492');
    const privateKey = '';
    web3.eth.accounts.wallet.add(privateKey);
    const message = "Chumachenko Olexandra";
    const data = web3.utils.toHex(message);
    const transaction = {
        from: '0x24751423c3eA4dBDad3343f91BBf346e1CD1F031',
        to: '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C',
        data: data,
        value: 1000000000000000000,
        gasPrice: '0x09184e72a000',
        gasLimit: '0x21884',
    };
    const receipt = await web3.eth.sendTransaction(transaction);
    console.log(`Hash: ${receipt.transactionHash}`);
};

sendEther();