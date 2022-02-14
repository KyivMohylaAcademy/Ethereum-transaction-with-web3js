const Web3 = require('web3');
const environment = require('./environment');

const { provider: providerEnvironment } = environment;

const provider = new Web3.providers.HttpProvider(`https://ropsten.infura.io/v3/${providerEnvironment.token}`);
const web3 = new Web3(provider);

module.exports = web3;