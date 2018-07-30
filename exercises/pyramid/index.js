// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }

  if (level.length === (2 * n - 1)) {
    console.log(level);
    pyramid(n, row + 1);
  }

  var midpoint = Math.floor((2 * n - 1) / 2);
  var add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}

module.exports = pyramid;

// My solution for pyramid

// function pyramid(n) {
//   var hash = '#';
//   var spaces = ' ';

//   for (var i = 1; i <= n; i++) {
//     console.log(spaces.repeat(n-i) + hash.repeat(2*i-1) + spaces.repeat(n-i));
//   }

// }

// Iterative Solution

// function pyramid(n) {
//   var midpoint = Math.floor((2 * n - 1) / 2);

//   for (var row = 0; row < n; row++) {
//     var level = '';

//     for (var col = 0; col < 2 * n - 1; col++) {
//       if (midpoint - row <= col && midpoint + row >= col) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }