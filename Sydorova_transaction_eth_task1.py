from web3 import Web3

web1 = Web3(Web3.HTTPProvider('https://ropsten.infura.io/v3/0efb6a47ad8a441c98778c575669766b'))
a1 = Web3.toChecksumAddress('0x2FD76bB283Be28664cbef26a2CEeEADB968D36F5')
a2 = Web3.toChecksumAddress('0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C')
pr_key = '9b6e4305c9f33853b796d8413c8c7b8538afc1abc7054758553d688790a4e0e3'

nonce = web1.eth.getTransactionCount(a1)

transaction = {
    'nonce': nonce,
    'to': a2,
    'value': web1.toWei(0.01, 'ether'),
    'gas': 2100000,
    'gasPrice': web1.toWei(40, 'gwei'),
    'data': bytes("Sydorova_Yelisavieta","utf-8" )

}
signed_tr = web1.eth.account.sign_transaction(transaction, pr_key)
tr_hash = web1.eth.sendRawTransaction(signed_tr.rawTransaction)
