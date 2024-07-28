const TronWeb = require('tronweb');
require('dotenv').config();

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider(process, env.FULL_NODE);