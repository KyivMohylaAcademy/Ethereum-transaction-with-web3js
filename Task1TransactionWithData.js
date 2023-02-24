const Web3 = require("web3");

const apiKey = "🔑";
const privateKey = "👀";
const sourceAddress = "0x64c20e3763047249036c3D19412ab01849B7bCd1";
const destinationAddress = "0x8e7F03D930F9001A2b1dd0156B465A7A16cAdf08";
const web3 = new Web3("https://polygon-mumbai.infura.io/v3/" + apiKey);

const transaction = {
    from: sourceAddress,
    to: destinationAddress,
    value: web3.utils.toWei("0.01"),
    data: web3.utils.toHex("Vladyslav Serha"),
    gas: "21240"
};

web3.eth.accounts.signTransaction(transaction, privateKey)
    .then(signedTransaction => {
        web3.eth.sendSignedTransaction(signedTransaction.rawTransaction)
            .on("receipt", console.log);
    });
