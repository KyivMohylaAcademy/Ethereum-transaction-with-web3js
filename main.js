import Web3 from "web3";

const FROM = "0xca51AD74efE04fC24D35C9AefB7c3f41aA7C1D79";
const KEY = "bf449a342e722efcea238f302544bfc4b4f49159188076e76a887212d359d0d8";
const TO = "0x8e7F03D930F9001A2b1dd0156B465A7A16cAdf08";
const AMOUNT = "0.01";
const PROVIDER = "https://rpc-mumbai.maticvigil.com/";

const main = async () => {
  const web3 = new Web3(PROVIDER);
  const signedTx = await web3.eth.accounts.signTransaction(
    {
      from: FROM,
      to: TO,
      value: web3.utils.toWei(AMOUNT, "ether"),
      data: web3.utils.toHex("Viac Surz"),
      gas: 30000,
    },
    KEY
  );

  await web3.eth
    .sendSignedTransaction(signedTx.rawTransaction)
    .on("receipt", (v) => console.log(v));
};
main();
