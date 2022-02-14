module.exports = {
    sender: {
        name: process.env.NAME,
        surname: process.env.SURNAME,
        privateKey: process.env.PRIVATE_KEY
    },
    provider: {
        token: process.env.TOKEN
    },
    receiver: {
        address: process.env.ADDRESS,
        gas: process.env.GAS,
        value: process.env.VALUE
    }
}