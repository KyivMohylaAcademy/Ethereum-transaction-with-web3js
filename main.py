from web3 import Web3
import os

provider_url = "https://rpc-mumbai.maticvigil.com"
web3 = Web3(Web3.HTTPProvider(provider_url))

if not web3.is_connected():
    print("Can't connect to Mumbai Testnet")
    exit()

my_address = "0xA14B9892ECc783B88dC32429A666b274D0b35b62"
private_key = os.getenv("PRIVATE_KEY")
receiver_address = "0xC9d59a78FE51D0A084B9C1F3Ca29Ec0Afa2fadc6"

amount = web3.to_wei(0.01, 'ether')
data = "Dmytro Parnak".encode('utf-8').hex()
nonce = web3.eth.get_transaction_count(my_address)
transaction = {
    'to': receiver_address,
    'value': amount,
    'gas': 2000000,
    'gasPrice': web3.to_wei('50', 'gwei'),
    'nonce': nonce,
    'data': '0x' + data,
    'chainId': 80001
}

signed_txn = web3.eth.account.sign_transaction(transaction, private_key=private_key)
tx_hash = web3.eth.send_raw_transaction(signed_txn.rawTransaction)

print(f"Transaction successful, hash: {tx_hash.hex()}")
