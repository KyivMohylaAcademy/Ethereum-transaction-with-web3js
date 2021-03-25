const Web3 = require('web3');
const axios = require('axios')
const EthereumTx = require('ethereumjs-tx').Transaction
const log = require('ololog').configure({ time: true })
const ansi = require('ansicolor').nice


const testnet = 'https://ropsten.infura.io/v3/6c517106b35f4891b00350b8a3dd2362'
const web3 = new Web3( new Web3.providers.HttpProvider(testnet) )
const WALLET_ADDRESS = '0xBa7DF308a09Cf4e362ef586Ae40986080375D75E'

web3.eth.defaultAccount = WALLET_ADDRESS

const INFURA_ACCESS_TOKEN = '6c517106b35f4891b00350b8a3dd2362'
const WALLET_PRIVATE_KEY = ''
const DESTINATION_WALLET_ADDRESS = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C'

const amountToSend = 12321

const getCurrentGasPrices = async () => {
    let response = await axios.get('https://ethgasstation.info/json/ethgasAPI.json')
    let prices = {
        low: response.data.safeLow / 10,
        medium: response.data.average / 10,
        high: response.data.fast / 10
    }

    console.log("\r\n")
    log (`Current ETH Gas Prices (in GWEI):`.cyan)
    console.log("\r\n")
    log(`Low: ${prices.low} (transaction completes in < 30 minutes)`.green)
    log(`Standard: ${prices.medium} (transaction completes in < 5 minutes)`.yellow)
    log(`Fast: ${prices.high} (transaction completes in < 2 minutes)`.red)
    console.log("\r\n")

    return prices
}

const main = async () => {


    let myBalanceWei = web3.eth.getBalance(web3.eth.defaultAccount)
        .then(balance => {
            console.log("Balance : " + balance);
        })
        .catch(console.error);

    // let myBalance = web3.utils.fromWei(myBalanceWei, 'ether')
    // log(`Your wallet balance is currently ${myBalance} ETH`.green)


    let nonce = await web3.eth.getTransactionCount(web3.eth.defaultAccount)
    log(`The outgoing transaction count for your wallet address is: ${nonce}`.magenta)


    let gasPrices = await getCurrentGasPrices()


    let details = {
        "form": WALLET_ADDRESS,
        "to": DESTINATION_WALLET_ADDRESS,
        "value": web3.utils.toHex( amountToSend ),
        "gas": 30000,
        "gasPrice": gasPrices.low * 1000000000,
        "nonce": nonce,
        "chainId": 0x03,
        "data": web3.utils.utf8ToHex('Dmytro Kholodov')
    };

    const transaction = new EthereumTx(details, { chain: 'ropsten' })

    transaction.sign( Buffer.from(WALLET_PRIVATE_KEY, 'hex') )

    const serializedTransaction = transaction.serialize()


    // const addr = transaction.from.toString('hex')
    // log(`Based on your private key, your wallet address is ${addr}`)


    let transId = '';
    await web3.eth.sendSignedTransaction('0x' + serializedTransaction.toString('hex') ).on('receipt', console.log).then(res => {
        transId = res.transactionHash
    });

    const url = `https://ropsten.etherscan.io/tx/${transId}`
    log(url.cyan)

    process.exit()
}

main()