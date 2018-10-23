function caesarCipher(string, shift) {
  let cipherCodes = string
    .split('')
    .map(char => char.charCodeAt(0) + shift);
  return String.fromCharCode(...cipherCodes);
}

module.exports = caesarCipher;