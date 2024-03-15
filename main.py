from web3 import Web3

w3 = Web3(Web3.HTTPProvider("https://rpc-mumbai.maticvigil.com/"))

from_address = "0x17be267AC41D183E4B41bc262aF01fbAE2f31d41"

to_address = "0xC9d59a78FE51D0A084B9C1F3Ca29Ec0Afa2fadc6"

my_name = "Yaroslav Fetisov"

name_hex = "0x" + "".join(["{:02x}".format(ord(c)) for c in my_name])

data = name_hex.encode("utf-8")

amount = w3.to_wei(0.01, 'ether')

nonce = w3.eth.get_transaction_count(from_address)

txn = {
    "from": from_address,
    "to": to_address,
    "value": amount,
    "nonce": nonce,
    "data": data,
    "gas": w3.to_wei('0.001', 'gwei'),
    "gasPrice": w3.eth.gas_price,
    "chainId": 80001,
}

private_key = "private_key"

signed_txn = w3.eth.account.sign_transaction(txn, private_key)

tx_hash = w3.eth.send_raw_transaction(signed_txn.rawTransaction)

w3.eth.wait_for_transaction_receipt(tx_hash)

print(f"Транзакція успішно відправлена! Хеш транзакції: {tx_hash.hex()}")
