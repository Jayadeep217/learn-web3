const crypto = require("crypto");

const input = "learningweb3";
// const input = "100xdevs";

const hash = crypto.createHash("sha256").update(input).digest("hex");

console.log(hash);