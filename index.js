import Web3 from 'web3';

const MY_WALLET = '0x6C828772a3F13646a5E17c0A9C9b7d510C5aFcf6';
const TARGET_WALLET = '0x8e7F03D930F9001A2b1dd0156B465A7A16cAdf08';
const AMOUNT = '0.01';
const PROVIDER = 'https://rpc-mumbai.maticvigil.com/';
const PRIVATE_KEY = 'my_private_key'

async function main() {
  const web3 = new Web3(PROVIDER);
  const tx = {
    to: TARGET_WALLET,
    from: MY_WALLET,
    value:  web3.utils.toWei(AMOUNT, 'ether'),
    data: web3.utils.toHex('Hrachov Oleksandr'),
    gas: 30000,
  }

  await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY).then(signed => {
    web3.eth.sendSignedTransaction(signed.rawTransaction).on('receipt', console.log)
  })

}

main();
