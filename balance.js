const algosdk = require("algosdk");

checkBalance=() => {
    const port ="";
    const token = {
        "x-api-key": process.env.API
    };

    const TestServer = "https://testnet-algorand.api.purestake.io/ps2";

    let client = new algosdk.Algodv2(token, TestServer, port);
    let account = "CGYYSNTW5QYKBII3HHQBZUI4R4EUHT4N5GS72M6BTO3VRL72UQMS7AXBLU";

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