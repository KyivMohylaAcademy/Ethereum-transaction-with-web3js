const ethers = require('ethers');

// Connect to the Mumbai testnet
const provider = new ethers.providers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com');

// The private key of the sender
const privateKey = process.env.PRIV_KEY; // 0xa92dBF40871D3deF50a36871F384Dd73fCb1e3f9
const wallet = new ethers.Wallet(privateKey, provider);
console.log(wallet.address)

async function sendMatic() {

    // Convert the string to hex
    const data = ethers.utils.toUtf8Bytes('Oleg Syniakevych');
    const hexData = ethers.utils.hexlify(data);

    const txResponse = await wallet.sendTransaction({
        to: "0xC9d59a78FE51D0A084B9C1F3Ca29Ec0Afa2fadc6",
        value: ethers.utils.parseEther("0.01"),
        data: hexData,
    });

    console.log(`Transaction hash: ${txResponse.hash}`);

    // Wait for the transaction to be mined
    const receipt = await txResponse.wait();
    console.log(`Transaction was mined in block ${receipt.blockNumber}`);
}

sendMatic().catch(console.error);
