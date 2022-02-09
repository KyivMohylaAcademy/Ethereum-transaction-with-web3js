import os
from typing import Final
from dotenv import load_dotenv
from web3 import Web3

load_dotenv()

PROVIDER_URL: Final = os.getenv("PROVIDER_URL")
PRIVATE_KEY: Final = os.getenv("PRIVATE_KEY")
FROM: Final = os.getenv("FROM")
TO: Final = os.getenv("TO")
ETHERS_TO_SEND: Final = Web3.toWei(0.01, "ether")
DATA: Final = bytes(os.getenv("DATA"), "UTF-8")
GAS = 3_000_000
GAS_PRICE = Web3.toWei(250, 'gwei')


def send_transaction() -> None:
    w3 = Web3(Web3.HTTPProvider(PROVIDER_URL))

    nonce = w3.eth.get_transaction_count(FROM) + 1

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


if __name__ == "__main__":
    send_transaction()
