const algosdk = require('algosdk');

// Create Address Manager
createAdress=()=> {
    let account = algosdk.generateAccount();
    console.log("Account Address: ", account);

    let mn = algosdk.secretKeyToMnemonic(account.sk);
    console.log("Account Mnemonic: ", mn);
}

module.exports = createAdress