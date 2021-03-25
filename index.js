require('dotenv').config()

const Web3 = require('web3')
const axios = require('axios')
const EthereumTx = require('ethereumjs-tx')
const log = require('ololog').configure({ time: true })
const ansi = require('ansicolor').nice


const testnet = `https://ropsten.infura.io/${process.env.INFURA_ACCESS_TOKEN}`
const web3 = new Web3( new Web3.providers.HttpProvider(testnet) )
web3.eth.myAccount = process.env.WALLET_ADDRESS

const amountToSend = 0.00100000

//fetching the current transaction gas prices from https://ethgasstation.info/
const getCurrentGasPrices = async () => {
  let response = await axios.get('https://ethgasstation.info/json/ethgasAPI.json')
  let prices = {
    low: response.data.safeLow / 10,
    medium: response.data.average / 10,
    high: response.data.fast / 10
  }
 
  return prices
}


const main = async () => {
  let myBalanceWei = web3.eth.getBalance(web3.eth.myAccount).toNumber()
  let myBalance = web3.fromWei(myBalanceWei, 'ether')
 
  log(`My wallet balance is currently ${myBalance} ETH`.green)

  let nonce = web3.eth.getTransactionCount(web3.eth.myAccount)
  log(`The outgoing transaction count for your wallet address is: ${nonce}`.magenta)

  let gasPrices = await getCurrentGasPrices()

  let details = {
    "to": process.env.DESTINATION_WALLET_ADDRESS,
    "value": web3.toHex( web3.toWei(amountToSend, 'ether') ),
    "gas": 31000,
    "gasPrice": gasPrices.low * 1000000000, // converts the gwei price to wei
    "data": "Iryna Bolyukh",
    "nonce": nonce,
    "chainId": 3 //Ropsten: chain-id 3, network-id 3
  }
 
  const transaction = new EthereumTx(details)

  //signing
  transaction.sign( Buffer.from(process.env.WALLET_PRIVATE_KEY, 'hex') )

  const serializedTransaction = transaction.serialize()

  //sending for confirmation
  const transactionId = web3.eth.sendRawTransaction('0x' + serializedTransaction.toString('hex') )

  const url = `https://ropsten.etherscan.io/tx/${transactionId}`
  log(url.cyan)
  
  process.exit()
}
 
main()