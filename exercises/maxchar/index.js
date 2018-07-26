// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let max_char = "";

  for (let char of str) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max){
      max = charMap[char];
      max_char = char;
    }
  }

  return max_char;

}

module.exports = maxChar;

// function maxChar(str) {
//   const chars = {};
//   let max = 0;
//   let max_char = "";

//   for (let char of str) {
//     chars[char] = chars[char] + 1 || 1;
//   }

//   for (let char in charMap) {
//     if (charMap[char] > max){
//       max = charMap[char];
//       max_char = char;
//     }
//   }

//   return chars;

// }