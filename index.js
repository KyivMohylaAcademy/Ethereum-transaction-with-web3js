const Web3 = require('web3');

const WEB3 = new Web3('https://rpc-mumbai.maticvigil.com/');
const MY_ADDRESS = '0x9286c5AAe3825c81bADD8CEd474d711f3CacB44B';
const DEST_ADDRESS = '0x8e7F03D930F9001A2b1dd0156B465A7A16cAdf08';
const PRIVATE_KEY = 'a8403b677153ec917673b69389b4d2561de828a1c24c14af1a55ab96909b4032';
const WEI = WEB3.utils.toWei('0.01', 'ether');
const HEX = WEB3.utils.toHex('Volodymyr Dzhosan');
const GAS = 25000

async function sendTransactionWithData(){

    const TRANSACTION = {
        from: MY_ADDRESS,
        to: DEST_ADDRESS,
        value: WEI,
        data: HEX,
        gas: GAS
    };

    const SIGNED_TRANSACTION = await WEB3.eth.accounts.signTransaction(TRANSACTION, PRIVATE_KEY)

    await WEB3.eth.sendSignedTransaction(SIGNED_TRANSACTION.rawTransaction).on('receipt', console.log);

}

sendTransactionWithData()