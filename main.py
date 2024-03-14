import os
from web3 import Web3

provider = Web3.HTTPProvider('https://rpc-mumbai.maticvigil.com')
w3 = Web3(provider)

private_key = os.getenv("PRIVATE_KEY")
account = w3.eth.account.from_key(private_key)

print("Account address : ", account.address)


def make_transaction():
    hex_data = "Ivanka Lutsiuk".encode('utf-8').hex()

    transaction = {
        'to': "0xC9d59a78FE51D0A084B9C1F3Ca29Ec0Afa2fadc6",
        'value': w3.to_wei(0.01, 'ether'),
        'data': hex_data,
        'gas': 25000,
        'gasPrice': w3.to_wei('1', 'gwei'),
        'nonce': w3.eth.get_transaction_count(account.address),
        'chainId': 80001,
    }

    signed_transaction = w3.eth.account.sign_transaction(transaction, private_key)
    transaction_hash = w3.eth.send_raw_transaction(signed_transaction.rawTransaction)

    print(f"Hash of transaction: {transaction_hash.hex()}")


make_transaction()

