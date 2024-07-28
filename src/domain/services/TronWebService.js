const tronWeb = require('@config/tronweb');
const solc = require('solc');

class TronWebService {
    async getAccountBalance(address) {
        try {
            const balance = await tronWeb.trx.getBalance(address);
        } catch (error) {
            throw new Error(`Error getting account balance: ${error}`);
        }
    }

    async stakeTRX(amout) {
        try {

        } catch (error) {
            throw new Error(`Error staking TRX: ${error}`);
        }
    }
    compileSmartContract() {
        const source = `
        pragma solidity ^0.5.10;

        contract MirrorBalance {
            address public originalAccount;
            address public mirroredAccount;

            constructor(address _originalAccount, address _mirroredAccount) public {
                originalAccount = _originalAccount;
                mirroredAccount = _mirroredAccount;
            }

            function mirrorBalance() public {
                require(msg.sender == originalAccount, "Only the original account can call this function");
                mirroredAccount.transfer(address(this).balance);
            }
        }`;

        const input = {
            language: 'Solidity',
            sources: {
                'MirrorBalance.sol': {
                    content: source,
                },
            },
            settings: {
                outputSelection: {
                    '*': {
                        '*': ['*'],
                    },
                },
            },
        };

        const output = JSON.parse(solc.compile(JSON.stringify(input)));
        const contract = output.contracts['MirrorBalance.sol']['MirrorBalance'];
        return contract;
    }

    async deploySmartContract(contract, originalAccount, mirroredAccount) {
        const abi = contract.abi;
        const bytecode = contract.evm.bytecode.object;

        const contractInstance = await tronWeb.contract().new({
            abi,
            bytecode,
            parameters: [originalAccount, mirroredAccount]
        });

        return contractInstance.address;
    }

    async mirrorBalance(contractAddress) {
        const contractInstance = await tronWeb.contract().at(contractAddress);
        try {
            await contractInstance.mirrorBalance().send();
            return 'Mirrored balance successfully.';
        } catch (error) {
            throw new Error(`Error mirroring balance: ${error}`);
        }
    }

}

module.exports = new TronWebService();