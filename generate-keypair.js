const { Keypair } = require('@solana/web3.js');
const bs58 = require('bs58');

// Generate a new keypair
const keypair = Keypair.generate();

// Log the public key and private key
console.log('Public Key:', keypair.publicKey.toBase58());
console.log('Private Key (base58):', bs58.encode(keypair.secretKey));