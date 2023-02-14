const Web3 = require('web3');

const PRIVATE_KEY = 'MY_PRIVATE_KEY';
const SOURCE_ADDRESS = '0xD680897a1aa37c74F060aE10D90d6AD08586E1eE';
const DESTINATION_ADDRESS = '0x8e7F03D930F9001A2b1dd0156B465A7A16cAdf08';
const web3 = new Web3('https://polygon-mumbai.infura.io/v3/MY_API_KEY');

const executeTransaction = async () => {
    const transaction = await web3.eth.accounts.signTransaction({
        from: SOURCE_ADDRESS,
        to: DESTINATION_ADDRESS,
        value: web3.utils.toWei('0.01'),
        data: web3.utils.toHex('Andrii Chaliuk'),
        gas: '100000',
    }, PRIVATE_KEY)

    const receipt = await web3.eth.sendSignedTransaction(
        transaction.rawTransaction
    );
};


executeTransaction();
