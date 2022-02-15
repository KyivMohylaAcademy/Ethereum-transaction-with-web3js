from encodings import utf_8
from web3 import Web3

ganache_url = 'https://ropsten.infura.io/v3/1a78a996f68c4c2b930bad7321751989'
web3 = Web3(Web3.HTTPProvider(ganache_url))
account_1 = '0xDEf75C55D3FaD5da5a9A3d245E3bBdaE7c5e335F'
private_key1 = 'top secret'
account_2 = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C'
nonce = web3.eth.getTransactionCount(account_1)
tx = {
    'nonce': nonce,
    'to': account_2,
    'value': web3.toWei(0.0001, 'ether'),
    'gas': 2000000,
    'gasPrice': web3.toWei('50', 'gwei'),
    'data': bytes("Kyrylin_Yehor", "utf_8")
}
signed_tx = web3.eth.account.sign_transaction(tx, private_key1)
tx_hash = web3.eth.sendRawTransaction(signed_tx.rawTransaction)
print(web3.toHex(tx_hash))