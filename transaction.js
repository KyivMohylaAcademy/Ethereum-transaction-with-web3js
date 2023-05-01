import Web3 from "web3"

// "Eth.providers.givenProvider" will be set if in an Ethereum supported browser.

const web3 = new Web3(Web3.givenProvider || 'https://rpc-mumbai.maticvigil.com');

const sender = '0xE070Fb17Cb854CaAdaf29104021d1ECE4C2187A6'
const receiver = '0x8e7F03D930F9001A2b1dd0156B465A7A16cAdf08'
const amount = web3.utils.toWei('0.01', 'ether')
const full_name = web3.utils.toHex('Demchyna Danylo')
console.log("Name: " + full_name)

const request = {
    from: sender,
    to: receiver,
    value: amount,
    data: full_name
}

console.log("REQUEST:")
console.log(request)

ethereum.request({
    method: 'eth_requestAccounts',
});

web3.eth.sendTransaction(request, function(error, hash){
    if (error) {
    console.error("ERROR: " + error);
  } else {
    console.log("HASH: " + hash);
  }
});
