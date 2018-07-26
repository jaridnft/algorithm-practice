// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');

  // here, Math.sign returns 1 for a positive number, and -1 for a negative number
  // this simplifies the "if" logic depending on the sign
  return parseInt(reversed, 10) * Math.sign(n);
  
  }

module.exports = reverseInt;
