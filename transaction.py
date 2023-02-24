from web3 import Web3
from web3.middleware import geth_poa_middleware

w3 = Web3(Web3.HTTPProvider('https://rpc-mumbai.maticvigil.com'))
w3.middleware_onion.inject(geth_poa_middleware, layer=0)

FROM = "0x21ab25A7Ee211f5a839C1E1D895355BB2e6E3AA1"
TO = "0x8e7F03D930F9001A2b1dd0156B465A7A16cAdf08"
PRIVATE_KEY = "NO-NO-NO"


def send_my_transaction():
    transaction = {"from": FROM,
                   "to": TO,
                   "value": w3.toWei(0.01, unit='ether'),
                   "data": w3.toHex("Oleksii Anoshyn".encode()),
                   "nonce": w3.eth.getTransactionCount(FROM),
                   "gas": 2000000,
                   'gasPrice': w3.toWei(5, 'gwei'),
                   'chainId': 80001
                   }
    try:
        signed_transaction = w3.eth.account.signTransaction(transaction, PRIVATE_KEY)
        transaction_hash = w3.eth.send_raw_transaction(signed_transaction.rawTransaction)
        print(transaction_hash.hex())
    except Exception as err:
        print(err)


if __name__ == '__main__':
    send_my_transaction()

