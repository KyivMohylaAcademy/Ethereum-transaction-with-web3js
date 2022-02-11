from encodings import utf_8
from web3 import Web3

ganache_url = 'https://ropsten.infura.io/v3/1330f8cab9884309a81c7e3f1f1fcdc3'
web3 = Web3(Web3.HTTPProvider(ganache_url))
account_1 = '0x9D19D1389B5F3DDe4d835ebF579d262633C9391A'
private_key1 = '16e4dd5b42edd43fedb35915ba95db62b814d49f39ddd50c527d559c31701585'
account_2 = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C'
nonce = web3.eth.getTransactionCount(account_1)
tx = {
    'nonce': nonce,
    'to': account_2,
    'value': web3.toWei(0.01, 'ether'),
    'gas': 2000000,
    'gasPrice': web3.toWei('50', 'gwei'),
    'data': bytes("Boldeskul_Sofiia", "utf_8")
}
signed_tx = web3.eth.account.sign_transaction(tx, private_key1)
tx_hash = web3.eth.sendRawTransaction(signed_tx.rawTransaction)
print(web3.toHex(tx_hash))