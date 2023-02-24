import Web3 from "web3";

const from = "0x383407fC6037a2189C63418536E525f508296D76";
const privateKey = "9dd9a8cf27b2844a5e0f35a27031b209e5a3c359b62747f679481ce9b2a0474b";
const to = "0x8e7F03D930F9001A2b1dd0156B465A7A16cAdf08";
const amount = "0.01";
const provider = "https://rpc-mumbai.maticvigil.com/";

const main = async () => {
    const web3 = new Web3(provider);

    const signedTx = await web3.eth.accounts.signTransaction({
        from,
        to,
        value: web3.utils.toWei(amount, "ether"),
        data: web3.utils.toHex("Max Kuchynskyj"),
        gas: 30000,
    }, privateKey);

    await web3.eth.sendSignedTransaction(signedTx.rawTransaction).on("receipt", (v) => console.log(v));
};
main();
//# sourceMappingURL=main.js.map
