require('dotenv').config();

const web3 = require('./provider');
const environment = require('./environment');

const { Account, Transaction } = require('./domain');

const main = async () => {
    const isListening = await web3.eth.net.isListening();

    if (isListening) {
        console.info("Connection was done successfully.");

        const { 
            sender: senderEnvironment,
            receiver: receiverEnvironment
        } = environment;

        web3.eth.defaultAccount = senderEnvironment.address;

        const senderAccount = new Account(senderEnvironment.privateKey);
        const decryptedAccount = await senderAccount.get();

        const transaction = new Transaction({ 
            from: senderAccount.address,
            to: receiverEnvironment.address,
            value: receiverEnvironment.value,
            gas: receiverEnvironment.gas
         }, senderEnvironment.name, senderEnvironment.surname);

        const receipt = await transaction.send(decryptedAccount);

        console.info("Receipt", receipt);
    } else {
        console.error("Connectivity failed.");
    }
}

main();