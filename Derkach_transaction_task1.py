from web3 import Web3
w3 = Web3(Web3.HTTPProvider('https://ropsten.infura.io/v3/0befe6c5b14e487695a0ce1206f28804'))
privateKey = ''
source = '0x4eCa5F68CF30773f68445BDBF6009cA36c6A5851'
destination = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C'

transactionInfo = {
    "to": destination,
    "value": w3.toWei('0.01','ether'),
    "data": w3.toHex('Kyrylo Derkach'.encode('utf-8')),
    "gas": 100000,
    "nonce": w3.eth.get_transaction_count(source),
    "gasPrice": w3.toWei('30','gwei')
}
def sendTransaction():
    signedTransaction = w3.eth.account.signTransaction(transactionInfo, privateKey)
    tx = w3.eth.sendRawTransaction(signedTransaction.rawTransaction)
    txHex = w3.toHex(tx)
    return txHex

print(sendTransaction())