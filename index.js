const {Web3} = require('web3');

async function main() {
    const web3 = new Web3(
        new Web3.providers.HttpProvider("https://polygon-mumbai-bor-rpc.publicnode.com")
    );

    const signer = web3.eth.accounts.privateKeyToAccount(
        process.env.SIGNER_PRIVATE_KEY,
    );
    web3.eth.accounts.wallet.add(signer);


    const myName = 'Volodymyr Smetaniuk';
    const tx = {
        from: signer.address,
        to: "0xC9d59a78FE51D0A084B9C1F3Ca29Ec0Afa2fadc6",
        value: web3.utils.toWei("0.01", "ether"),
        data: web3.utils.utf8ToHex(myName),
    };
    tx.gas = await web3.eth.estimateGas(tx);

    await web3.eth.sendTransaction(tx).once("transactionHash", (txHash) => {
        console.log(`Transaction hash: ${txHash}`);
    });
}

main();