let hash = require('object-hash');

class BlockChain {

    constructor() {
        // List of basic initialization
        this.chain = [];

        // transactions
        this.current_transactions = []
    }

    addNewBlock(prev_block_hash) {
        let block = {
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transactions: this.current_transactions,
            prev_block_hash
        }

        this.block_hash = hash(block);

        // Add the block to chain
        this.chain.push(block);
        this.current_transactions = [];
        return block;
    }

    addNewTransaction(sender, recipient, amount) {
        this.current_transactions.push({
            sender, recipient, amount
        });
    }

    lastBlock() {
        return this.chain.slice(-1)[0];
    }

    isEmpty() {
        return this.chain.length == 0;
    }

}

module.exports = BlockChain;