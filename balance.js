const algosdk = require("algosdk");

checkBalance=() => {
    const port ="";
    const token = {
        "x-api-key": process.env.API
    };

    const TestServer = "https://testnet-algorand.api.purestake.io/ps2";

    let client = new algosdk.Algodv2(token, TestServer, port);
    let account = "ZD3KGXM3STSKWOLGXTNJUU5ZJ43ARSR6C46VL5BHTPD4HGQL3ZFVS5IZDU";

    (
        async () => {
            let account_info = (await client.accountInformation(account).do());
            console.log("Balance of Account: ", JSON.stringify(account_info));
        }
    )().catch((err) =>{
        console.log("Error: ", err);
    })
}

module.exports = checkBalance