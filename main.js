import Web3 from 'web3';

const web3 = new Web3('https://rpc-mumbai.maticvigil.com/');
const from_wallet = '0x1996fCE6fD000D8eA2f50A18ee3dbEa2d502216B';
const to_wallet = '0x8e7F03D930F9001A2b1dd0156B465A7A16cAdf08';
const amount = '0.01';
const privateKey = 'I think it will be only mine)))'

async function send() {
  const transaction = await web3.eth.accounts.signTransaction({
    from: from_wallet,
    to: to_wallet,
    gas: 100000,
    value:  web3.utils.toWei(amount, 'ether'),
    data: web3.utils.toHex('Kutsenko Adnrij'),
  }, privateKey);

  await web3.eth.sendSignedTransaction(
    transaction.rawTransaction
  );

}

send();
