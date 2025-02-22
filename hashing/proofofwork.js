/* 
** Assignment #1
** =============
** Give me an input string that outputs a SHA-256 hash that starts with 00000.
*/
const crypto = require('crypto');

function getHash(input, algo, encoding){
    return crypto.createHash(algo).update(input).digest(encoding);
}

function findHashStartsWith(startWith){
    let nonce = 665783;
    while(true){
        let nonceStr = nonce.toString();
        let tempHash = getHash(nonceStr, "sha256", "hex");
        if(tempHash.startsWith(startWith)){
            return {nonce: nonceStr, hash: tempHash};
        }
        nonce++;
    }
}

console.log(findHashStartsWith("000000"));

/* 
** Assignment #1
** =============
** Give me an input string that outputs a SHA-256 hash that starts with 00000.
*/

function prefixFindHashStartsWith(prefixStr, startWith){
    let nonce = 7919407;
    while(true){
        let nonceStr = prefixStr + nonce.toString();
        let tempHash = getHash(nonceStr, "sha256", "hex");
        if(tempHash.startsWith(startWith)){
            return {nonce: nonceStr, hash: tempHash};
        }
        nonce++;
    }
}
console.log(prefixFindHashStartsWith("adfgfdg","000000"));