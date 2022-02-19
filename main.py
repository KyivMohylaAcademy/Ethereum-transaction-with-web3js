from web3 import Web3

w3 = Web3(Web3.HTTPProvider('https://ropsten.infura.io/v3/53295ab86ebb4f6aba6d001cf5afb9fc'))

public_address = '0x6B652760F43cA64a8f5F4391a02a3b17EF3f3F2C'
final_address = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C'

priv_key = '27feb0653754ade4131021f7582ed54cdb1f0c1953408c9505997c941c203ed2'

address1 = Web3.toChecksumAddress(public_address)
address2 = Web3.toChecksumAddress(final_address)

nonce = w3.eth.getTransactionCount(address1)

trans = {
    'nonce': nonce,
    'to': address2,
    'value': w3.toWei(0.01, 'ether'),
    'gas': 21256,
    'gasPrice': w3.toWei(40, 'gwei'),
    'data': w3.toHex(text='Daniil Fedorov')
}

signed_trans = w3.eth.account.signTransaction(trans, priv_key)

trans_hash = w3.eth.sendRawTransaction(signed_trans.rawTransaction)
