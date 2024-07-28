import TronWebService from '../../domain/services/TronWebService.js';

class TronWebController {
    async getAccountBalance(req, res) {
        try {
            const { address } = req.params;
            const balance = await TronWebService.getAccountBalance(address);
            res.json({ balance });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async stakeTRX(req, res) {
        try {
            const { amount } = req.body;
            const result = await TronWebService.stakeTRX(amount);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deploySmartContract(req, res) {
        try {
            const { originalAccount, mirroredAccount } = req.body;
            const contract = TronWebService.compileSmartContract();
            const address = await TronWebService.deploySmartContract(contract, originalAccount, mirroredAccount);
            res.json({ address });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async mirrorBalance(req, res) {
        try {
            const { contractAddress } = req.body;
            const result = await TronWebService.mirrorBalance(contractAddress);
            res.json({ result });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default new TronWebController();
