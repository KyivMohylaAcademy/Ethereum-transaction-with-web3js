from web3 import Web3

w3 = Web3(Web3.HTTPProvider('https://ropsten.infura.io/v3/ae8953ced99f40a3940bea5c04fdeec7'))

public_address = '0xa3Bb6f31ACbB5043C406e09425936A7BBe0BA5DC'
other_address = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C'
priv_key = 'it`s my secret'

address1 = Web3.toChecksumAddress(public_address)
address2 = Web3.toChecksumAddress(other_address)

nonce = w3.eth.getTransactionCount(address1)

tx = {
  'nonce' : nonce,
  'to' : address2,
  'value' : w3.toWei(0.0009, 'ether'),
  'gas' : 2000000,
  'gasPrice': w3.toWei(40, 'gwei'),
  'data': bytes("Test transaction", "utf_8")
}

signed_tx = w3.eth.account.sign_transaction(tx, priv_key)

tx_hash = w3.eth.sendRawTransaction(signed_tx.rawTransaction)