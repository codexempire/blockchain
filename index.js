const BlockChain = require('./block_chain/blockChain');

const block_chain = new BlockChain();

let hash = require('object-hash');

const PROOF = 1560;

let valid_proof = (proof) => {
    let geussHash =  hash(proof);
    console.log("Hashing: ==> ", geussHash)

    return geussHash == hash(PROOF);
}

let proof_of_work = () => {
    let proof = 0;

    while(true) {
        if(!valid_proof(proof)) {
            proof ++
        } else {
            break;
        }
    }

    return proof;
}

if(proof_of_work() == PROOF) {
    block_chain.addNewTransaction('islam', 'christ', 2);
    let previous_hash = block_chain.lastBlock() ? block_chain.lastBlock().hash : null;
    block_chain.addNewBlock(previous_hash);
}

console.log(
    "Chain : ", block_chain.chain
)