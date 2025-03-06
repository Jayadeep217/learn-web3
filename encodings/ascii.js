function bytesToASCII(arr) {
  return arr.map((byte) => String.fromCharCode(byte));
}

function asciiToBytes(str) {
  for (const idx in str) {
    console.log(str.charAt(idx) + " - " + str.charCodeAt(idx));
  }
}

const bytes = Array.from({ length: 256 }, (_, i) => i);
bytesToASCII(bytes).map((ele, index) => console.log(index + " - " + ele));

const ascii = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
asciiToBytes(ascii);
