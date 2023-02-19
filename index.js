import Web3 from 'web3';

const FROM = '0xAFAB9a06509f17AB6374c9436460Ae552Adb2f7E';
const TO = '0x8e7F03D930F9001A2b1dd0156B465A7A16cAdf08';
const PRIVATE_KEY = 'f3f0319aec2496fecba9175c010fb302bedacdb84272b2fd427433349ff0e5a2'
const PROVIDER = 'https://rpc-mumbai.maticvigil.com/';
const GAS = 21224

const sendTransaction = async () => {
  const web3 = new Web3(PROVIDER);

  const value = web3.utils.toWei('0.01', 'ether');
  const data = web3.utils.toHex('Khoptii Andrii')

  const transactionDetails = {
    to: TO,
    from: FROM,
    gas: GAS,
    value,
    data,
  }

  try {
    const signedTransaction = await web3.eth.accounts.signTransaction(transactionDetails, PRIVATE_KEY)
    await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction).on('receipt', receipt => {
      console.log('Receipt: ', receipt)
    })
  } catch (e) {
    console.error(`Error: ${e}`)
  }
  
}

sendTransaction();



