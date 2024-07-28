const TronWeb = require('tronweb');
require('dotenv').config();

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider(process.env.FULL_NODE);
const solidityNode = new HttpProvider(process.env.SOLIDITY_NODE);
const eventServer = process.env.EVENT_SERVER;

const privateKey = process.env.PRIVATE_KEY;

const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

module.exports = tronWeb;