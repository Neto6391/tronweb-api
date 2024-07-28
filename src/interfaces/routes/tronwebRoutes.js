const express = require('express');
const TronWebController = require('@domain/controllers/TronWebController');

const router = express.Router();

router.get('/balance/:address', TronWebController.getAccountBalance);
router.post('/stake', TronWebController.stakeTRX);
router.post('/deploy', TronWebController.deploySmartContract);
router.post('/mirror', TronWebController.mirrorBalance);

module.exports = router;
