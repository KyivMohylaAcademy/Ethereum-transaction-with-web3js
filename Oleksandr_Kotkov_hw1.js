const Web3 = require('web3');
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

let fullName = 'Oleksandr Kotkov'.split("")
     .map(c => c.charCodeAt(0).toString(16).padStart(2, "0"))
     .join("");


console.log(fullName);

ethereum.request({ method: "eth_requestAccounts", });

web3.eth.sendTransaction({
    from: '0xB6950a5c3483349CC238aE3Ed41F9EBb2D0D39bd',
    to: '0x8e7F03D930F9001A2b1dd0156B465A7A16cAdf08',
    value: '10000000000000000',
    data: fullName
}, function(error, hash){
    console.log(error)
    console.log(hash)
});
