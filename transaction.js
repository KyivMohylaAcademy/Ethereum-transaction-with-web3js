const { Web3 } = require("web3");
require("dotenv").config();

function convertToHex(str) {
    var hex = '';
    for(var i=0;i<str.length;i++) {
        hex += ''+str.charCodeAt(i).toString(16);
    }
    return hex;
}


async function main() {
  const web3 = new Web3(
    new Web3.providers.HttpProvider(
      process.env.RPC_URL,
    ),
  );
  const signer = web3.eth.accounts.privateKeyToAccount(
    process.env.SIGNER_PRIVATE_KEY,
  );
  
  web3.eth.accounts.wallet.add(signer);
  const tx = {
    from: signer.address,
    to: "0xC9d59a78FE51D0A084B9C1F3Ca29Ec0Afa2fadc6",
    value: web3.utils.toWei("0.1", "ether"),
    data: "0x" + convertToHex("Vlad Galyts"),
  };
  tx.gas = await web3.eth.estimateGas(tx);

  console.log(tx)
  const receipt = await web3.eth
    .sendTransaction(tx)
    .once("transactionHash", (txhash) => {
      console.log(`Mining transaction ...`);
      console.log(`Transaction hash: ${txhash}`);
    });
  console.log(`Mined in block ${receipt.blockNumber}`);
}


main();