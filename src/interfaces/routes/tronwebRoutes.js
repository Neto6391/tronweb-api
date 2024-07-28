import express from 'express';
import TronWebController from '../controllers/TronWebController.js';

const router = express.Router();

router.get('/balance/:address', TronWebController.getAccountBalance);
router.post('/stake', TronWebController.stakeTRX);
router.post('/deploy', TronWebController.deploySmartContract);
router.post('/mirror', TronWebController.mirrorBalance);

export default router;