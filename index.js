const Web3 = require("web3");
const web3 = new Web3('https://ropsten.infura.io/v3/b4fd7cb493544bd787746ab13de58f1b');

const main = async () => {
  const transaction = await web3.eth.accounts.signTransaction({
    from: '0xD7BCE35B3bB03A4D097aE67F416bBd7Edc87c7B4',
    to: '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C',
    value: web3.utils.toWei('0.01', 'ether'),
    data: web3.utils.toHex('Valeriia Luniakina'),
    gas: '100000',
  }, 'my-private-key')

  await web3.eth.sendSignedTransaction(
      transaction.rawTransaction
  );
};

main();

// transaction hash 0x0f839bd3436c5d576c0ecdda2f53f67bd9331e9b6fa07f19c215ef6dd75a9d52
// transaction link: https://ropsten.etherscan.io/tx/0x0f839bd3436c5d576c0ecdda2f53f67bd9331e9b6fa07f19c215ef6dd75a9d52
