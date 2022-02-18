from web3 import Web3

ganache_url = 'https://ropsten.infura.io/v3/17fb98456e954e1b82f8ecc8d570a39d'
web3 = Web3(Web3.HTTPProvider(ganache_url))
public_key = '0x7Ed87E41ce1B4042E055A8Fb1887B60D8aE1317A'
private_key = ''
destination = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C'

nonce = web3.eth.getTransactionCount(public_key)

transaction = {
    'nonce': nonce,
    'to': destination,
    'value': web3.toWei(0.01, 'ether'),
    'gas': 2000000,
    'gasPrice': web3.toWei('50', 'gwei'),
    'data': bytes("Vavdiichyk Viktor","utf-8")
}

signed_tx = web3.eth.account.sign_transaction(transaction, private_key)

tx_hash = web3.eth.sendRawTransaction(signed_tx.rawTransaction)

print(web3.toHex(tx_hash))
