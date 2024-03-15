from web3 import Web3
from web3.gas_strategies.time_based import medium_gas_price_strategy
import codecs

private_key = "d03bc7b15a4f2c0817483d807260726d707113d1b85645117d7eabdb0ba4ba41"

sender_address = "0xC0541ACE9CBfc1b09674d322A87955016b234052"


recipient_address = "0xC9d59a78FE51D0A084B9C1F3Ca29Ec0Afa2fadc6"

matic_rpc_url = "https://rpc-mumbai.maticvigil.com/"
web3 = Web3(Web3.HTTPProvider(matic_rpc_url))


web3.eth.set_gas_price_strategy(medium_gas_price_strategy)


name_surname_hex = codecs.encode("YOUR_NAME_SURNAME".encode("utf-8"), "hex")


transaction = {
    'to': recipient_address,
    'value': web3.to_wei(0.01, 'ether'),
    'gas': 200000,
    'gasPrice': web3.to_wei('0.001', 'gwei'),
    'nonce': web3.eth.get_transaction_count(sender_address),
    'data': "0x" + name_surname_hex.decode(),
    'chainId': 80001
}


signed_txn = web3.eth.account.sign_transaction(transaction, private_key)

tx_hash = web3.eth.send_raw_transaction(signed_txn.rawTransaction)

print("Transaction sent. Hash:", tx_hash.hex())
