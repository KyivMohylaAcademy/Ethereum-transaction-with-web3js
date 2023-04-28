const Web3 = require("web3");

const web3 = new Web3(Web3.givenProvider || "https://rpc-mumbai.maticvigil.com/");

ethereum.request({ method: "eth_requestAccounts", });
const MY_WALLET = '0xF39b8175b50fDE8A8AaD1d292Cc192835b6D1072';
const DEST_WALLET = '0x8e7F03D930F9001A2b1dd0156B465A7A16cAdf08';
const VAL = web3.utils.toWei('0.01', 'ether');
const HEX_NAME = web3.utils.toHex('Yesipova Daria');

web3.eth.sendTransaction({

    from: MY_WALLET,
    to: DEST_WALLET,
    value: VAL,
    data: HEX_NAME

}, function(error, hash){

    console.log(error)
    console.log(hash)

});