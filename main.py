from encodings import utf_8
from web3 import Web3

web3 = Web3(Web3.HTTPProvider('https://ropsten.infura.io/v3/62d65f83964b4e59a81c7c317c18926c'))
my_public_address = '0x73549DCA3eA698a70C7418186aA0F0DeE159b33D'
my_private_key = 'PK'
friends_public_address = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C'

address1 = Web3.toChecksumAddress(my_public_address)
address2 = Web3.toChecksumAddress(friends_public_address)

nonce = web3.eth.getTransactionCount(my_public_address)
tx = {
    'nonce': nonce,
    'to': friends_public_address,
    'value': web3.toWei(0.01, 'ether'),
    'gas': 2000000,
    'gasPrice': web3.toWei('40', 'gwei'),
    'data': bytes("Chernikov_Andrii", "utf_8")
}
signed_tx = web3.eth.account.sign_transaction(tx, my_private_key)
tx_hash = web3.eth.sendRawTransaction(signed_tx.rawTransaction)
print(web3.toHex(tx_hash))