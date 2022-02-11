from typing import Final
import json

from web3 import Web3, EthereumTesterProvider

with open('data.json', 'r') as file:
    data_obj = json.load(file)

print(data_obj['data'])

PROVIDER_URL: Final = data_obj['provider']
PRIVATE_KEY: Final = data_obj['private_key']
FROM: Final = data_obj['from']
TO: Final = data_obj['to']
ETHERS_TO_SEND: Final = Web3.toWei(0.01, "ether")
DATA: Final = bytes(data_obj['data'], "UTF-8")
GAS = 3_000_000
GAS_PRICE = Web3.toWei(250, 'gwei')

w3 = Web3(Web3.HTTPProvider(PROVIDER_URL))

nonce = w3.eth.get_transaction_count(FROM) + 5

transaction = {
    "to": TO,
    "value": ETHERS_TO_SEND,
    "data": DATA,
    'gas': GAS,
    'gasPrice': GAS_PRICE,
    "nonce": nonce,
}

signed_transaction = w3.eth.account.sign_transaction(transaction, PRIVATE_KEY)
result = w3.eth.send_raw_transaction(signed_transaction.rawTransaction)
print(result.hex(), nonce)
