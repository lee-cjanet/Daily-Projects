// ====================================================
// ADD NUMBERS
// ====================================================
var rl = require('readline');

const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Enter a number: ", function(answer) {
      sum += parseInt(answer);
      console.log(sum);
      
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } else {
    completionCallback(sum);
  }
}

// addNumbers(0, 3, sum => {
//   console.log(`Total Sum: ${sum}`);
//   reader.close();
//   process.stdin.destroy();
// });


// =========================================
// absurdBubbleSort
// =========================================

function absurdBubbleSort(arr, sortCompletionCallback) {
  askIfGreaterThan(el1, el2, callback)
}