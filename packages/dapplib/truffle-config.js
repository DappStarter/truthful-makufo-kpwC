require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remember promote hidden private orange giant'; 
let testAccounts = [
"0xffc77bb4554b36a59f372ef3530c488856d68670c3e32ec02313b8dd1821457c",
"0x85ecff3b5ef9471b73aa3844ffcb04eaa9db7c8160293a168caaf50630bbb0ef",
"0xe4ad1373e84870bed8adbfb628eb31492d90bb5e7cd47a7c39ca21c7ffd4e16c",
"0xed2342baf6893bca2d140643872983c4a65eb60d93f69dcc75854ce4194bcf01",
"0xea905c87f3ef6e58e6e550ae8f3c9dbe38b8580335253cd1a0e18446656002c1",
"0x3b429c5b9d1dc911b10d5761e4a4e41e2885b8c574547b842e10da07668b2fd1",
"0x3e281d88293ef91db34e03588c9899e4676f23fc1603197ef409d609ad36cd00",
"0x05367721aaf89be061efc42068bbf2d4385b35aee81e3068a1a3eb119f78cfbc",
"0x42b13e39630d1c88c30da011541ca3346702653655fc8b1e96909375b188d529",
"0x9b0d1278b6f759d6ab7f6279a7fa000d631b9e9d930f9957b134f6de1073ad41"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

