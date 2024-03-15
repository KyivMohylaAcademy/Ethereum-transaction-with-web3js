const { Web3 } = require("web3");

async function main() {

    const web3 = new Web3(
        new Web3.providers.HttpProvider(
            `https://rpc-mumbai.maticvigil.com`,
        ),
    );
    const signer = web3.eth.accounts.privateKeyToAccount(
        process.env.SIGNER_PRIVATE_KEY,
        //private key should be configured as a param
    );
    web3.eth.accounts.wallet.add(signer);
    //ifo of a transaction
    const tx = {
        from: signer.address,
        to: "0xC9d59a78FE51D0A084B9C1F3Ca29Ec0Afa2fadc6",
        value: web3.utils.toWei("0.001", "ether"),
        data: web3.utils.utf8ToHex("Sofia Prochna")
    };
    tx.gas = await web3.eth.estimateGas(tx);

    // Sending the transaction to the network
    const receipt = await web3.eth
        .sendTransaction(tx)
        .once("transactionHash", (txhash) => {
            console.log(`Mining transaction ...`);
            console.log(`Transaction hash: ${txhash}`);
        });
    // The transaction is now on chain!
    console.log(`Mined in block ${receipt.blockNumber}`);
}

require("dotenv").config();
main();
//console.log(process.env)
//set SIGNER_PRIVATE_KEY
//node index.js