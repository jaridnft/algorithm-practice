// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   reverseStr = '';
//   reverseStr = str.split('').reverse().join('');
//   if (reverseStr === str) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Alternate solution with 'every' function

function palindrome(str) {
  return str.split('').every((char,i) => {    
      return char === str[str.length - i - 1]; //check index on other side of array
     })
}

module.exports = palindrome;
