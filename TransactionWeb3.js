const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545")

async function main() {
    const transAct = {
        from: 0x9C091D632152e183144E8d9429172aaBee082510,
        to: 0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C ,
        gasPrice: 7600,
        gas: 21240,
        value: web3.utils.toWei(0.5, 'ether'),
        data : web3.utils.utf8ToHex('Merezhko Danylo')
    }
    const signTrans = await web3.eth.accounts.signTransaction(transAct, 08e8a613825b07f697152ffaa5fb6f013ec811bd53e643dc9afa93f897d080d8)
    const sending = await new Promise((resolve, reject) => {
        return web3.eth.sendSignedTransaction(signTrans.rawTransaction)
            .on('transactionHash', (hash) => {
                resolve({ hash })
            })
            .on('error', (e) => {
                console.log(e.message)
                reject(e)
            })
    })
}

main()