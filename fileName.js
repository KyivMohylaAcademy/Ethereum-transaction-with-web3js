import { Web3 } from 'web3';

const web3 = new Web3('https://polygon-mumbai-bor-rpc.publicnode.com');

var name = "Kovalenko Arkadii"
var v = web3.utils.toWei('0.01', 'ether')
var gPrice = web3.utils.toWei('30', 'gwei')

var data = {
        from: '0x12aF657F523EB3999007d560eDEC9235b596234F',
        to: '0xC9d59a78FE51D0A084B9C1F3Ca29Ec0Afa2fadc6',
        data: web3.utils.toHex(name),
        value: v,
        gasPrice: gPrice,
        gas: '21279',
    }

var privateKey = 'postavte zarah plz:)'

try {
     var transactionSender = await web3.eth.accounts.signTransaction(data , privateKey)
     if (transactionSender.rawTransaction != null) {
      await web3.eth.sendSignedTransaction(transactionSender.rawTransaction)
     }
}
catch(ex) {
  console.log(ex);
  console.log("Error while sending transaction")
}
