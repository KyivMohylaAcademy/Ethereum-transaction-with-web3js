from encodings import utf_8
from dotenv import dotenv_values
from web3 import Web3

config = dotenv_values(".env")
web3 = Web3(Web3.HTTPProvider(config['PROVIDER']))
public_key = config['PUBLIC_KEY']
private_key = config['PRIVATE_KEY']
addresser_acc = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C'

nonce = web3.eth.getTransactionCount(public_key)
tx = {
    'nonce': nonce,
    'to': addresser_acc,
    'value': web3.toWei(0.01, 'ether'),
    'gas': 2000000,
    'gasPrice': web3.toWei(55, 'gwei'),
    'data': bytes("Zhydok_Fedir", "utf_8")
}
signed_tx = web3.eth.account.signTransaction(tx, private_key)
tx_hash = web3.eth.sendRawTransaction(signed_tx.rawTransaction)

print(web3.toHex(tx_hash))
