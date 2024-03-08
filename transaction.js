const { Web3 } = require("web3");
const dotenv = require("dotenv");

dotenv.config();
const { API_KEY, PRIVATE_KEY } = process.env;

console.log(API_KEY);
console.log(PRIVATE_KEY);

const sourceAddress = "0x4926737290440f6bF3B8f3BF29e72abF5fE8232d";
const destinationAddress = "0xC9d59a78FE51D0A084B9C1F3Ca29Ec0Afa2fadc6";
const web3 = new Web3("https://polygon-mumbai.infura.io/v3/" + API_KEY);

async function doTransaction()
{
    const gasPrice = await web3.eth.getGasPrice();

    const transaction = {
        from: sourceAddress,
        to: destinationAddress,
        value: web3.utils.toWei("0.01", "ether"),
        data: web3.utils.toHex("Kyryl Sydorov"),
        gas: 33333,
        gasPrice
    };
    
    web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY)
        .then(signedTransaction => {
            web3.eth.sendSignedTransaction(signedTransaction.rawTransaction)
                .on("receipt", console.log);
        });
}

doTransaction();