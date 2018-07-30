// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
  // row = 0, meaning we start on the top row 
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
// call steps, new row, with stair back to default ''
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
// call steps with existing row, on same row
  steps(n, row, stair);
}

module.exports = steps;

// Solution using row/column mapping

// function steps(n) {
//   for (var row = 0; row < n; row++) {
//     var stair = '';
//     for (var col = 0; col < n; col++) {
//       if (col <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }

// Solution using .repeat()

// function steps(n) {
//   var steps = '#'; 
//   var space = ' '; 

//   for (var i = 1; i <= n; i++) {
//     console.log(steps.repeat(i) + space.repeat(n-i));
//   }
// }