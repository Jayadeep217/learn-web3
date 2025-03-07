/*
********************************
               ASCII
********************************
*/
function bytesToAscii(arr) {
  return arr.map((byte) => String.fromCharCode(byte));
}

function asciiToBytes(str) {
  for (const idx in str) {
    console.log(str.charAt(idx) + " - " + str.charCodeAt(idx));
  }
}

function bytesToAsciiTypedArray(byteArray) {
  return new TextDecoder().decode(byteArray);
}

function asciiToBytesTypedArray(asciiString) {
  return new Uint8Array([...asciiString].map((char) => char.charCodeAt(0)));
}

const bytes = Array.from({ length: 256 }, (_, i) => i);
bytesToAscii(bytes).map((ele, index) => console.log(index + " - " + ele));

const ascii = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
asciiToBytes(ascii);

const bytesTypedArray = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
const asciiString = bytesToAsciiTypedArray(bytesTypedArray);
console.log(asciiString); // Output: "Hello"

const asciiTypedArray = "Hello";
const byteArray_ascii = asciiToBytesTypedArray(asciiTypedArray);
console.log(byteArray_ascii); // Output: Uint8Array(5) [72, 101, 108, 108, 111]

/*
********************************
               HEX
********************************
*/
function arrayToHex(arr) {
  let hexStr = "";
  arr.map((ele) => (hexStr += ele.toString(16).padStart(2, "0")));
  console.log(hexStr);
}

function hexToArray(hexStr) {
  let byteArray = new Uint8Array(hexStr.length / 2);
  for (let i = 0; i < byteArray.length; i++) {
    byteArray[i] = parseInt(hexStr.substr(i * 2, 2), 16);
  }
  console.log(byteArray);
}

const byteArray = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
arrayToHex(byteArray);

const hex = "48656c6c6f";
const byteArrayFromHex = hexToArray(hex);

/*
********************************
               base64
********************************
*/

const uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
const base64Encoded = Buffer.from(uint8Array).toString("base64");
console.log(base64Encoded);

/*
********************************
               base58
********************************
*/

import bs58 from 'bs58';

function uint8ArrayToBase58(uint8Array) {
  return bs58.encode(uint8Array);
}

// Example usage:
const byteArray_b64 = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
const base58String = uint8ArrayToBase58(byteArray_b64);
console.log(base58String); // Output: Base58 encoded string

function base58ToUint8Array(base58String) {
  return bs58.decode(base58String);
}

// Example usage:
const base58 = base58String; // Use the previously encoded Base58 string
const byteArrayFromBase58 = base58ToUint8Array(base58);
console.log(byteArrayFromBase58); // Output: Uint8Array(5) [72, 101, 108, 108, 111]