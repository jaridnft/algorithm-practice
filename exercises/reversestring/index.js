// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    var strReverse = "";  
  
    for (i = (str.length - 1); i >= 0; i-- ) {
        strReverse = strReverse + str.charAt(i);
    }

    return strReverse;
}

module.exports = reverse;

// Modified, 'for of' solution

// function reverse(str) {
//   var strReverse = '';

//   for (let character of str) {
//       strReverse = character + strReverse;
//   }

//   return strReverse;
// }


// Solution two

// function reverse(str) {
//   return str.split('')
//             .reverse()
//             .join('');
// }
