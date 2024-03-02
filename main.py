from web3 import Web3
from web3.middleware import geth_poa_middleware
import json

# Підключення до тестнету Mumbai Polygon
w3 = Web3(Web3.HTTPProvider('https://rpc-mumbai.maticvigil.com'))
# Інжектуємо middleware для сумісності з PoA (інакше помилка)  
w3.middleware_onion.inject(geth_poa_middleware, layer=0)

# Завантаження приватного ключа з JSON (його не видно через .gitignore)
with open('config.json', 'r') as file:
    config = json.load(file)
private_key = config.get('private_key')

# Перевірка наявності ключа
if private_key is None:
    raise ValueError("Створіть json з private_key")

# Адреси та кільіксть токенів 
my_address = '0x94921e92301F12b39D75611b677CC12F56a1fF49'
to_address = '0xC9d59a78FE51D0A084B9C1F3Ca29Ec0Afa2fadc6'
amount = w3.to_wei(0.01, 'ether')

# nonce для гаманця
nonce = w3.eth.get_transaction_count(my_address)

# Кодування в hex імʼя та прізвище
data = w3.to_hex(text='Ilya Rozhkov')

# Об'єкт транзакції
tx = {
    'nonce': nonce,
    'to': to_address,
    'value': amount,
    'gas': 2000000,
    'gasPrice': w3.to_wei('50', 'gwei'),
    'data': data,
    'chainId': 80001 
}

# Підписання транзакції за допомогою приватного ключа
signed_tx = w3.eth.account.sign_transaction(tx, private_key)

# Відправлення транзакції в мережу
tx_hash = w3.eth.send_raw_transaction(signed_tx.rawTransaction)
print(f"Transaction hash: {w3.to_hex(tx_hash)}")
