var Web3 = require('web3');
const web3 = new Web3(Web3.givenProvider || "https://rpc-mumbai.maticvigil.com/");

web3.eth.sendTransaction({ 
    from: '0xb23c22e4d20121F1BEc1122D3781715f00aD93fa', 
    to:   '0x8e7F03D930F9001A2b1dd0156B465A7A16cAdf08', 
    data: '56616c65726969612042796b6f76657473', 
    value: 10000000000000000 
}, function(error, hash){ 
    console.log("Error is " + error); 
    console.log("Hash is "+ hash); 
});
