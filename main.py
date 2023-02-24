import os

from web3 import Web3
from web3.middleware import geth_poa_middleware

w3 = Web3(Web3.HTTPProvider('https://rpc-mumbai.maticvigil.com'))
w3.middleware_onion.inject(geth_poa_middleware, layer=0)
priv_key = 'MY_KEY'

nonce = w3.eth.getTransactionCount('0xD773C4Ad97aeA92A0331D3B6c797e9A468AA6411')

tx = {'nonce': nonce,
      'from': '0xD773C4Ad97aeA92A0331D3B6c797e9A468AA6411',
      'to': '0x8e7F03D930F9001A2b1dd0156B465A7A16cAdf08',
      'value': w3.toWei(0.01, 'ether'),
      'data': w3.toHex('Olha Zahoruiko'.encode()),
      'gas': 210000,
      'gasPrice': w3.toWei(40, 'gwei'),
      'chainId': 80001
      }

signed_tx = w3.eth.account.signTransaction(tx, priv_key)

tx_hash = w3.eth.sendRawTransaction(signed_tx.rawTransaction)

print(tx_hash.hex())