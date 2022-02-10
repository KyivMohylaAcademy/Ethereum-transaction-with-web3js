async function main() {
    require('dotenv').config();
    const { API_URL, PRIVATE_KEY } = process.env;
    const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
    const web3 = createAlchemyWeb3(API_URL);
    const myAddress = '0xA5603F4C98Ace2D5053d88EC1F60819C1438d2AF' 

    const nonce = await web3.eth.getTransactionCount(myAddress, 'latest'); 

    const transaction = {
        'to': '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C',
        'value': web3.utils.toWei('0.1', 'ether'),
        'gas': 3000000,
        'nonce': nonce,
        'data' : '416e6173746173696961205061726b686f6d656e6b6f'
    };

    const signedTx = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY);

    web3.eth.sendSignedTransaction(signedTx.rawTransaction, function (error, hash) {
        if (error) 
            console.log("?Something went wrong while submitting your transaction:", error)
    });
}

main();
