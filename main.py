from web3 import Web3

from_address = '0xedD65dc6224684656c72C02Fc9c83D74387406d4'
to_address = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C'
private_key = ''
w3 = Web3(Web3.HTTPProvider('https://ropsten.infura.io/v3/60faf1db2708484b94288bfedb08ad4c'))

tx = {
    'nonce': w3.eth.get_transaction_count(from_address),
    'to': to_address,
    'value': w3.toWei(0.01, 'ether'),
    'gas': 100000,
    'gasPrice': w3.toWei('250', 'gwei'),
    'data': w3.toHex('Kateryna Steshenko'.encode('utf-8'))
}

signed_tx = w3.eth.account.signTransaction(tx, private_key)
tx_hash = w3.eth.sendRawTransaction(signed_tx.rawTransaction)
print(w3.toHex(tx_hash)) 