'use client' 

import fs from 'fs';
const localPath = '../issuance/issued.json';


const writeToLocal = (toAddress, fromAddress, cid, hash, newUID) => {
    const newEntry = {
        "toAddress": toAddress,
        "fromAddress": fromAddress,
        "cid": cid,
        "hash": hash,
        "newUID": newUID
    }

    const issued = JSON.parse(fs.readFileSync(localPath, 'utf8'));
    issued.push(newEntry);
    fs.writeFileSync(localPath, JSON.stringify(issued));
}

export default writeToLocal;