require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grid area fringe speak guard render remind history inflict nation fold sense'; 
let testAccounts = [
"0xcb6c6040a9b1a55642dae1512930bc543a11519a532b819cadf27f44458729b7",
"0x9f18522e3c8496d682e23d36f53838e37886715e6355c725f02d1e93c95efb3c",
"0xd9f6405b87979d2dd26f1c286c52f4b376e2ccef4d972976754bcb6555ed07f4",
"0xb1f585114b89d3d13b508f2d6f2b7d424d29fd85ea902ed61826b976704b5cdd",
"0x1381a5e1452a1f0235b1f4f15eea89c86acf5bd77c4086e2f7c4c00c8a196ac3",
"0xf103f1ea1ed7a469727c53bf0aaa6e24a6458f0f1d38e00db62a313cac6be447",
"0x4175d9285a3dddacfa1405bc193d53b6a27acf8d393874fbf9da8c7e8ba1a925",
"0x66758d70f5018a0c650b636bf9d9977fa8a9fba3431d737dac1d911b77cc0d47",
"0x05499f9e70cb09923fdef73b28052ab55b5ed696726617832a1e443cd0b4d332",
"0x56f5b57d38dbfcb9be91bbb2bd2d9e54da0a4b2c74209d10e33a4a4cc52af735"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


