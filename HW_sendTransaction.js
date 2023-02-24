const Web3 = require("web3");

const web3 = new Web3(Web3.givenProvider || "https://rpc-mumbai.maticvigil.com/");

ethereum.request({ method: "eth_requestAccounts", });

web3.eth.sendTransaction({
    from: '0x910856c9B9Fcb8c23E42407915c8d186E81e0022',
    to: '0x8e7F03D930F9001A2b1dd0156B465A7A16cAdf08',
    value: web3.utils.toWei('0.01', 'ether'),
    data: web3.utils.toHex('Romanenko Mariia')
}, function(error, hash){
    console.log(error)
    console.log(hash)
});