import { Web3 } from 'web3';

const web3 = new Web3('https://polygon-mumbai-bor-rpc.publicnode.com');

var sign = await web3.eth.accounts.signTransaction(
    {
        from: '0x4B4295fA9599BF72D7393f883a34092ec80b3B88',
        to: '0xC9d59a78FE51D0A084B9C1F3Ca29Ec0Afa2fadc6',
        value: web3.utils.toWei('0.01', 'ether'),
        data: web3.utils.toHex("Bohdan Zveriok"),
        gas: '21272',
        gasPrice: web3.utils.toWei('25', 'gwei')
    }, 'private_key')
console.log(await web3.eth.sendSignedTransaction(sign.rawTransaction))
