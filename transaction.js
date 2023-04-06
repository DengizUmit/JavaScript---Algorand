const algosdk = require('algosdk');
const baseServer = "https://testnet-algorand.api.purestake.io/ps2";
const port = "";

const token = {
    'X-API-key': "JMG5aCNjq84rK3lPqTtLA6rRsfG3FVid75bfBE27"
}

let algodClient = new algosdk.Algodv2(token, baseServer, port);

(
    async () => {
        let params = await algodClient.getTransactionParams().do();

        let amount = Math.floor(Math.random() * 1000);
        var mnemonic = "leisure spider wood figure valley fancy such advance rail program fee baby seek cute pizza bracket unable tourist sudden absurd best vanish wink abstract program";

        var recoveredAccount = algosdk.mnemonicToSecretKey(mnemonic);

        let txn = {
            "from": recoveredAccount.addr,
            "to": "X5JOYCODXALN3RK2WYYWYCSKLYOA7K4ZWDZL2OU2BWRI5LZI5XH6OFLZIQ",
            "fee": 1,
            "amount": amount,
            "firstRound": params.firstRound,
            "lastRound": params.lastRound,
            "genesisID": params.genesisID,
            "genesisHash": params.genesisHash,
            "note": new Uint8Array(0),
        };

        let signedTxn = algosdk.signTransaction(txn, recoveredAccount.sk);
        let sendTx = await algodClient.sendRawTransaction(signedTxn.blob).do();
        
        console.log("Transaction: " + sendTx.txId);
    }
)().catch(err => {
    console.log("Error: " + err);
});