const Web3 = require("web3");

var web3 = new Web3(new Web3.providers.HttpProvider(
    'https://ropsten.infura.io/v3/3392b2133e33471faa3d38817b363509'
));

(async () => { 
    const transaction = await web3.eth.accounts.signTransaction({
            'from': '0x68a9Beaf13991bBeda040B50f5F71B975b0E1aEf',
            'to': '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C',
            'value': '10000000000000000',
            'gas': 100000,
            'data': web3.utils.toHex('Vladyslav Karahaiev')  
        }, "sec"
    );
    console.log((await web3.eth.sendSignedTransaction(transaction.rawTransaction)).transactionHash);
})();