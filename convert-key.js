const bs58 = require('bs58');
const privateKey = process.env.WALLET_PRIVATE_KEY;
const secretKey = bs58.default.decode(privateKey); // Use default.decode
console.log(JSON.stringify(Array.from(secretKey)));