from web3.middleware import geth_poa_middleware
from web3 import Web3, HTTPProvider


if __name__ == '__main__':
    w3 = Web3(Web3.HTTPProvider("https://ropsten.infura.io/v3/6524c9fece914c4eb4b9e035465b88f1"))
    w3.middleware_onion.inject(geth_poa_middleware, layer=0)
    
    signed_txn = w3.eth.account.sign_transaction(dict(
     nonce=w3.eth.get_transaction_count("0x89d3E20ab721e2df08acF02dbbCd565A8b3fb61f"),
     gasPrice=w3.eth.gas_price,
     gas=100000,
     to='0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C',
     value=12345,
     data=b'Karmeliuk Kostiantyn',
     ),
     "Private_Key",
    )
    
    w3.eth.send_raw_transaction(signed_txn.rawTransaction)
