from web3 import Web3

w3 = Web3(Web3.HTTPProvider('https://ropsten.infura.io/v3/f510439ab2d9489a96ab8ea78f1ae514'))

private_key = '0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709'
address1 = '0x780A4e2bEA6C7B7c0a0B39255E941aFA23173968'
address2 = '0xF422BaaAb234A858f78208aA144D13208f3Eff71'

from web3.middleware import geth_poa_middleware
w3.middleware_onion.inject(geth_poa_middleware, layer=0)

tx = {
    'nonce': w3.eth.get_transaction_count(address1) + 1,
    'to': address2,
    'value': w3.toWei(0.01, 'ether'),
    'gas': 1000000,
    'gasPrice': w3.toWei('3', 'gwei'),
    'data': bytes('shpir_masha', 'utf_8')
}

signed_tx = w3.eth.account.signTransaction(tx, private_key)
tx_hash = w3.eth.sendRawTransaction(signed_tx.rawTransaction)

print(w3.toHex(tx_hash))