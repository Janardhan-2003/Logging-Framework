const crypto=require('crypto');

function generateAppId(appName){
    return `${appName}_${crypto.randomBytes(3).toString('hex')}`;
}

function generateApiKey(){
    return `sk_${crypto.randomBytes(24).toString("hex")}`;
}

module.exports={generateAppId, generateApiKey}