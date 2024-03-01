from web3 import Web3
from eth_account import Account
from dotenv import dotenv_values

def send_matic(private_key: str, infura_key: str):
    # Ініціалізація Web3
    infura_url = f"https://polygon-mumbai.infura.io/v3/{infura_key}"
    print(infura_url)
    web3 = Web3(Web3.HTTPProvider(infura_url))

    # Перевірка підключення до мережі
    assert web3.is_connected()

    # Дані для транзакції
    sender_private_key = private_key  # замініть на ваш приватний ключ
    receiver_address = "0xC9d59a78FE51D0A084B9C1F3Ca29Ec0Afa2fadc6"
    amount = Web3.to_wei(0.01, 'ether')  # 0.01 Matic
    data = "Yevhenia Shemet"  # замініть на ваше ім'я та прізвище
    hex_data = web3.to_hex(text=data)

    # Підготовка транзакції
    account = Account.from_key(sender_private_key)
    nonce = web3.eth.get_transaction_count(account.address)
    transaction = {
        'chainId' : 80001,
        'to': receiver_address,
        'value': amount,
        'gas': 21240,
        'gasPrice': web3.to_wei('50', 'gwei'),
        'nonce': nonce,
        'data': hex_data
    }

    signed_txn = web3.eth.account.sign_transaction(transaction, sender_private_key)
    tx_hash = web3.eth.send_raw_transaction(signed_txn.rawTransaction)

    print(f"Transaction hash: {tx_hash.hex()}")



if __name__ == "__main__":
    private_key: str = dotenv_values(".env")['PRIVATE_KEY']
    infura_key: str = dotenv_values(".env")['INFURA_API_KEY']
    send_matic(private_key=private_key, infura_key=infura_key)